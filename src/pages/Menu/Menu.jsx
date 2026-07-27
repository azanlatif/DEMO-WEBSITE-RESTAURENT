/**
 * ============================================================
 *  MENU PAGE — Full menu with hero, category filter tabs,
 *  dish cards, reservation CTA, and special proposals.
 * ============================================================
 */
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import menuData from "../../data/menuData";
import { useCart } from "../../context/CartContext";
import "./Menu.css";

const CATEGORIES = ["All", ...menuData.map((c) => c.category)];

export default function Menu() {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("All");

  /* ── Filtered items ───────────────────────────────────── */
  const filteredItems = useMemo(() => {
    if (activeTab === "All") {
      return menuData.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, category: cat.category }))
      );
    }
    const cat = menuData.find((c) => c.category === activeTab);
    return cat ? cat.items.map((item) => ({ ...item, category: cat.category })) : [];
  }, [activeTab]);

  /* ── Special proposals (pick 3 random items) ──────────── */
  const specialItems = useMemo(() => {
    const all = menuData.flatMap((c) => c.items);
    const shuffled = [...all].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, []);

  return (
    <>
      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="menu-hero">
        <div className="menu-hero__overlay" />
        <div className="container menu-hero__inner">
          <span className="menu-hero__label">Our Menu</span>
          <h1 className="menu-hero__heading">MENU TABS</h1>
          <div className="menu-hero__dots" aria-hidden="true">
            <span /><span /><span />
          </div>
        </div>
      </section>

      {/* ── Category Filter Tabs ─────────────────────────── */}
      <section className="menu-tabs">
        <div className="container">
          <div className="menu-tabs__bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`menu-tabs__btn ${activeTab === cat ? "menu-tabs__btn--active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Dishes Grid ──────────────────────────────── */}
      <section className="menu-dishes">
        <div className="container">
          <div className="menu-dishes__header">
            <span className="menu-dishes__label">Our Dishes</span>
            <h2 className="menu-dishes__heading">
              {activeTab === "All" ? "All Dishes" : activeTab}
            </h2>
            <p className="menu-dishes__subtext">
              Explore our delicious selection crafted with the freshest ingredients by our talented chefs.
            </p>
          </div>

          <div className="menu-dishes__grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="dish-card">
                <div className="dish-card__image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="dish-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="dish-card__body">
                  <div className="dish-card__top">
                    <h3 className="dish-card__name">{item.name}</h3>
                    <span className="dish-card__price">€{item.price.toFixed(2)}</span>
                  </div>
                  <p className="dish-card__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservation CTA Banner ───────────────────────── */}
      <section className="menu-cta">
        <div className="menu-cta__overlay" />
        <div className="container menu-cta__inner">
          <div className="menu-cta__content">
            <h2 className="menu-cta__heading">
              THIS EVENING{"\n"}WILL BE GREAT!
            </h2>
            <p className="menu-cta__text">
              Reserve your table today and enjoy an unforgettable dining experience with family and friends.
            </p>
            <div className="menu-cta__buttons">
              <Link to="/contact" className="menu-cta__btn menu-cta__btn--primary">
                Reservation
              </Link>
              <Link to="/order" className="menu-cta__btn menu-cta__btn--outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="menu-cta__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=350&fit=crop"
              alt="Reserved table"
              className="menu-cta__image"
              loading="lazy"
            />
            <span className="menu-cta__image-label">RESERVED</span>
          </div>
        </div>
      </section>

      {/* ── Special Proposals ────────────────────────────── */}
      <section className="menu-specials">
        <div className="container">
          <span className="menu-specials__label">Chef's Pick</span>
          <h2 className="menu-specials__heading">Special Proposals Menu</h2>
          <p className="menu-specials__subtext">
            Handpicked dishes from our chef — the best of what we offer this season.
          </p>

          <div className="menu-specials__grid">
            {specialItems.map((item) => (
              <div key={item.id} className="special-card">
                <div className="special-card__image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="special-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="special-card__body">
                  <h3 className="special-card__name">{item.name}</h3>
                  <p className="special-card__desc">{item.description}</p>
                  <div className="special-card__footer">
                    <span className="special-card__price">€{item.price.toFixed(2)}</span>
                    <button
                      className="special-card__cart-btn"
                      onClick={() => addToCart(item)}
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Working Hours ────────────────────────────────── */}
      <section className="menu-hours">
        <div className="menu-hours__overlay" />
        <div className="container menu-hours__inner">
          <div className="menu-hours__left">
            <span className="menu-hours__label">Reservation</span>
            <h2 className="menu-hours__heading">WORKING HOURS</h2>
            <p className="menu-hours__text">
              Visit us during our opening hours and enjoy a warm, welcoming atmosphere.
            </p>
          </div>
          <div className="menu-hours__table">
            {siteConfig.workingHours.map((row, i) => (
              <div key={i} className="menu-hours__row">
                <span className="menu-hours__day">{row.day}</span>
                <span className="menu-hours__time">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
