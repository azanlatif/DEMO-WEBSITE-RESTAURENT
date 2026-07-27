/**
 * ============================================================
 *  CATERING PAGE — Book catering services for events.
 *  Hero + catering form + services cards + testimonial.
 * ============================================================
 */
import { useState } from "react";
import siteConfig from "../../config/siteConfig";
import "./Catering.css";

const EVENT_TYPES = [
  "Corporate Event",
  "Wedding Reception",
  "Birthday Party",
  "Private Dinner",
  "Holiday Gathering",
  "Other",
];

export default function Catering() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    time: "",
    venue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="catering-hero">
        <div className="catering-hero__overlay" />
        <div className="container catering-hero__inner">
          <span className="catering-hero__label">Events & Celebrations</span>
          <h1 className="catering-hero__heading">CATERING</h1>
        </div>
      </section>

      {/* ── Catering Intro + Form ────────────────────────── */}
      <section className="catering-form-section">
        <div className="container">
          <div className="catering-form-section__header">
            <span className="catering-form-section__label">Catering Services</span>
            <h2 className="catering-form-section__heading">Let Us Cater Your Event</h2>
            <p className="catering-form-section__subtext">
              From intimate dinners to grand celebrations, our team crafts bespoke menus
              tailored to your occasion. Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="catering-form" onSubmit={handleSubmit}>
            <div className="catering-form__grid">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="catering-form__input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="catering-form__input"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="catering-form__input"
                required
              />
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="catering-form__input catering-form__select"
                required
              >
                <option value="" disabled>Event Type</option>
                {EVENT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className="catering-form__input"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="catering-form__input"
                required
              />
            </div>

            <div className="catering-form__row">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="catering-form__input"
                required
              />
              <input
                type="text"
                name="venue"
                placeholder="Venue / Location"
                value={formData.venue}
                onChange={handleChange}
                className="catering-form__input"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your event — menu preferences, dietary requirements, budget, or any special requests…"
              value={formData.message}
              onChange={handleChange}
              className="catering-form__textarea"
              rows={5}
            />

            <div className="catering-form__submit-row">
              <button type="submit" className="catering-form__btn" disabled={submitted}>
                {submitted ? "Request Sent! ✓" : "Request a Quote"}
              </button>
            </div>

            {submitted && (
              <p className="catering-form__success">
                Thank you! We've received your catering request and will contact you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ── What We Offer ────────────────────────────────── */}
      <section className="catering-services">
        <div className="container">
          <span className="catering-services__label">Our Offerings</span>
          <h2 className="catering-services__heading">What We Provide</h2>
          <div className="catering-services__grid">
            <div className="catering-services__card">
              <div className="catering-services__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop"
                  alt="Custom menus"
                  loading="lazy"
                />
              </div>
              <h3 className="catering-services__card-title">Custom Menus</h3>
              <p className="catering-services__card-text">
                Personalised menus designed around your preferences, dietary needs, and event theme.
              </p>
            </div>

            <div className="catering-services__card">
              <div className="catering-services__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
                  alt="Full service"
                  loading="lazy"
                />
              </div>
              <h3 className="catering-services__card-title">Full Service</h3>
              <p className="catering-services__card-text">
                Professional staff, tableware, setup, and cleanup — we handle everything.
              </p>
            </div>

            <div className="catering-services__card">
              <div className="catering-services__img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
                  alt="Any occasion"
                  loading="lazy"
                />
              </div>
              <h3 className="catering-services__card-title">Any Occasion</h3>
              <p className="catering-services__card-text">
                Weddings, corporate events, birthdays, or private dinners — no event is too big or small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Strip ────────────────────────────────── */}
      <section className="catering-contact">
        <div className="container">
          <div className="catering-contact__grid">
            <div className="catering-contact__card">
              <div className="catering-contact__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="catering-contact__title">Email</h3>
              <p className="catering-contact__detail">{siteConfig.contact.email}</p>
            </div>

            <div className="catering-contact__card">
              <div className="catering-contact__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="catering-contact__title">Phone</h3>
              <p className="catering-contact__detail">{siteConfig.contact.phone}</p>
            </div>

            <div className="catering-contact__card">
              <div className="catering-contact__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="catering-contact__title">Location</h3>
              <p className="catering-contact__detail">{siteConfig.contact.addressShort}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
