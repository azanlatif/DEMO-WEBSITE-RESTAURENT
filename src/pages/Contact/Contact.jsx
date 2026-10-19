/**
 * ============================================================
 *  CONTACT & BOOKING INQUIRY PAGE
 *  Wadi-e-Jannat Villas (Sālkhala)
 *  Direct phone & WhatsApp: +92 355 7771140
 * ============================================================
 */
import { useState, useCallback } from "react";
import siteConfig from "../../config/siteConfig";
import { openWhatsApp, bookStayWhatsApp } from "../../utils/whatsapp";
import "./Contact.css";

export default function Contact() {
  const { contact, specifications } = siteConfig;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    bookStayWhatsApp({
      name: form.name,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      note: form.notes,
    });
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    openWhatsApp(
      `Hello! I would like to inquire about booking a stay at ${siteConfig.name} in Sālkhala.`
    );
  };

  return (
    <div className="contact-page">
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">GET IN TOUCH</span>
          <h1 className="contact-hero__title">Reservations & Host Concierge</h1>
          <p className="contact-hero__sub">
            Directly connect with our management in Sālkhala via WhatsApp or submit a stay inquiry below.
          </p>
        </div>
      </section>

      {/* ── Main Content ────────────────────────────────────── */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Details & Quick WhatsApp Card */}
            <div className="contact-info-col">
              <div className="contact-card contact-card--highlight">
                <span className="contact-card__tag">INSTANT RESERVATION</span>
                <h3 className="contact-card__title">Chat Directly on WhatsApp</h3>
                <p className="contact-card__desc">
                  For immediate room availability, custom seasonal pricing, and real-time photos of the
                  wooden villas in Sālkhala, message our direct host concierge.
                </p>

                <div className="contact-phone-display">
                  <span className="contact-phone-label">Direct WhatsApp / Call:</span>
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-phone-link"
                  >
                    {contact.phone}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="btn btn-whatsapp contact-card__btn"
                >
                  <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  Open WhatsApp Chat
                </button>
              </div>

              {/* Location & Villa Specs Card */}
              <div className="contact-card">
                <h3 className="contact-card__heading">Property Location</h3>
                <p className="contact-card__address">
                  <strong>Wadi-e-Jannat Villas</strong>
                  <br />
                  {contact.address}
                </p>

                <div className="contact-specs-list">
                  <div className="contact-spec-row">
                    <span>Capacity:</span>
                    <strong>{specifications.guests} (Max listed)</strong>
                  </div>
                  <div className="contact-spec-row">
                    <span>Bedrooms & Beds:</span>
                    <strong>{specifications.bedrooms} ({specifications.beds})</strong>
                  </div>
                  <div className="contact-spec-row">
                    <span>Bathroom:</span>
                    <strong>{specifications.bathrooms} (Private bath & shower)</strong>
                  </div>
                  <div className="contact-spec-row">
                    <span>Check-in / Check-out:</span>
                    <strong>{contact.checkInTime} / {contact.checkOutTime}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Inquiry Form */}
            <div className="contact-form-col">
              <div className="contact-form-box">
                <span className="section-label">STAY INQUIRY</span>
                <h2 className="contact-form-title">Plan Your Stay in Sālkhala</h2>
                <p className="contact-form-desc">
                  Fill in your preferred travel dates. Clicking submit will automatically draft a
                  WhatsApp message directly to our host with all your booking details.
                </p>

                {submitted && (
                  <div className="contact-success-alert">
                    <span className="contact-success-icon">✓</span>
                    <div>
                      <strong>Inquiry Ready!</strong>
                      <p>
                        Your WhatsApp has been opened with the booking request details. Our host will
                        confirm availability with you shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="guest-name">Full Name *</label>
                    <input
                      type="text"
                      id="guest-name"
                      name="name"
                      required
                      placeholder="e.g. Tariq Khan"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guest-phone">Contact Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="guest-phone"
                      name="phone"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="check-in">Check-in Date *</label>
                      <input
                        type="date"
                        id="check-in"
                        name="checkIn"
                        required
                        value={form.checkIn}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="check-out">Check-out Date *</label>
                      <input
                        type="date"
                        id="check-out"
                        name="checkOut"
                        required
                        value={form.checkOut}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests-count">Number of Guests</label>
                    <select
                      id="guests-count"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4 Guests (Maximum)">4 Guests (Maximum)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="guest-notes">Special Requests or Questions</label>
                    <textarea
                      id="guest-notes"
                      name="notes"
                      rows={4}
                      placeholder="e.g. Airport shuttle request, arrival timing, heated pool inquiry..."
                      value={form.notes}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-whatsapp contact-submit-btn">
                    <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                    Send Booking Inquiry via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
