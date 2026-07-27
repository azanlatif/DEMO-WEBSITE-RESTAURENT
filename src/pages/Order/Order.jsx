/**
 * ============================================================
 *  ORDER ONLINE PAGE — Place an order for pickup or delivery.
 *  All content from config/siteConfig.js
 * ============================================================
 */
import { useState } from "react";
import siteConfig from "../../config/siteConfig";
import menuData from "../../data/menuData";
import "./Order.css";

const STEP_ICONS = {
  document: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

export default function Order() {
  const { order } = siteConfig.pages;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "delivery",
    address: "",
    date: "",
    time: "",
    items: "",
    notes: "",
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
      <section
        className="order-hero"
        style={{ backgroundImage: `url(${order.hero.backgroundImage})` }}
      >
        <div className="order-hero__overlay" />
        <div className="container order-hero__inner">
          <span className="order-hero__label">{order.hero.label}</span>
          <h1 className="order-hero__heading">{order.hero.heading}</h1>
        </div>
      </section>

      {/* ── Order Form Section ───────────────────────────── */}
      <section className="order-form-section">
        <div className="container">
          <div className="order-form-section__header">
            <span className="order-form-section__label">{order.form.label}</span>
            <h2 className="order-form-section__heading">{order.form.heading}</h2>
            <p className="order-form-section__subtext">{order.form.subtext}</p>
          </div>

          <form className="order-form" onSubmit={handleSubmit}>
            <div className="order-form__grid">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="order-form__input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="order-form__input"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="order-form__input"
                required
              />
              <select
                name="orderType"
                value={formData.orderType}
                onChange={handleChange}
                className="order-form__input order-form__select"
              >
                <option value="delivery">Delivery</option>
                <option value="pickup">Pickup</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="order-form__input"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="order-form__input"
                required
              />
            </div>

            {formData.orderType === "delivery" && (
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                className="order-form__input order-form__full"
                required
              />
            )}

            <textarea
              name="items"
              placeholder="What would you like to order? (e.g. 2x Grilled Salmon, 1x Caesar Salad)"
              value={formData.items}
              onChange={handleChange}
              className="order-form__textarea"
              rows={4}
              required
            />

            <textarea
              name="notes"
              placeholder="Special instructions or dietary requirements (optional)"
              value={formData.notes}
              onChange={handleChange}
              className="order-form__textarea order-form__textarea--small"
              rows={2}
            />

            <div className="order-form__submit-row">
              <button type="submit" className="order-form__btn" disabled={submitted}>
                {submitted ? order.form.successText : order.form.submitText}
              </button>
            </div>

            {submitted && (
              <p className="order-form__success">{order.form.successMessage}</p>
            )}
          </form>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="order-steps">
        <div className="container">
          <span className="order-steps__label">{order.steps.label}</span>
          <h2 className="order-steps__heading">{order.steps.heading}</h2>
          <div className="order-steps__grid">
            {order.steps.items.map((step, i) => (
              <div key={i} className="order-steps__card">
                <div className="order-steps__icon-wrap">
                  {STEP_ICONS[step.icon]}
                </div>
                <h3 className="order-steps__card-title">{step.title}</h3>
                <p className="order-steps__card-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ───────────────────────────── */}
      <section className="order-contact">
        <div className="container">
          <div className="order-contact__grid">
            <div className="order-contact__card">
              <div className="order-contact__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="order-contact__title">Email</h3>
              <p className="order-contact__detail">{siteConfig.contact.email}</p>
              <p className="order-contact__detail">{siteConfig.contact.emailAlt}</p>
            </div>

            <div className="order-contact__card">
              <div className="order-contact__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="order-contact__title">Phone</h3>
              <p className="order-contact__detail">{siteConfig.contact.phone}</p>
              <p className="order-contact__detail">{siteConfig.contact.phoneAlt}</p>
            </div>

            <div className="order-contact__card">
              <div className="order-contact__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="order-contact__title">Location</h3>
              <p className="order-contact__detail">{siteConfig.contact.addressShort}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
