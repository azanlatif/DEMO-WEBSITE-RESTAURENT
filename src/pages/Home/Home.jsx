/**
 * ============================================================
 *  HOME PAGE — Wadi-e-Jannat Villas (Sālkhala)
 *  Luxury wooden mountain retreat focused on bookings.
 *
 *  Sections:
 *  1. Hero Slideshow (Day / Night views with animated crossfade & toggle)
 *  2. Quick WhatsApp Date & Booking Planner Bar
 *  3. Essential Information (4 Guests, 2 Beds, 1 Bathroom, Sālkhala)
 *  4. About The Villa (Story, wooden architecture, features)
 *  5. Amenities Grid (Wi-Fi, Pool, AC, Shuttle, Gym, Garden, etc.)
 *  6. Villa Photo Gallery with Category Filters & Lightbox Modal
 *  7. Responsive Pricing Section (Adapted from 21st.dev ln-dev7)
 *  8. Guest Reviews & Testimonials
 *  9. Sālkhala Mountain Location & Direct WhatsApp Concierge
 * ============================================================
 */
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import { heroSlides, villaGallery, resortTestimonials, essentialInfo } from "../../data/resortData";
import { openWhatsApp, bookStayWhatsApp } from "../../utils/whatsapp";
import PricingSection from "../../components/PricingSection/PricingSection";
import "./Home.css";

/* ─────────────────────────────────────────────────────────── */
/*  Custom Vector Icons for Amenities (No Emojis)              */
/* ─────────────────────────────────────────────────────────── */
const AMENITY_ICONS = {
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  ),
  pool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18c1.5 0 2.5-.6 3.5-1.2 1-.6 2-1.2 3.5-1.2s2.5.6 3.5 1.2c1 .6 2 1.2 3.5 1.2s2.5-.6 3.5-1.2c1-.6 2-1.2 3.5-1.2" />
      <path d="M2 22c1.5 0 2.5-.6 3.5-1.2 1-.6 2-1.2 3.5-1.2s2.5.6 3.5 1.2c1 .6 2 1.2 3.5 1.2s2.5-.6 3.5-1.2c1-.6 2-1.2 3.5-1.2" />
      <circle cx="16" cy="6" r="2.5" />
      <path d="M13.5 8.5L10 12l3 3" />
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="10" rx="2" />
      <path d="M6 18h12M8 21h8M6 14v4M18 14v4" />
    </svg>
  ),
  shuttle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="13" rx="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M2 10h20M7 5v5M17 5v5" />
    </svg>
  ),
  fitness: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v16M18 4v16M2 8h4M18 8h4M2 16h4M18 16h4M6 12h12" />
    </svg>
  ),
  garden: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-9" />
      <path d="M12 13a5 5 0 0 0 5-5c0-4-5-6-5-6s-5 2-5 6a5 5 0 0 0 5 5z" />
      <path d="M7 16a3 3 0 0 0 5-2" />
    </svg>
  ),
  bath: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-4z" />
      <path d="M4 12V6a3 3 0 0 1 3-3h1a2 2 0 0 1 2 2v7" />
      <circle cx="10" cy="16" r="0.5" />
    </svg>
  ),
  balcony: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3v4M16 3v4M3 7h18M3 21h18M5 7v14M19 7v14M9 11v10M15 11v10" />
    </svg>
  ),
};

