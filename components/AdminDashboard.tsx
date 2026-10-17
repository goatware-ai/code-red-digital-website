"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";

type InquiryStatus = "new" | "in_progress" | "closed";

interface AdminSession {
  username: string;
  csrf_token: string;
}

interface Inquiry {
  id: number;
  name: string;
  company: string | null;
  email: string;
  message: string;
  status: InquiryStatus;
  created_at: string;
}

interface InquiryPage {
  items: Inquiry[];
  total: number;
  limit: number;
  offset: number;
}

const PAGE_SIZE = 50;

function isInquiryStatus(value: string): value is InquiryStatus {
  return value === "new" || value === "in_progress" || value === "closed";
}

async function responseError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as { detail?: unknown; error?: unknown };
    if (typeof data.detail === "string") return data.detail;
    if (typeof data.error === "string") return data.error;
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
  }
  return `The request failed (HTTP ${response.status}).`;
}

export default function AdminDashboard() {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [inquiryPage, setInquiryPage] = useState<InquiryPage | null>(null);
  const [page, setPage] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadInquiries = useCallback(async (
    pageNumber: number,
  ) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/admin/inquiries?limit=${PAGE_SIZE}&offset=${pageNumber * PAGE_SIZE}`,
        { cache: "no-store", credentials: "same-origin" },
      );
      if (response.status === 401) {
        setSession(null);
        setInquiryPage(null);
        throw new Error("Your admin session has expired. Please sign in again.");
      }
      if (!response.ok) throw new Error(await responseError(response));
      setInquiryPage((await response.json()) as InquiryPage);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "We couldn't load contact inquiries. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isCurrent = true;
    async function checkSession() {
      try {
        const response = await fetch("/api/admin/session", {
          cache: "no-store",
          credentials: "same-origin",
        });
        if (response.status === 401) return;
        if (!response.ok) throw new Error(await responseError(response));
        const currentSession = (await response.json()) as AdminSession;
        if (isCurrent) {
          setSession(currentSession);
          void loadInquiries(0);
        }
      } catch (cause) {
        if (isCurrent) {
          setError(
            cause instanceof Error
              ? cause.message
              : "We couldn't check the admin session.",
          );
        }
      } finally {
        if (isCurrent) setIsCheckingSession(false);
      }
    }

    void checkSession();
    return () => {
      isCurrent = false;
    };
  }, [loadInquiries]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) throw new Error(await responseError(response));
      const adminSession = (await response.json()) as AdminSession;
      setPassword("");
      setPage(0);
      setInquiryPage(null);
      setSession(adminSession);
      void loadInquiries(0);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "We couldn't sign in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function signOut() {
    if (!session) return;
    setError("");
    try {
      const response = await fetch("/api/admin/session", {
        method: "DELETE",
        credentials: "same-origin",
        headers: { "X-CSRF-Token": session.csrf_token },
      });
      if (response.status === 401) {
        setSession(null);
        setInquiryPage(null);
        return;
      }
      if (!response.ok) throw new Error(await responseError(response));
      setSession(null);
      setInquiryPage(null);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "We couldn't end the admin session.",
      );
    }
  }

  async function updateStatus(inquiryId: number, status: InquiryStatus) {
    if (!session) return;
    setError("");
    try {
      const response = await fetch(`/api/admin/inquiries/${inquiryId}`, {
        method: "PATCH",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": session.csrf_token,
        },
        body: JSON.stringify({ status }),
      });
      if (response.status === 401) {
        setSession(null);
        setInquiryPage(null);
        throw new Error("Your admin session has expired. Please sign in again.");
      }
      if (!response.ok) throw new Error(await responseError(response));
      await loadInquiries(page);
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "We couldn't update this inquiry.",
      );
    }
  }

  if (isCheckingSession) {
    return (
      <main className="admin-page">
        <div className="admin-shell admin-loading" role="status">
          Checking admin session…
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="admin-page">
        <section className="admin-login admin-pattern">
          <Link className="admin-back-link" href="/">
            ← Back to Code Red
          </Link>
          <p className="eyebrow">Secure area</p>
          <h1>Admin sign in</h1>
          <p className="admin-intro">
            Sign in to review contact inquiries and manage their status.
          </p>
          {error && <p className="admin-alert" role="alert">{error}</p>}
          <form className="admin-login-form" onSubmit={signIn}>
            <label>
              <span>Username</span>
              <input
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
                required
              />
            </label>
            <label>
              <span>Password</span>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
              />
            </label>
            <button className="admin-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  const totalPages = Math.max(
    1,
    Math.ceil((inquiryPage?.total ?? 0) / PAGE_SIZE),
  );

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <header className="admin-header">
          <div>
            <Link className="admin-back-link" href="/">
              ← Code Red website
            </Link>
            <p className="eyebrow">Code Red Digital Solutions</p>
            <h1>Contact inquiries</h1>
            <p className="admin-intro">
              Review messages submitted through the website contact form.
            </p>
          </div>
          <div className="admin-header-actions">
            <span>Signed in as <strong>{session.username}</strong></span>
            <button className="admin-secondary-button" type="button" onClick={signOut}>
              Sign out
            </button>
          </div>
        </header>

        {error && <p className="admin-alert" role="alert">{error}</p>}

        <div className="admin-list-heading">
          <h2>Inquiries</h2>
          <div className="admin-list-actions">
            <span>{inquiryPage?.total ?? 0} total</span>
            <button
              className="admin-secondary-button"
              type="button"
              onClick={() => void loadInquiries(page)}
              disabled={isLoading}
            >
              {isLoading ? "Refreshing…" : "Refresh"}
            </button>
          </div>
        </div>

        {isLoading && !inquiryPage ? (
          <div className="admin-empty-state" role="status">Loading inquiries…</div>
        ) : inquiryPage?.items.length ? (
          <div className="inquiry-list">
            {inquiryPage.items.map((inquiry) => (
              <article className="inquiry-card" key={inquiry.id}>
                <div className="inquiry-card-header">
                  <div>
                    <p className="inquiry-meta">
                      Inquiry #{inquiry.id} ·{" "}
                      {new Date(inquiry.created_at).toLocaleString()}
                    </p>
                    <h3>{inquiry.name}</h3>
                  </div>
                  <label className="inquiry-status">
                    <span>Status</span>
                    <select
                      aria-label={`Status for inquiry ${inquiry.id}`}
                      value={inquiry.status}
                      onChange={(event) => {
                        const value = event.currentTarget.value;
                        if (isInquiryStatus(value)) {
                          void updateStatus(inquiry.id, value);
                        }
                      }}
                    >
                      <option value="new">New</option>
                      <option value="in_progress">In progress</option>
                      <option value="closed">Closed</option>
                    </select>
                  </label>
                </div>
                <div className="inquiry-contact">
                  <a href={`mailto:${encodeURIComponent(inquiry.email)}`}>
                    {inquiry.email}
                  </a>
                  {inquiry.company && <span>{inquiry.company}</span>}
                </div>
                <p className="inquiry-message">{inquiry.message}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="admin-empty-state">
            {error ? "Inquiries could not be loaded." : "No contact inquiries yet."}
          </div>
        )}

        <nav className="admin-pagination" aria-label="Inquiry pages">
          <button
            className="admin-secondary-button"
            type="button"
            disabled={page === 0 || isLoading}
            onClick={() => {
              const previousPage = Math.max(0, page - 1);
              setPage(previousPage);
              void loadInquiries(previousPage);
            }}
          >
            Previous
          </button>
          <span>Page {page + 1} of {totalPages}</span>
          <button
            className="admin-secondary-button"
            type="button"
            disabled={page + 1 >= totalPages || isLoading}
            onClick={() => {
              const nextPage = Math.min(totalPages - 1, page + 1);
              setPage(nextPage);
              void loadInquiries(nextPage);
            }}
          >
            Next
          </button>
        </nav>
      </div>
    </main>
  );
}
