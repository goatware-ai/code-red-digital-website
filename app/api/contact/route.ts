interface ContactPayload {
  name: string;
  company?: string;
  email: string;
  message: string;
}

function isContactPayload(value: unknown): value is ContactPayload {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const payload = value as Record<string, unknown>;
  return (
    typeof payload.name === "string" &&
    payload.name.trim().length > 0 &&
    payload.name.length <= 100 &&
    (payload.company === undefined ||
      (typeof payload.company === "string" && payload.company.length <= 150)) &&
    typeof payload.email === "string" &&
    payload.email.length <= 255 &&
    typeof payload.message === "string" &&
    payload.message.trim().length > 0 &&
    payload.message.length <= 10000
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ error: "The submitted form data is not valid JSON." }, { status: 400 });
    }
    throw error;
  }

  if (!isContactPayload(body)) {
    return Response.json(
      { error: "Please provide a name, valid email address, and message." },
      { status: 400 },
    );
  }

  const backendUrl = (
    process.env.BACKEND_API_URL ?? "http://localhost:8000"
  ).replace(/\/+$/, "");

  let upstream: Response;
  try {
    upstream = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name.trim(),
        company: body.company?.trim() || null,
        email: body.email.trim(),
        message: body.message.trim(),
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
  } catch (error) {
    console.error("Contact backend request failed.", error);
    return Response.json(
      { error: "We can't reach the contact service right now. Please try again later." },
      { status: 503 },
    );
  }

  if (!upstream.ok) {
    console.error(`Contact backend returned HTTP ${upstream.status}.`);
    if (upstream.status === 422) {
      return Response.json(
        { error: "Please check your name, email address, and message, then try again." },
        { status: 400 },
      );
    }

    return Response.json(
      { error: "We couldn't save your message. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json(
    { message: "Thank you. Your message has been sent successfully." },
    { status: 201 },
  );
}
