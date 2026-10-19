/**
 * ============================================================
 *  PRICING SECTION COMPONENT
 *  Adapted from 21st.dev Single Plan Pricing Card (ln-dev7)
 *  Tailored to Wadi-e-Jannat Villas with responsive design tokens
 *  and direct WhatsApp booking integration.
 * ============================================================
 */
import siteConfig from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./PricingSection.css";

export default function PricingSection() {
  const { pricing, specifications, contact } = siteConfig;

  const handleBooking = () => {
    openWhatsApp(
      `Hello! I would like to book a stay at ${siteConfig.name} in Sālkhala (${specifications.guests}, ${specifications.beds}). Please share availability and payment details.`
    );
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block">
          <span className="section-label">RATES & RESERVATIONS</span>
          <h2 className="section-heading">Transparent Luxury, Direct Host Booking</h2>
          <p className="section-subheading">
            Experience complete comfort in our wooden villas in Sālkhala with premium amenities included.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="pricing-card-wrapper">
          <div className="pricing-card">
            {/* Card Header */}
            <div className="pricing-card__header">
              <span className="pricing-card__badge">{pricing.badge}</span>
              <h3 className="pricing-card__title">{pricing.title}</h3>
              <p className="pricing-card__subtitle">
                Exclusive rental of the charming wooden villa in Sālkhala for up to {specifications.guests}.
              </p>
            </div>

            {/* Price block */}
            <div className="pricing-card__price-box">
              <div className="pricing-card__price-row">
                <span className="pricing-card__currency">{pricing.currency}</span>
                <span className="pricing-card__amount">{pricing.pricePerNight}</span>
                <div className="pricing-card__price-meta">
                  <span className="pricing-card__original-price">
                    {pricing.currency} {pricing.originalPrice}
                  </span>
                  <span className="pricing-card__period">{pricing.period}</span>
                </div>
              </div>

              {/* Direct WhatsApp Booking Button */}
              <button
                type="button"
                onClick={handleBooking}
                className="btn btn-whatsapp pricing-card__cta"
                aria-label="Book villa via WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="pricing-card__cta-icon">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                <span>{pricing.ctaText} · {contact.phone}</span>
              </button>

              {/* Trust Badges */}
              <div className="pricing-card__trust-badges">
                {pricing.trustBadges.map((badge, idx) => (
                  <span key={idx} className="pricing-card__trust-item">
                    <svg className="pricing-card__trust-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Inclusions list */}
            <div className="pricing-card__features-box">
              <h4 className="pricing-card__features-title">WHAT IS INCLUDED IN YOUR STAY</h4>
              <ul className="pricing-card__features-list">
                {pricing.features.map((feature, idx) => (
                  <li key={idx} className="pricing-card__feature-item">
                    <span className="pricing-card__check-circle">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Footer note */}
            <div className="pricing-card__footer">
              <p className="pricing-card__guarantee">
                🌿 {pricing.note} Special requests or group bookings? Chat directly on WhatsApp anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
