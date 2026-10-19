/**
 * ============================================================
 *  FOOTER COMPONENT
 *  Wadi-e-Jannat Villas luxury alpine resort footer:
 *  - Brand & story blurb
 *  - Essential contact & WhatsApp quick chat (+92 355 7771140)
 *  - Resort specifications
 *  - Real photo strip with interactive preview
 *  - Smooth back-to-top
 * ============================================================
 */
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import { villaGallery } from "../../data/resortData";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Footer.css";

export default function Footer() {
  const { name, contact, footer, specifications } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookingChat = (e) => {
    e.preventDefault();
    openWhatsApp(
      `Hello! I would like to make a reservation inquiry for ${name} in Sālkhala.`
    );
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* ── Real Resort Gallery Strip ─────────────────────── */}
        <div className="footer__gallery-strip">
          <div className="footer__gallery-header">
            <span className="footer__gallery-tag">RESORT GLIMPSE</span>
            <span className="footer__gallery-caption">Life at Wadi-e-Jannat Villas, Sālkhala</span>
          </div>
          <div className="footer__gallery-grid">
            {villaGallery.slice(0, 6).map((item) => (
              <div key={item.id} className="footer__gallery-thumb">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="footer__gallery-overlay">
                  <span>{item.categoryLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Footer Grid ────────────────────────────── */}
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__col footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-badge">W</span>
              <span className="footer__logo-name">{name}</span>
            </Link>
            <p className="footer__about-text">{footer.aboutText}</p>
            <div className="footer__quick-specs">
              <span className="footer__spec-chip">👥 {specifications.guests}</span>
              <span className="footer__spec-chip">🛏️ {specifications.beds}</span>
              <span className="footer__spec-chip">🚿 {specifications.bathrooms}</span>
              <span className="footer__spec-chip">📍 {specifications.location}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer__col">
            <h4 className="footer__heading">EXPLORE</h4>
            <ul className="footer__links">
              <li>
                <Link to="/">Home Overview</Link>
              </li>
              <li>
                <Link to="/about">About The Villa</Link>
              </li>
              <li>
                <Link to="/gallery">Photo Gallery</Link>
              </li>
              <li>
                <a href="/#pricing">Rates & Packages</a>
              </li>
              <li>
                <Link to="/contact">Contact & Map</Link>
              </li>
            </ul>
          </div>

          {/* Villa Amenities Column */}
          <div className="footer__col">
            <h4 className="footer__heading">AMENITIES</h4>
            <ul className="footer__links">
              <li>✦ Heated Indoor Pool</li>
              <li>✦ Free High-Speed Wi-Fi</li>
              <li>✦ Free Private Parking</li>
              <li>✦ Air Conditioning</li>
              <li>✦ Garden & Mountain Terrace</li>
              <li>✦ Private Bath & Slippers</li>
            </ul>
          </div>

          {/* Contact & WhatsApp Booking */}
          <div className="footer__col footer__contact">
            <h4 className="footer__heading">RESERVATIONS</h4>
            <p className="footer__contact-item">
              <span className="footer__contact-label">Location:</span>
              <span>{contact.address}</span>
            </p>
            <p className="footer__contact-item">
              <span className="footer__contact-label">Direct Phone:</span>
              <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>{contact.phone}</a>
            </p>
            <p className="footer__contact-item">
              <span className="footer__contact-label">Check-in / Out:</span>
              <span>
                {contact.checkInTime} / {contact.checkOutTime}
              </span>
            </p>

            <button onClick={handleBookingChat} className="btn btn-whatsapp footer__cta-btn">
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
          <button onClick={scrollToTop} className="footer__back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
