
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

export default function SchedulePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main className="schedule-page">
      <div className="schedule-overlay" />

      <div className="schedule-container">
        <Link href="/" className="schedule-back">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <header className="schedule-header">
          <p className="schedule-eyebrow">
            <span /> LET&apos;S BUILD SOMETHING BETTER
          </p>

          <h1>
            Let&apos;s talk about
            <br />
            <span>your next big idea.</span>
          </h1>

          <p className="schedule-description">
            Book a consultation to discuss your business goals,
            technology challenges, and how Code Red Digital
            Solutions LLC can help move your business forward.
          </p>

          <div className="schedule-benefits">
            <span>
              <CheckCircle2 size={17} />
              30-minute consultation
            </span>
            <span>
              <CheckCircle2 size={17} />
              No-obligation discussion
            </span>
          </div>
        </header>

        <section className="schedule-card">
          <div className="schedule-card-heading">
            <div className="schedule-calendar-icon">
              <CalendarDays size={25} />
            </div>

            <div>
              <h2>Choose a time that works for you</h2>
              <p>Select an available date and time below.</p>
            </div>
          </div>

          <div className="schedule-calendar">
            {calendlyUrl ? (
              <iframe
                src={calendlyUrl}
                title="Book an IT consultation with Code Red Digital Solutions LLC"
                width="100%"
                height="720"
                frameBorder="0"
              />
            ) : (
              <div className="schedule-unavailable">
                <CalendarDays size={36} />
                <h3>Online booking is not configured yet</h3>
                <p>
                  Please contact us to arrange your consultation.
                </p>
                <Link
                  href="/#contact"
                  className="schedule-contact-button"
                >
                  Contact Us <ArrowUpRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </section>

        <footer className="schedule-footer">
          <span>CODE RED DIGITAL SOLUTIONS LLC</span>
          <span>Technology. Strategy. Results.</span>
        </footer>
      </div>
    </main>
  );
}
