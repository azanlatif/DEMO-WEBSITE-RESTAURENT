/**
 * ============================================================
 *  ABOUT US PAGE — Short, elegant overview of the restaurant.
 *  All content comes from config/siteConfig.js
 * ============================================================
 */
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import "./About.css";

/* ── Icon map for values section ─────────────────────────── */
const ICON_MAP = {
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export default function About() {
  const { about } = siteConfig.pages;

  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${about.hero.backgroundImage})` }}
      >
        <div className="about-hero__overlay" />
        <div className="container about-hero__inner">
          <span className="about-hero__label">Welcome to {siteConfig.name}</span>
          <h1 className="about-hero__heading">{about.hero.heading}</h1>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────── */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image-wrapper">
              <img
                src={about.story.image}
                alt={about.story.imageAlt}
                className="about-story__image"
                loading="lazy"
              />
              <div className="about-story__accent" aria-hidden="true" />
            </div>

            <div className="about-story__content">
              <span className="about-story__tag">{about.story.tag}</span>
              <h2 className="about-story__heading">{about.story.heading}</h2>
              {about.story.paragraphs.map((p, i) => (
                <p key={i} className="about-story__text">
                  {p.replace("{name}", siteConfig.name)}
                </p>
              ))}
              <Link to={about.story.ctaLink} className="about-story__cta">
                {about.story.ctaText} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────────────── */}
      <section className="about-values">
        <div className="container">
          <span className="about-values__label">{about.values.label}</span>
          <h2 className="about-values__heading">{about.values.heading}</h2>

          <div className="about-values__grid">
            {about.values.items.map((item, i) => (
              <div key={i} className="about-values__card">
                <div className="about-values__icon-wrap">
                  {ICON_MAP[item.icon]}
                </div>
                <h3 className="about-values__card-title">{item.title}</h3>
                <p className="about-values__card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
