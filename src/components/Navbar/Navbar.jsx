/**
 * ============================================================
 *  NAVBAR COMPONENT
 *  Sticky, glassmorphic resort navigation with:
 *  - Wadi-e-Jannat Villas branding
 *  - Desktop links (Home, The Villa, Gallery, Pricing, Contact)
 *  - Direct WhatsApp booking button
 *  - Mobile drawer
 * ============================================================
 */
import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  /* ── State ──────────────────────────────────────────────── */
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Scroll listener for transparent→solid transition ──── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ─────────────────── */
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileOpen(false);
  }

  /* ── Lock body scroll when mobile menu is open ─────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  const handleBookingClick = (e) => {
    e.preventDefault();
    openWhatsApp(
      `Hello! I would like to book a stay at ${siteConfig.name} in Sālkhala.`
    );
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar--solid" : "navbar--transparent"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__container">
          {/* ── Brand Logo ──────────────────────────────── */}
          <Link to="/" className="navbar__logo" aria-label={`${siteConfig.name} home`}>
            <div className="navbar__logo-badge">W</div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-title">Wadi-e-Jannat</span>
              <span className="navbar__logo-sub">VILLAS · SĀLHKALA</span>
            </div>
          </Link>

          {/* ── Desktop Links ───────────────────────────── */}
          <ul className="navbar__links">
            <li className="navbar__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                About The Villa
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="navbar__item">
              <a href="/#pricing" className="navbar__link">
                Rates & Pricing
              </a>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* ── Actions (WhatsApp CTA + Mobile Toggle) ── */}
          <div className="navbar__actions">
            <button
              onClick={handleBookingClick}
              className="navbar__booking-btn"
              aria-label="Book on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="navbar__whatsapp-icon">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              <span>Book via WhatsApp</span>
            </button>

            {/* Hamburger toggle (mobile only) */}
            <button
              className={`navbar__hamburger ${mobileOpen ? "navbar__hamburger--open" : ""}`}
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Backdrop ─────────────────────────────── */}
      {mobileOpen && (
        <div
          className="navbar__backdrop navbar__backdrop--visible"
          onClick={toggleMobile}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Slide-In Menu ────────────────────────── */}
      <div
        className={`navbar__mobile-menu ${mobileOpen ? "navbar__mobile-menu--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="navbar__mobile-header">
          <div className="navbar__logo-badge">W</div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-title">Wadi-e-Jannat</span>
            <span className="navbar__logo-sub">VILLAS · SĀLHKALA</span>
          </div>
        </div>

        <div className="navbar__mobile-links">
          <Link to="/" className="navbar__mobile-link">
            Home
          </Link>
          <Link to="/about" className="navbar__mobile-link">
            About The Villa
          </Link>
          <Link to="/gallery" className="navbar__mobile-link">
            Photo Gallery
          </Link>
          <a href="/#pricing" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Rates & Pricing
          </a>
          <Link to="/contact" className="navbar__mobile-link">
            Contact & Location
          </Link>
        </div>

        <div className="navbar__mobile-footer">
          <p className="navbar__mobile-phone">📞 {siteConfig.contact.phone}</p>
          <button onClick={handleBookingClick} className="btn btn-whatsapp navbar__mobile-btn">
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            Book via WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
