/**
 * ============================================================
 *  NAVBAR COMPONENT
 *  Sticky, dark navbar with:
 *  - Logo from siteConfig
 *  - Desktop links with orange hover dropdowns
 *  - Keyboard-accessible dropdowns (focus-within)
 *  - Reservation button + cart icon with badge
 *  - Mobile hamburger → slide-in menu with expandable sections
 * ============================================================
 */
import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();

  /* ── State ──────────────────────────────────────────────── */
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null); // which mobile section is open

  /* ── Scroll listener for transparent→solid transition ──── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route change ─────────────────── */
  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
  }, [location.pathname]);

  /* ── Lock body scroll when mobile menu is open ─────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);
  const toggleMobileSection = useCallback(
    (label) => setExpandedMobile((prev) => (prev === label ? null : label)),
    []
  );

  /* ── Determine if a path is currently active ───────────── */
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar--solid" : "navbar--transparent"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__container">
          {/* ── Logo ────────────────────────────────────── */}
          <Link to="/" className="navbar__logo" aria-label={`${siteConfig.name} home`}>
            {siteConfig.logo ? (
              <img src={siteConfig.logo} alt={siteConfig.logoAlt} />
            ) : (
              <>
                <span className="navbar__logo-accent">{siteConfig.name.charAt(0)}</span>
                {siteConfig.name.slice(1)}
              </>
            )}
          </Link>

          {/* ── Desktop Links ───────────────────────────── */}
          <ul className="navbar__links">
            {siteConfig.navLinks.map((item) => (
              <li key={item.label} className="navbar__item">
                {item.children ? (
                  /* Link with dropdown */
                  <>
                    <button
                      className={`navbar__link ${isActive(item.path) ? "navbar__link--active" : ""}`}
                      aria-haspopup="true"
                      aria-expanded="false"
                      tabIndex={0}
                    >
                      {item.label}
                      <span className="navbar__chevron" aria-hidden="true">▼</span>
                    </button>
                    <div className="navbar__dropdown" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="navbar__dropdown-link"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Simple link */
                  <NavLink
                    to={item.path}
                    className={({ isActive: active }) =>
                      `navbar__link ${active ? "navbar__link--active" : ""}`
                    }
                    end={item.path === "/"}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* ── Actions (Reservation + Cart + Hamburger) ── */}
          <div className="navbar__actions">
            <Link to="/contact" className="navbar__reservation-btn">
              Reservation
            </Link>

            {/* Cart icon */}
            <Link to="/shop" className="navbar__cart" aria-label={`Cart: ${cartCount} items`}>
              <svg className="navbar__cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartCount > 0 && (
                <span className="navbar__cart-badge">{cartCount}</span>
              )}
            </Link>

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
          className={`navbar__backdrop ${mobileOpen ? "navbar__backdrop--visible" : ""}`}
          onClick={toggleMobile}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile Slide-In Menu ────────────────────────── */}
      <div
        className={`navbar__mobile-menu ${mobileOpen ? "navbar__mobile-menu--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        {siteConfig.navLinks.map((item) => (
          <div key={item.label} className="navbar__mobile-item">
            {item.children ? (
              <>
                <button
                  className={`navbar__mobile-link ${isActive(item.path) ? "navbar__mobile-link--active" : ""}`}
                  onClick={() => toggleMobileSection(item.label)}
                  aria-expanded={expandedMobile === item.label}
                >
                  {item.label}
                  <span
                    className={`navbar__mobile-chevron ${expandedMobile === item.label ? "navbar__mobile-chevron--open" : ""}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`navbar__mobile-subnav ${expandedMobile === item.label ? "navbar__mobile-subnav--open" : ""}`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="navbar__mobile-sublink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={item.path}
                className={`navbar__mobile-link ${isActive(item.path) ? "navbar__mobile-link--active" : ""}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <Link to="/contact" className="navbar__mobile-reservation">
          Reservation
        </Link>
      </div>
    </>
  );
}
