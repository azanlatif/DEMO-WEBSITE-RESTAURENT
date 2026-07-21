/**
 * ============================================================
 *  FOOTER COMPONENT
 *  Shared footer on all pages with:
 *  - Logo + social icons (Facebook, Instagram, X, YouTube)
 *  - About Us blurb with READ MORE link
 *  - Contact info rows (Call / Write / Find Us)
 *  - Gallery strip with prev/next arrows
 *  - Dotted dividers, copyright, BACK TO TOP
 * ============================================================
 */
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import "./Footer.css";

export default function Footer() {
  const { name, footer, contact, socials, galleryImages } = siteConfig;

  /* ── Gallery scroll state ──────────────────────────────── */
  const [galleryOffset, setGalleryOffset] = useState(0);
  const visibleCount = 8; // number of visible images

  const scrollGallery = useCallback(
    (dir) => {
      setGalleryOffset((prev) => {
        const next = prev + dir;
        if (next < 0) return galleryImages.length - visibleCount;
        if (next > galleryImages.length - visibleCount) return 0;
        return next;
      });
    },
    [galleryImages.length]
  );

  /** Smooth-scroll back to top */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Visible gallery slice */
  const visibleImages = galleryImages.slice(
    galleryOffset,
    galleryOffset + visibleCount
  );

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* ── Top Grid: Brand | About | Contact ─────────── */}
        <div className="footer__grid">
          {/* Brand + Socials */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-accent">{name.charAt(0)}</span>
              {name.slice(1)}
            </Link>

            <div className="footer__socials">
              {/* Facebook */}
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="X (Twitter)"
              >
                <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* About Us Column */}
          <div className="footer__about">
            <h3 className="footer__column-title">About Us</h3>
            <p className="footer__about-text">{footer.aboutText}</p>
            <Link to="/about" className="footer__read-more">
              Read More <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Contact Column */}
          <div className="footer__contact">
            <h3 className="footer__column-title">Contact</h3>

            {/* Call */}
            <div className="footer__contact-row">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <p className="footer__contact-label">Call</p>
                <a href={`tel:${contact.phone}`} className="footer__contact-value">
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* Write */}
            <div className="footer__contact-row">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <p className="footer__contact-label">Write</p>
                <a href={`mailto:${contact.email}`} className="footer__contact-value">
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Find Us */}
            <div className="footer__contact-row">
              <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <p className="footer__contact-label">Find Us</p>
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact-value"
                >
                  {contact.address}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Gallery Strip ─────────────────────────────── */}
        <div className="footer__gallery-section">
          <div className="footer__gallery-header">
            <h4 className="footer__gallery-title">Gallery</h4>
            <div className="footer__gallery-arrows">
              <button
                className="footer__gallery-arrow"
                onClick={() => scrollGallery(-1)}
                aria-label="Previous gallery images"
              >
                ←
              </button>
              <button
                className="footer__gallery-arrow"
                onClick={() => scrollGallery(1)}
                aria-label="Next gallery images"
              >
                →
              </button>
            </div>
          </div>

          <div className="footer__gallery-strip">
            {visibleImages.map((src, i) => (
              <img
                key={`${galleryOffset}-${i}`}
                src={src}
                alt={`Gallery image ${galleryOffset + i + 1}`}
                className="footer__gallery-img"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ────────────────────────────────── */}
        <div className="footer__bottom">
          <p className="footer__copyright">{footer.copyright}</p>
          <button
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to Top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
