"use client";

import { FormEvent, useState } from "react";

interface ContactFields {
  name: string;
  company: string;
  email: string;
  message: string;
}

type SubmissionStatus = {
  kind: "success" | "error";
  message: string;
};

const emptyForm: ContactFields = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyForm);
  const [status, setStatus] = useState<SubmissionStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.currentTarget;
    setFields((previous) => ({ ...previous, [name]: value }));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const result = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "We couldn't send your message. Please try again.");
      }

      setFields(emptyForm);
      setStatus({
        kind: "success",
        message: result.message ?? "Thank you. Your message has been sent successfully.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="contact-form-fields">
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={fields.name}
            onChange={updateField}
            required
          />
        </label>
        <label>
          <span>Company (optional)</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={150}
            value={fields.company}
            onChange={updateField}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={255}
            value={fields.email}
            onChange={updateField}
            required
          />
        </label>
        <label>
          <span>How can we help?</span>
          <textarea
            name="message"
            rows={4}
            maxLength={10000}
            value={fields.message}
            onChange={updateField}
            required
          />
        </label>
      </div>
      <button className="contact-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <span aria-hidden="true">↗</span>}
      </button>
      {status && (
        <p
          className={`contact-status contact-status-${status.kind}`}
          role={status.kind === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