export default function Home() {
  /* ── Hero Slideshow State ──────────────────────────────── */
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const activeSlide = heroSlides[currentSlideIndex];

  /* ── Quick Booking Planner State ───────────────────────── */
  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    bookStayWhatsApp({
      checkIn: bookingForm.checkIn || "Dates to be confirmed",
      checkOut: bookingForm.checkOut || "Flexible",
      guests: bookingForm.guests,
      note: "Quick inquiry via website booking planner",
    });
  };

  /* ── Gallery Filter & Lightbox State ───────────────────── */
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "all") return villaGallery;
    return villaGallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════════════════
       *  1. HERO SLIDESHOW SECTION (Day & Night Views)
       * ═══════════════════════════════════════════════════════ */}
      <section
        className="hero"
        aria-label="Wadi-e-Jannat Villas Hero Slideshow"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Background Image Slides with Smooth Crossfade */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero__slide-bg ${idx === currentSlideIndex ? "hero__slide-bg--active" : ""}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden={idx !== currentSlideIndex}
          />
        ))}

        <div className="hero__overlay" />

        {/* Hero Content */}
        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge-row">
              <div className="hero__view-toggles">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`hero__toggle-btn ${idx === currentSlideIndex ? "hero__toggle-btn--active" : ""}`}
                    aria-label={`Switch to ${slide.badge}`}
                  >
                    {slide.badge}
                  </button>
                ))}
              </div>
              <span className="hero__location-pill">📍 Sālkhala, Kashmir</span>
            </div>

            <h1 className="hero__title">
              {activeSlide.title}
              <span className="hero__title-sub">{activeSlide.subheading}</span>
            </h1>

            <p className="hero__description">{activeSlide.description}</p>

            {/* Quick Specs Chips */}
            <div className="hero__specs-bar">
              <div className="hero__spec-item">
                <span className="hero__spec-number">4</span>
                <span className="hero__spec-label">Guests Max</span>
              </div>
              <div className="hero__spec-divider" />
              <div className="hero__spec-item">
                <span className="hero__spec-number">2</span>
                <span className="hero__spec-label">Plush Beds</span>
              </div>
              <div className="hero__spec-divider" />
              <div className="hero__spec-item">
                <span className="hero__spec-number">1</span>
                <span className="hero__spec-label">Private Bath</span>
              </div>
              <div className="hero__spec-divider" />
              <div className="hero__spec-item">
                <span className="hero__spec-number">100%</span>
                <span className="hero__spec-label">Wooden Charm</span>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="hero__actions">
              <button
                type="button"
                onClick={() =>
                  openWhatsApp(
                    `Hello! I would like to book a stay at ${siteConfig.name} in Sālkhala.`
                  )
                }
                className="btn btn-whatsapp hero__cta"
              >
                <svg viewBox="0 0 24 24" className="hero__cta-icon">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                Book via WhatsApp · {siteConfig.contact.phone}
              </button>

              <a href="#about-villa" className="btn btn-outline hero__btn-secondary">
                Explore The Villa
              </a>
            </div>
          </div>
        </div>

        {/* Side Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="hero__arrow-btn hero__arrow-btn--prev"
          aria-label="Previous view"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="hero__arrow-btn hero__arrow-btn--next"
          aria-label="Next view"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* ═══════════════════════════════════════════════════════
       *  2. QUICK RESERVATION BAR
       * ═══════════════════════════════════════════════════════ */}
      <section className="booking-bar-wrapper">
        <div className="container">
          <form className="booking-bar" onSubmit={handleBookingSubmit}>
            <div className="booking-bar__field">
              <label htmlFor="bb-checkin" className="booking-bar__label">
                CHECK-IN
              </label>
              <input
                type="date"
                id="bb-checkin"
                className="booking-bar__input"
                value={bookingForm.checkIn}
                onChange={(e) =>
                  setBookingForm((prev) => ({ ...prev, checkIn: e.target.value }))
                }
              />
            </div>

            <div className="booking-bar__field">
              <label htmlFor="bb-checkout" className="booking-bar__label">
                CHECK-OUT
              </label>
              <input
                type="date"
                id="bb-checkout"
                className="booking-bar__input"
                value={bookingForm.checkOut}
                onChange={(e) =>
                  setBookingForm((prev) => ({ ...prev, checkOut: e.target.value }))
                }
              />
            </div>

            <div className="booking-bar__field">
              <label htmlFor="bb-guests" className="booking-bar__label">
                GUESTS
              </label>
              <select
                id="bb-guests"
                className="booking-bar__select"
                value={bookingForm.guests}
                onChange={(e) =>
                  setBookingForm((prev) => ({ ...prev, guests: e.target.value }))
                }
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests (Max)">4 Guests (Max)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-whatsapp booking-bar__submit">
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              Check Availability on WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
       *  3. ESSENTIAL INFORMATION STRIP (4 Pillars)
       * ═══════════════════════════════════════════════════════ */}
      <section className="essential-strip" id="essential-info">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">AT A GLANCE</span>
            <h2 className="section-heading">Essential Villa Specifications</h2>
            <p className="section-subheading">
              Thoughtfully curated for peaceful family vacations and memorable mountain escapes.
            </p>
          </div>

          <div className="essential-grid">
            {essentialInfo.map((info) => (
              <div key={info.id} className="essential-card">
                <div className="essential-card__icon-wrap">
                  {info.id === "guests" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {info.id === "beds" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
                    </svg>
                  )}
                  {info.id === "bath" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12h20v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-4z" />
                      <path d="M4 12V6a3 3 0 0 1 3-3h1a2 2 0 0 1 2 2v7" />
                    </svg>
                  )}
                  {info.id === "location" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                </div>
                <h3 className="essential-card__title">{info.title}</h3>
                <p className="essential-card__subtitle">{info.subtitle}</p>
                <span className="essential-card__highlight">{info.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
       *  4. ABOUT THE VILLA (Story & Image Pair)
       * ═══════════════════════════════════════════════════════ */}
      <section className="about-villa" id="about-villa">
        <div className="container">
          <div className="about-villa__grid">
            {/* Text description */}
            <div className="about-villa__text-col">
              <span className="section-label">THE EXPERIENCE</span>
              <h2 className="section-heading about-villa__heading">
                A Peaceful Mountain Sanctuary in Sālkhala
              </h2>
              <p className="about-villa__lead">
                Wadi-e-Jannat Villas offers comfortable accommodation in Sālkhala, featuring a garden,
                terrace, free private parking, and complimentary Wi-Fi.
              </p>
              <p className="about-villa__p">
                The double room includes two beds, a private bathroom with a bath and shower,
                slippers, bathrobes, towels, and fresh bed linen. Guests can enjoy a private balcony
                and take in the surrounding mountain scenery from every angle.
              </p>

              {/* In-text feature pills */}
              <div className="about-villa__features-list">
                <div className="about-villa__pill">
                  <span className="about-villa__pill-check">✓</span>
                  <span>Handcrafted Wooden Architecture</span>
                </div>
                <div className="about-villa__pill">
                  <span className="about-villa__pill-check">✓</span>
                  <span>Private Mountain Balcony</span>
                </div>
                <div className="about-villa__pill">
                  <span className="about-villa__pill-check">✓</span>
                  <span>Heated Indoor Swimming Pool</span>
                </div>
                <div className="about-villa__pill">
                  <span className="about-villa__pill-check">✓</span>
                  <span>Garden & Panoramic Terrace</span>
                </div>
              </div>

              <div className="about-villa__cta-wrap">
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Hello! I would like more information about staying at ${siteConfig.name} in Sālkhala.`
                    )
                  }
                  className="btn btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  Inquire on WhatsApp
                </button>
                <Link to="/about" className="btn btn-outline-dark">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Overlapping Image Showcase */}
            <div className="about-villa__visual-col">
              <div className="about-villa__image-main">
                <img
                  src={villaGallery[3].image}
                  alt="Inside Wooden Villa Interior"
                  loading="lazy"
                />
                <span className="about-villa__image-tag">Cozy Wooden Interior</span>
              </div>
              <div className="about-villa__image-sub">
                <img
                  src={villaGallery[2].image}
                  alt="Master Bedroom with Two Beds"
                  loading="lazy"
                />
                <span className="about-villa__image-tag">Two Comfortable Beds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
       *  5. AMENITIES GRID
       * ═══════════════════════════════════════════════════════ */}
      <section className="amenities-section" id="amenities">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">COMFORT & CONVENIENCE</span>
            <h2 className="section-heading">Resort Amenities & Inclusions</h2>
            <p className="section-subheading">
              Every detail is designed for your relaxation, from heated waters to tranquil gardens.
            </p>
          </div>

          <div className="amenities-grid">
            {siteConfig.amenities.map((amenity) => (
              <div key={amenity.id} className="amenity-card">
                <div className="amenity-card__icon">{AMENITY_ICONS[amenity.icon]}</div>
                <h3 className="amenity-card__title">{amenity.title}</h3>
                <p className="amenity-card__desc">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
       *  6. RESORT PHOTO GALLERY WITH LIGHTBOX
       * ═══════════════════════════════════════════════════════ */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">VISUAL TOUR</span>
            <h2 className="section-heading">Explore Wadi-e-Jannat Villas</h2>
            <p className="section-subheading">
              Browse our architectural exterior views, comfortable double bedrooms, and private amenities.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="gallery-filters" role="tablist">
            {[
              { id: "all", label: "All Photos" },
              { id: "exterior", label: "Exterior & Night" },
              { id: "bedroom", label: "Bedroom & Beds" },
              { id: "interior", label: "Wooden Living" },
              { id: "bathroom", label: "Private Bath" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`gallery-filter-btn ${activeCategory === tab.id ? "gallery-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
                role="tab"
                aria-selected={activeCategory === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setSelectedPhoto(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedPhoto(item)}
                aria-label={`View ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__category">{item.categoryLabel}</span>
                  <h3 className="gallery-item__title">{item.title}</h3>
                  <span className="gallery-item__hint">Click to enlarge ↗</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-bottom-cta">
            <Link to="/gallery" className="btn btn-outline-dark">
              View Full High-Resolution Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="lightbox-modal"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-modal__close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              ✕
            </button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <div className="lightbox-modal__caption">
              <h4>{selectedPhoto.title}</h4>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
       *  7. RESPONSIVE PRICING SECTION (Adapted from 21st MCP)
       * ═══════════════════════════════════════════════════════ */}
      <PricingSection />

      {/* ═══════════════════════════════════════════════════════
       *  8. TESTIMONIALS / GUEST REVIEWS
       * ═══════════════════════════════════════════════════════ */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">GUEST EXPERIENCES</span>
            <h2 className="section-heading">Memories from Sālkhala</h2>
            <p className="section-subheading">
              Hear from travelers who experienced peaceful mountain comfort in our wooden villas.
            </p>
          </div>

          <div className="testimonials-grid">
            {resortTestimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-card__stars">★★★★★</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="testimonial-card__name">{t.name}</h3>
                    <p className="testimonial-card__meta">
                      {t.location} · {t.stayDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
       *  9. LOCATION & DIRECT WHATSAPP BANNER
       * ═══════════════════════════════════════════════════════ */}
      <section className="location-banner">
        <div className="container location-banner__inner">
          <span className="badge-tag">SĀLHKALA VALLEY</span>
          <h2 className="location-banner__heading">
            Your Mountain Escape is Just a WhatsApp Message Away
          </h2>
          <p className="location-banner__text">
            Direct host booking with immediate confirmation. Reach out to discuss dates, check-in
            arrangements, and custom group accommodations.
          </p>

          <div className="location-banner__actions">
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  `Hello! I would like to reserve Wadi-e-Jannat Villas in Sālkhala. Please let me know available dates.`
                )
              }
              className="btn btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              Chat on WhatsApp · {siteConfig.contact.phone}
            </button>
            <Link to="/contact" className="btn btn-outline">
              Contact & Location Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
