/**
 * ============================================================
 *  ABOUT US PAGE — Short, elegant overview of the restaurant.
 *  Sections:
 *  1. Hero banner with title
 *  2. Our Story (brief text + image)
 *  3. Our Values (3 cards)
 * ============================================================
 */
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import "./About.css";

export default function About() {
  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <div className="container about-hero__inner">
          <span className="about-hero__label">Welcome to {siteConfig.name}</span>
          <h1 className="about-hero__heading">About Us</h1>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────── */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=450&fit=crop"
                alt="Restaurant ambiance"
                className="about-story__image"
                loading="lazy"
              />
              <div className="about-story__accent" aria-hidden="true" />
            </div>

            <div className="about-story__content">
              <span className="about-story__tag">Our Story</span>
              <h2 className="about-story__heading">
                Crafting Memorable Dining Experiences Since 2010
              </h2>
              <p className="about-story__text">
                At {siteConfig.name}, we believe every meal should tell a story.
                Our chefs blend time-honoured traditions with bold creativity,
                sourcing only the freshest local ingredients to craft dishes
                that delight the senses and warm the soul.
              </p>
              <p className="about-story__text">
                From our cosy interiors to our curated menu, every detail is
                designed to make you feel at home — while taking your taste buds
                on an unforgettable journey.
              </p>
              <Link to="/menu" className="about-story__cta">
                Explore Our Menu <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────────────── */}
      <section className="about-values">
        <div className="container">
          <span className="about-values__label">Why Us</span>
          <h2 className="about-values__heading">What Sets Us Apart</h2>

          <div className="about-values__grid">
            {/* Card 1 */}
            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="about-values__card-title">Premium Quality</h3>
              <p className="about-values__card-text">
                Locally sourced, organic ingredients prepared by award-winning chefs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="about-values__card-title">Made with Love</h3>
              <p className="about-values__card-text">
                Every dish is handcrafted with passion and attention to detail.
              </p>
            </div>

            {/* Card 3 */}
            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="about-values__card-title">Warm Hospitality</h3>
              <p className="about-values__card-text">
                A welcoming atmosphere where every guest is treated like family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
