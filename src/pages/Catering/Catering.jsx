/**
 * ============================================================
 *  CATERING PAGE — Book catering services for events.
 *  All content from config/siteConfig.js
 * ============================================================
 */
import { useState } from "react";
import siteConfig from "../../config/siteConfig";
import "./Catering.css";

import { openWhatsApp } from "../../utils/whatsapp";

export default function Catering() {
  const { catering } = siteConfig.pages;
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

    let text = `🎉 *CATERING REQUEST*\n`;
    text += `-------------------------------\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Email:* ${formData.email}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    text += `*Event Type:* ${formData.eventType}\n`;
    text += `*Guests:* ${formData.guests}\n`;
    text += `*Date:* ${formData.date} | *Time:* ${formData.time}\n`;
    if (formData.venue) text += `*Venue:* ${formData.venue}\n`;
    if (formData.message) text += `*Details/Message:* ${formData.message}\n`;

    openWhatsApp(text);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="catering-hero"
        style={{ backgroundImage: `url(${catering.hero.backgroundImage})` }}
      >
        <div className="catering-hero__overlay" />
        <div className="container catering-hero__inner">
          <span className="catering-hero__label">{catering.hero.label}</span>
          <h1 className="catering-hero__heading">{catering.hero.heading}</h1>
        </div>
      </section>

      {/* ── Catering Intro + Form ────────────────────────── */}
      <section className="catering-form-section">
        <div className="container">
          <div className="catering-form-section__header">
            <span className="catering-form-section__label">{catering.form.label}</span>
            <h2 className="catering-form-section__heading">{catering.form.heading}</h2>
            <p className="catering-form-section__subtext">{catering.form.subtext}</p>
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
                {catering.form.eventTypes.map((type) => (
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
                {submitted ? catering.form.successText : catering.form.submitText}
              </button>
            </div>

            {submitted && (
              <p className="catering-form__success">{catering.form.successMessage}</p>
            )}
          </form>
        </div>
      </section>

      {/* ── What We Offer ────────────────────────────────── */}
      <section className="catering-services">
        <div className="container">
          <span className="catering-services__label">{catering.services.label}</span>
          <h2 className="catering-services__heading">{catering.services.heading}</h2>
          <div className="catering-services__grid">
            {catering.services.items.map((item, i) => (
              <div key={i} className="catering-services__card">
                <div className="catering-services__img-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                  />
                </div>
                <h3 className="catering-services__card-title">{item.title}</h3>
                <p className="catering-services__card-text">{item.text}</p>
              </div>
            ))}
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
