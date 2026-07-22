/**
 * ============================================================
 *  CONTACT PAGE — Full contact page matching the Tastyc design.
 *
 *  Sections:
 *  1. Dark hero banner with map background + "CONTACT" heading
 *  2. Contact Information (3 cards: Write Us, Call Us, Visit Us)
 *  3. Contact Form (First/Last Name, Phone, Email, Message)
 *
 *  All data from siteConfig.js — frontend-only form validation.
 * ============================================================
 */
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import "./Contact.css";

/** Simple email regex */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { contact } = siteConfig;

  /* ── Form state ────────────────────────────────────────── */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /** Update a field */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on that field as user types
    setErrors((prev) => {
      if (prev[name]) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return prev;
    });
  }, []);

  /** Validate & "submit" (frontend-only) */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const errs = {};

      if (!form.firstName.trim()) errs.firstName = "First name is required.";
      if (!form.lastName.trim()) errs.lastName = "Last name is required.";
      if (!form.email.trim()) errs.email = "Email is required.";
      else if (!EMAIL_RE.test(form.email.trim())) errs.email = "Enter a valid email.";
      if (!form.message.trim()) errs.message = "Message is required.";

      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }

      // Frontend-only: show success
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" });
    },
    [form]
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════ */}
      {/* 1. HERO BANNER                                     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="contact-banner">
        {/* Dark map-style background */}
        <div
          className="contact-banner__bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=600&fit=crop&q=30')`,
            filter: "saturate(0) brightness(0.25)",
          }}
        />
        <div className="contact-banner__overlay" />

        <div className="container contact-banner__content">
          <h1 className="contact-banner__heading">Contact</h1>
          <div className="contact-banner__breadcrumb">
            <Link to="/">Home</Link>
            <span className="contact-banner__breadcrumb-sep">/</span>
            <span>{contact.addressShort || contact.address}</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2. CONTACT INFORMATION                             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="contact-info" id="contact-info">
        <div className="container">
          <span className="contact-info__accent" aria-hidden="true" />
          <span className="contact-info__label">GET IN TOUCH</span>
          <h2 className="contact-info__heading">Contact Information</h2>
          <p className="contact-info__subtext">
            We're always eager to hear from you. Reach out by any of the methods below and we'll get back to you as soon as possible.
          </p>

          <div className="contact-cards">
            {/* Write Us */}
            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="contact-card__title">Write Us</h3>
              <div className="contact-card__detail">
                <a href={`mailto:${contact.email}`} className="contact-card__link">
                  {contact.email}
                </a>
                {contact.emailAlt && (
                  <a href={`mailto:${contact.emailAlt}`} className="contact-card__link">
                    {contact.emailAlt}
                  </a>
                )}
              </div>
            </div>

            {/* Call Us */}
            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-card__title">Call Us</h3>
              <div className="contact-card__detail">
                <a href={`tel:${contact.phone}`} className="contact-card__link">
                  {contact.phone}
                </a>
                {contact.phoneAlt && (
                  <a href={`tel:${contact.phoneAlt}`} className="contact-card__link">
                    {contact.phoneAlt}
                  </a>
                )}
              </div>
            </div>

            {/* Visit Us */}
            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="contact-card__title">Visit Us</h3>
              <div className="contact-card__detail">
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__link"
                >
                  {contact.address}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. CONTACT FORM                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <hr className="contact-form-section__divider" />
          <span className="contact-form-section__label">CONTACT FORM</span>
          <h2 className="contact-form-section__heading">Write Us a Message</h2>
          <p className="contact-form-section__subtext">
            Have a question or a special request? Fill out the form below and we'll get back to you shortly.
          </p>

          {submitted ? (
            <div className="contact-form__success">
              ✅ Thank you for your message! We'll get back to you within 24 hours.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Row 1: First Name + Last Name */}
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <input
                    type="text"
                    name="firstName"
                    className="contact-form__input"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    aria-label="First Name"
                    id="contact-first-name"
                  />
                  {errors.firstName && (
                    <span className="contact-form__field-error">{errors.firstName}</span>
                  )}
                </div>
                <div className="contact-form__group">
                  <input
                    type="text"
                    name="lastName"
                    className="contact-form__input"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    aria-label="Last Name"
                    id="contact-last-name"
                  />
                  {errors.lastName && (
                    <span className="contact-form__field-error">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone + Email */}
              <div className="contact-form__row">
                <div className="contact-form__group">
                  <input
                    type="tel"
                    name="phone"
                    className="contact-form__input"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    aria-label="Phone number"
                    id="contact-phone"
                  />
                </div>
                <div className="contact-form__group">
                  <input
                    type="email"
                    name="email"
                    className="contact-form__input"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    aria-label="Email address"
                    id="contact-email"
                  />
                  {errors.email && (
                    <span className="contact-form__field-error">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="contact-form__group contact-form__group--full">
                <textarea
                  name="message"
                  className="contact-form__textarea"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  aria-label="Your message"
                  id="contact-message"
                />
                {errors.message && (
                  <span className="contact-form__field-error">{errors.message}</span>
                )}
              </div>

              <div className="contact-form__submit-wrapper">
                <button type="submit" className="contact-form__submit">
                  SEND A MESSAGE
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
