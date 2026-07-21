/**
 * ============================================================
 *  HOME PAGE — Full landing page matching the Tastyc design.
 *
 *  Sections (top → bottom):
 *  1. Hero Slider (full-screen, auto-advancing)
 *  2. Welcome / About ("We Invite You to Visit Our Restaurant")
 *  3. Fresh Ingredients (image + chef overlay)
 *  4. Chef's Recipes (video-style image + text)
 *  5. Why Choose Us (3 icon cards)
 *  6. Working Hours (parallax dark overlay)
 *  7. Testimonials (3 review cards)
 *  8. Stats / Counters (animated numbers)
 *  9. Download App (phone mockup + store buttons)
 * 10. Blog / Tips (3 post cards)
 *
 *  All text comes from  src/data/homeData.js
 *  Brand data comes from  src/config/siteConfig.js
 * ============================================================
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import homeData from "../../data/homeData";
import "./Home.css";

/* ─────────────────────────────────────────────────────────── */
/*  Animated counter hook (counts up on scroll into view)     */
/* ─────────────────────────────────────────────────────────── */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
}

/* ─────────────────────────────────────────────────────────── */
/*  Stat Item (individual counter)                            */
/* ─────────────────────────────────────────────────────────── */
function StatItem({ value, suffix, label }) {
  const [count, ref] = useCountUp(value);
  return (
    <div className="stats__item" ref={ref}>
      <div className="stats__value">
        {count}<span>{suffix}</span>
      </div>
      <div className="stats__label">{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  HOME PAGE COMPONENT                                       */
/* ─────────────────────────────────────────────────────────── */
export default function Home() {
  const {
    heroSlides,
    welcome,
    freshIngredients,
    chefRecipes,
    whyChooseUs,
    workingHoursSection,
    testimonials,
    stats,
    downloadApp,
    blogPosts,
  } = homeData;

  /* ── Hero slider state ─────────────────────────────────── */
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = heroSlides.length;

  const nextSlide = useCallback(
    () => setActiveSlide((p) => (p + 1) % slideCount),
    [slideCount]
  );
  const prevSlide = useCallback(
    () => setActiveSlide((p) => (p - 1 + slideCount) % slideCount),
    [slideCount]
  );

  /* Auto-advance hero every 5s */
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /* ── Why-choose-us icon mapper ─────────────────────────── */
  const renderWhyIcon = (type) => {
    switch (type) {
      case "quality":
        return (
          <svg className="why-us__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case "delivery":
        return (
          <svg className="why-us__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
        );
      case "service":
        return (
          <svg className="why-us__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════ */}
      {/* 1. HERO SLIDER                                     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${i === activeSlide ? "hero__slide--active" : ""}`}
          >
            <div
              className="hero__bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero__overlay" />
            <div className="hero__content container">
              <span className="hero__subtitle">{slide.subtitle}</span>
              <h1 className="hero__heading">{slide.heading}</h1>
              <p className="hero__description">{slide.description}</p>
              <Link to={slide.ctaLink} className="hero__cta">
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}

        {/* Slide navigation */}
        <div className="hero__nav">
          <button className="hero__arrow" onClick={prevSlide} aria-label="Previous slide">
            ←
          </button>
          <div className="hero__dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${i === activeSlide ? "hero__dot--active" : ""}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="hero__arrow" onClick={nextSlide} aria-label="Next slide">
            →
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2. WELCOME / ABOUT                                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="welcome" id="welcome">
        <div className="container">
          <div className="welcome__grid">
            <div className="welcome__content">
              <span className="welcome__label">{welcome.label}</span>
              <h2 className="welcome__heading">{welcome.heading}</h2>
              <p className="welcome__text">{welcome.description}</p>

              <div className="welcome__features">
                {welcome.features.map((feat, i) => (
                  <div key={i} className="welcome__feature">
                    <svg className="welcome__feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>

              <Link to={welcome.ctaLink} className="welcome__cta">
                {welcome.ctaText}
              </Link>
            </div>

            <div className="welcome__image-wrapper">
              <img
                src={welcome.image}
                alt="Restaurant interior"
                className="welcome__image"
                loading="lazy"
              />
              <div className="welcome__image-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. FRESH INGREDIENTS                               */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="fresh" id="fresh-ingredients">
        <div className="container">
          <div className="fresh__grid">
            <div className="fresh__image-group">
              <img
                src={freshIngredients.image}
                alt="Fresh ingredients"
                className="fresh__image-main"
                loading="lazy"
              />
              <img
                src={freshIngredients.chefImage}
                alt="Our chef"
                className="fresh__image-chef"
                loading="lazy"
              />
            </div>

            <div className="fresh__content">
              <span className="fresh__label">{freshIngredients.label}</span>
              <h2 className="fresh__heading">{freshIngredients.heading}</h2>
              <p className="fresh__text">{freshIngredients.description}</p>

              <div className="fresh__stats">
                {freshIngredients.stats.map((stat, i) => (
                  <div key={i} className="fresh__stat">
                    <div className="fresh__stat-value">{stat.value}</div>
                    <div className="fresh__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. CHEF'S RECIPES                                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="recipes" id="recipes">
        <div className="container">
          <div className="recipes__grid">
            <div className="recipes__image-wrapper">
              <img
                src={chefRecipes.image}
                alt="Chef's recipes"
                className="recipes__image"
                loading="lazy"
              />
              <button className="recipes__play-btn" aria-label="Play video">
                <svg className="recipes__play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>

            <div className="recipes__content">
              <span className="recipes__label">{chefRecipes.label}</span>
              <h2 className="recipes__heading">{chefRecipes.heading}</h2>
              <p className="recipes__text">{chefRecipes.description}</p>
              <Link to={chefRecipes.ctaLink} className="recipes__cta">
                {chefRecipes.ctaText} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. WHY CHOOSE US                                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="why-us" id="why-us">
        <div className="container">
          <span className="why-us__label">{whyChooseUs.label}</span>
          <h2 className="why-us__heading">{whyChooseUs.heading}</h2>

          <div className="why-us__grid">
            {whyChooseUs.items.map((item, i) => (
              <div key={i} className="why-us__card">
                <div className="why-us__icon-wrapper">
                  {renderWhyIcon(item.icon)}
                </div>
                <h3 className="why-us__card-title">{item.title}</h3>
                <p className="why-us__card-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. WORKING HOURS                                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section
        className="hours"
        id="working-hours"
        style={{ backgroundImage: `url(${workingHoursSection.backgroundImage})` }}
      >
        <div className="hours__overlay" />
        <div className="container hours__inner">
          <span className="hours__label">{workingHoursSection.label}</span>
          <h2 className="hours__heading">{workingHoursSection.heading}</h2>

          <div className="hours__table">
            {siteConfig.workingHours.map((row, i) => (
              <div key={i} className="hours__row">
                <span className="hours__day">{row.day}</span>
                <span className="hours__time">{row.hours}</span>
              </div>
            ))}
          </div>

          <Link to="/contact" className="hours__cta">
            BOOK A TABLE
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. TESTIMONIALS                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <span className="testimonials__label">{testimonials.label}</span>
          <h2 className="testimonials__heading">{testimonials.heading}</h2>

          <div className="testimonials__grid">
            {testimonials.items.map((item) => (
              <div key={item.id} className="testimonial-card">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-card__avatar"
                  loading="lazy"
                />
                <div className="testimonial-card__stars">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg key={i} className="testimonial-card__star" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__text">{item.text}</p>
                <h4 className="testimonial-card__name">{item.name}</h4>
                <span className="testimonial-card__role">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. STATS / COUNTERS                                */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="stats" id="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 9. DOWNLOAD APP                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section
        className="download"
        id="download-app"
        style={{ backgroundImage: `url(${downloadApp.backgroundImage})` }}
      >
        <div className="download__overlay" />
        <div className="container">
          <div className="download__grid">
            <div className="download__content">
              <span className="download__label">{downloadApp.label}</span>
              <h2 className="download__heading">{downloadApp.heading}</h2>
              <p className="download__text">{downloadApp.description}</p>

              <div className="download__buttons">
                <a href={downloadApp.appStoreUrl} className="download__store-btn" target="_blank" rel="noopener noreferrer">
                  <svg className="download__store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="download__store-text">
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </div>
                </a>

                <a href={downloadApp.playStoreUrl} className="download__store-btn" target="_blank" rel="noopener noreferrer">
                  <svg className="download__store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                  </svg>
                  <div className="download__store-text">
                    <small>Get it on</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>
            </div>

            <div className="download__phone-wrapper">
              <img
                src={downloadApp.phoneImage}
                alt="Mobile app"
                className="download__phone"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 10. BLOG / TIPS                                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="blog" id="blog">
        <div className="container">
          <div className="blog__header">
            <div className="blog__header-left">
              <span className="blog__label">OUR BLOG</span>
              <h2 className="blog__heading">{"Use the Tips\nand Recipes of Our Chefs"}</h2>
            </div>
            <Link to="/menu" className="blog__view-all">
              VIEW ALL <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="blog__grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card__image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{post.category}</span>
                    <span className="blog-card__date">{post.date}</span>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <Link to={post.link} className="blog-card__link">
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
