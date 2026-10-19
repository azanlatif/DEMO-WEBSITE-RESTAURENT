/**
 * ============================================================
 *  GALLERY PAGE — Wadi-e-Jannat Villas
 *  High-resolution visual showcase with category filters
 *  and interactive lightbox preview.
 * ============================================================
 */
import { useState, useMemo } from "react";
import siteConfig from "../../config/siteConfig";
import { villaGallery } from "../../data/resortData";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Gallery.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return villaGallery;
    return villaGallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="gallery-page">
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="gallery-page-hero">
        <div className="container">
          <span className="section-label">PHOTO ARCHIVE</span>
          <h1 className="gallery-page-hero__title">Wadi-e-Jannat Villas Gallery</h1>
          <p className="gallery-page-hero__desc">
            Explore authentic photographs of our wooden mountain villas in Sālkhala — from crisp daylight
            panoramas to serene night illumination, cozy bedrooms, and private amenities.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs & Grid ──────────────────────────────── */}
      <section className="gallery-page-content">
        <div className="container">
          <div className="gallery-page-filters">
            {[
              { id: "all", label: "All Photos (8)" },
              { id: "exterior", label: "Exterior & Night" },
              { id: "bedroom", label: "Bedroom & Double Beds" },
              { id: "interior", label: "Wooden Living Space" },
              { id: "bathroom", label: "Private Bathroom" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`gallery-filter-btn ${activeCategory === tab.id ? "gallery-filter-btn--active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="gallery-page-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="gallery-page-card"
                onClick={() => setSelectedPhoto(item)}
              >
                <div className="gallery-page-card__img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-page-card__overlay">
                    <span className="gallery-page-card__tag">{item.categoryLabel}</span>
                    <h3 className="gallery-page-card__title">{item.title}</h3>
                    <p className="gallery-page-card__desc">{item.description}</p>
                    <span className="gallery-page-card__action">Click to preview ↗</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Booking Callout */}
          <div className="gallery-booking-callout">
            <h2 className="gallery-booking-callout__title">
              Ready to Experience Wadi-e-Jannat in Person?
            </h2>
            <p className="gallery-booking-callout__text">
              Direct reservations for up to 4 guests with 2 beds, private bathroom, indoor pool, and
              mountain view balcony.
            </p>
            <button
              type="button"
              onClick={() =>
                openWhatsApp(
                  `Hello! I saw the villa gallery for ${siteConfig.name} and would like to check availability.`
                )
              }
              className="btn btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              Reserve via WhatsApp · {siteConfig.contact.phone}
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-modal__close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo"
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
    </div>
  );
}
