import type { NextRequest } from "next/server";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

function isAllowedRequest(path: string[], method: string): boolean {
  if (path.length === 1 && path[0] === "session") {
    return ["GET", "POST", "DELETE"].includes(method);
  }

  if (path.length === 1 && path[0] === "inquiries") {
    return method === "GET";
  }

  return (
    path.length === 2 &&
    path[0] === "inquiries" &&
    /^\d+$/.test(path[1]) &&
    method === "PATCH"
  );
}

async function proxyAdminRequest(
  request: NextRequest,
  { params }: RouteContext,
): Promise<Response> {
  const { path } = await params;
  if (!isAllowedRequest(path, request.method)) {
    return Response.json({ detail: "Admin endpoint not found." }, { status: 404 });
  }

  const backendUrl = (
    process.env.BACKEND_API_URL ?? "http://localhost:8000"
  ).replace(/\/+$/, "");
  const upstreamUrl = new URL(
    `/api/admin/${path.map(encodeURIComponent).join("/")}${request.nextUrl.search}`,
    backendUrl,
  );
  const headers = new Headers({ Accept: "application/json" });
  const sessionCookie = request.cookies.get("admin_session")?.value;
  const csrfToken = request.headers.get("x-csrf-token");
  if (sessionCookie) headers.set("Cookie", `admin_session=${sessionCookie}`);
  if (csrfToken) headers.set("X-CSRF-Token", csrfToken);

  let body: string | undefined;
  if (request.method === "POST" || request.method === "PATCH") {
    body = await request.text();
    headers.set("Content-Type", request.headers.get("content-type") ?? "application/json");
  }

  let upstream: Response;
  try {
    upstream = await fetch(upstreamUrl, {
      method: request.method,
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error("Admin backend request failed.", error);
    return Response.json(
      { detail: "The admin service is temporarily unavailable." },
      { status: 503 },
    );
  }

  const responseHeaders = new Headers({
    "Cache-Control": "no-store",
  });
  const contentType = upstream.headers.get("content-type");
  if (contentType) responseHeaders.set("Content-Type", contentType);
  for (const cookieValue of upstream.headers.getSetCookie()) {
    responseHeaders.append("Set-Cookie", cookieValue);
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export const GET = proxyAdminRequest;
export const POST = proxyAdminRequest;
export const PATCH = proxyAdminRequest;
export const DELETE = proxyAdminRequest;
