/**
 * ============================================================
 *  ABOUT PAGE — Wadi-e-Jannat Villas (Sālkhala)
 *  Detailed story, architectural wooden heritage, specifications,
 *  and direct booking concierge.
 * ============================================================
 */
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import { villaGallery } from "../../data/resortData";
import { openWhatsApp } from "../../utils/whatsapp";
import "./About.css";

export default function About() {
  const { specifications, amenities, contact } = siteConfig;

  return (
    <div className="about-page">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label">OUR STORY & SANCTUARY</span>
          <h1 className="about-hero__heading">Wadi-e-Jannat Villas</h1>
          <p className="about-hero__sub">
            A peaceful mountain getaway surrounded by natural beauty in Sālkhala.
          </p>
        </div>
      </section>

      {/* ── Main Story & Essence ────────────────────────────── */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="section-label">ALPINE HOSPITALITY</span>
              <h2 className="section-heading about-story-heading">
                About The Villa Experience
              </h2>
              <p className="about-story-lead">
                Wadi-e-Jannat Villas offers comfortable accommodation in Sālkhala, featuring a garden,
                terrace, free private parking, and complimentary Wi-Fi.
              </p>
              <p className="about-story-p">
                The double room includes two beds, a private bathroom with a bath and shower,
                slippers, bathrobes, towels, and bed linen. Guests can enjoy a balcony and the
                surrounding mountain scenery.
              </p>
              <p className="about-story-p">
                Crafted from authentic mountain timber, our wooden villas maintain a naturally cozy
                climate in all seasons. Whether you are traveling as a family of four or seeking a
                quiet couples' retreat, every corner is designed to bring you closer to nature with
                uncompromised modern comfort.
              </p>

              {/* Specs Pills */}
              <div className="about-specs-grid">
                <div className="about-spec-box">
                  <span className="about-spec-val">{specifications.guests}</span>
                  <span className="about-spec-lbl">{specifications.guestsLabel}</span>
                </div>
                <div className="about-spec-box">
                  <span className="about-spec-val">{specifications.beds}</span>
                  <span className="about-spec-lbl">{specifications.bedrooms} · Double Setup</span>
                </div>
                <div className="about-spec-box">
                  <span className="about-spec-val">{specifications.bathrooms}</span>
                  <span className="about-spec-lbl">Private bath & shower</span>
                </div>
                <div className="about-spec-box">
                  <span className="about-spec-val">{specifications.location}</span>
                  <span className="about-spec-lbl">Mountain valley location</span>
                </div>
              </div>

              <div className="about-story-cta">
                <button
                  type="button"
                  onClick={() =>
                    openWhatsApp(
                      `Hello! I would like to book a stay at ${siteConfig.name} in Sālkhala.`
                    )
                  }
                  className="btn btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "currentColor" }}>
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                  </svg>
                  Book via WhatsApp · {contact.phone}
                </button>
                <Link to="/gallery" className="btn btn-outline-dark">
                  View Villa Gallery
                </Link>
              </div>
            </div>

            {/* Visual Collage */}
            <div className="about-story-visuals">
              <div className="about-img-frame about-img-frame--primary">
                <img src={villaGallery[0].image} alt="Wadi-e-Jannat Exterior" loading="lazy" />
                <span className="about-img-tag">Exterior Day View</span>
              </div>
              <div className="about-img-frame about-img-frame--secondary">
                <img src={villaGallery[1].image} alt="Wadi-e-Jannat Night View" loading="lazy" />
                <span className="about-img-tag">Night View Illumination</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights / Pillars ─────────────────────────── */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">WHAT SETS US APART</span>
            <h2 className="section-heading">Why Guests Love Sālkhala</h2>
            <p className="section-subheading">
              Pure mountain air, serene pine fragrances, and authentic Kashmiri mountain hospitality.
            </p>
          </div>

          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="about-pillar-icon">🏔️</div>
              <h3 className="about-pillar-title">Mountain Scenery & Balcony</h3>
              <p className="about-pillar-text">
                Every morning brings breathtaking views of snow-dusted peaks, evergreen valleys,
                and peaceful bird song right from your private wooden balcony.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon">🏊‍♂️</div>
              <h3 className="about-pillar-title">Indoor Heated Pool</h3>
              <p className="about-pillar-text">
                Unwind regardless of the mountain weather in our indoor swimming pool, a rare luxury
                in the valley ensuring full relaxation for families and travelers.
              </p>
            </div>

            <div className="about-pillar-card">
              <div className="about-pillar-icon">🌲</div>
              <h3 className="about-pillar-title">Garden & Panoramic Terrace</h3>
              <p className="about-pillar-text">
                Stroll through landscaped private lawns, relax on outdoor terrace seating, and stargaze
                into unpolluted night skies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Amenities List ─────────────────────────────── */}
      <section className="about-amenities-section">
        <div className="container">
          <div className="section-header-block">
            <span className="section-label">ALL INCLUSIVE</span>
            <h2 className="section-heading">Complete Villa Amenities</h2>
          </div>

          <div className="about-amenities-list">
            {amenities.map((item) => (
              <div key={item.id} className="about-amenity-item">
                <span className="about-amenity-bullet">✓</span>
                <div>
                  <h4 className="about-amenity-title">{item.title}</h4>
                  <p className="about-amenity-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
