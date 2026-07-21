/**
 * ============================================================
 *  NEWSLETTER COMPONENT
 *  "SUBSCRIBE OUR NEWSLETTER" dark banner section.
 *  Frontend-only email validation + success message.
 *  Rendered above the footer on every page.
 * ============================================================
 */
import { useState, useCallback } from "react";
import siteConfig from "../../config/siteConfig";
import "./Newsletter.css";

/** Simple email regex for frontend validation */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter() {
  const { newsletter } = siteConfig;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");

      if (!email.trim()) {
        setError("Please enter your email address.");
        return;
      }
      if (!EMAIL_RE.test(email.trim())) {
        setError("Please enter a valid email address.");
        return;
      }

      // Frontend-only: just show success
      setSuccess(true);
      setEmail("");
    },
    [email]
  );

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <h2 className="newsletter__heading">{newsletter.heading}</h2>
        <p className="newsletter__subtext">{newsletter.subtext}</p>

        {success ? (
          <p className="newsletter__success">{newsletter.successMessage}</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              className={`newsletter__input ${error ? "newsletter__input--error" : ""}`}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              aria-label="Email address"
              id="newsletter-email"
            />
            <button type="submit" className="newsletter__btn">
              {newsletter.buttonText}
            </button>
          </form>
        )}

        {error && <p className="newsletter__error">{error}</p>}
      </div>
    </section>
  );
}
