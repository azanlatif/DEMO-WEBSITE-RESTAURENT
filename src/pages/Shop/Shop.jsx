/**
 * ============================================================
 *  SHOP PAGE — Full shop with hero, sidebar, and product grid.
 *  All content from config/siteConfig.js & data/productsData.js
 * ============================================================
 */
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import siteConfig from "../../config/siteConfig";
import productsData from "../../data/productsData";
import { useCart } from "../../context/CartContext";
import "./Shop.css";

const CATEGORIES = ["All", "Deals", "Discounts"];

export default function Shop() {
  const { addToCart } = useCart();
  const location = useLocation();
  const { shop } = siteConfig.pages;

  /* ── Derive initial category from URL hash ────────────── */
  const hashCategory = location.hash.replace("#", "");
  const initialCat =
    hashCategory === "deals"
      ? "Deals"
      : hashCategory === "discounts"
      ? "Discounts"
      : "All";

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  /* ── Filter + sort products ───────────────────────────── */
  const filteredProducts = useMemo(() => {
    let items = [...productsData];

    if (activeCategory !== "All") {
      items = items.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return items;
  }, [activeCategory, sortBy, searchQuery]);

  /* ── Category counts ──────────────────────────────────── */
  const categoryCounts = useMemo(() => {
    const counts = { All: productsData.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = productsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  const featuredProducts = productsData.slice(0, 3);

  return (
    <>
      {/* ── Hero Banner ──────────────────────────────────── */}
      <section
        className="shop-hero"
        style={{ backgroundImage: `url(${shop.hero.backgroundImage})` }}
      >
        <div className="shop-hero__overlay" />
        <div className="container shop-hero__inner">
          <span className="shop-hero__label">{shop.hero.label}</span>
          <h1 className="shop-hero__heading">{shop.hero.heading}</h1>
          <p className="shop-hero__text">{shop.hero.text}</p>
        </div>
      </section>

      {/* ── Main Shop Area ───────────────────────────────── */}
      <section className="shop">
        <div className="container">
          <div className="shop__layout">
            {/* ── Sidebar ──────────────────────────────── */}
            <aside className="shop__sidebar">
              <div className="shop__sidebar-block">
                <div className="shop__search">
                  <input
                    type="text"
                    placeholder="Search products…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="shop__search-input"
                  />
                  <svg className="shop__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>

              <div className="shop__sidebar-block">
                <h3 className="shop__sidebar-title">CATEGORIES</h3>
                <ul className="shop__category-list">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        className={`shop__category-btn ${activeCategory === cat ? "shop__category-btn--active" : ""}`}
                        onClick={() => setActiveCategory(cat)}
                      >
                        {cat}
                        <span className="shop__category-count">({categoryCounts[cat]})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shop__sidebar-block">
                <h3 className="shop__sidebar-title">PRODUCTS</h3>
                <div className="shop__featured-list">
                  {featuredProducts.map((p) => (
                    <div key={p.id} className="shop__featured-item">
                      <img src={p.image} alt={p.name} className="shop__featured-img" loading="lazy" />
                      <div className="shop__featured-info">
                        <span className="shop__featured-name">{p.name}</span>
                        {p.originalPrice && (
                          <span className="shop__featured-old">€{p.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="shop__featured-price">€{p.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shop__sidebar-block">
                <h3 className="shop__sidebar-title">TAGS</h3>
                <div className="shop__tags">
                  {shop.tags.map((tag) => (
                    <span key={tag} className="shop__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Product Grid ─────────────────────────── */}
            <div className="shop__main">
              <div className="shop__toolbar">
                <div className="shop__toolbar-left">
                  <h2 className="shop__toolbar-title">{shop.toolbar.title}</h2>
                  <span className="shop__toolbar-count">
                    {shop.toolbar.showingText.replace("{count}", filteredProducts.length)}
                  </span>
                </div>
                <select
                  className="shop__sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {shop.sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="shop__grid" id="deals">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-card__image-wrapper">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-card__image"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className="product-card__badge">{product.badge}</span>
                      )}
                    </div>
                    <div className="product-card__body">
                      <h3 className="product-card__name">{product.name}</h3>
                      <div className="product-card__pricing">
                        <div className="product-card__prices">
                          {product.originalPrice && (
                            <span className="product-card__old-price">
                              €{product.originalPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="product-card__price">
                            €{product.price.toFixed(2)}
                          </span>
                        </div>
                        <button
                          className="product-card__cart-btn"
                          onClick={() => addToCart(product)}
                          aria-label={`Add ${product.name} to cart`}
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

              {filteredProducts.length === 0 && (
                <div className="shop__empty">
                  <p>{shop.emptyMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
