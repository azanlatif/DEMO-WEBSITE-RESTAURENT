/**
 * ============================================================
 *  SITE CONFIG — Single source of truth for all brand data.
 *  To re-brand this template, edit ONLY this file and
 *  the data files in  src/data/*.js
 * ============================================================
 */

const siteConfig = {
  /* ── Brand ─────────────────────────────────────────────── */
  name: "Tastyc",
  tagline: "Delicious Food, Unforgettable Experience",
  description:
    "We invite you to visit our restaurant and enjoy exquisite cuisine crafted by world-class chefs using the freshest ingredients.",

  /* ── Logo (import or URL) ──────────────────────────────── */
  // Use a text-based logo by default; replace with an image path if desired.
  logo: null, // e.g. "/images/logo.png"
  logoAlt: "Tastyc Restaurant Logo",

  /* ── Design Tokens (mirrored in CSS variables) ─────────── */
  colors: {
    primary: "#F0662D",
    primaryHover: "#d4551f",
    dark: "#0F1518",
    darkAlt: "#1A1F23",
    offWhite: "#F5F3F0",
    white: "#FFFFFF",
    textLight: "#CCCCCC",
    textMuted: "#999999",
  },

  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "'Roboto', sans-serif",
  },

  /* ── Navigation Links ──────────────────────────────────── */
  navLinks: [
    { label: "Home", path: "/" },
    {
      label: "Pages",
      path: "/about",
      children: [
        { label: "About Us", path: "/about" },
        { label: "Gallery", path: "/about#gallery" },
        { label: "History", path: "/about#history" },
        { label: "Features", path: "/about#features" },
        { label: "Pricing", path: "/about#pricing" },
        { label: "Our Chefs", path: "/about#chefs" },
        { label: "FAQ", path: "/about#faq" },
        { label: "Testimonials", path: "/about#testimonials" },
      ],
    },
    {
      label: "Menu",
      path: "/menu",
      children: [
        { label: "Breakfast", path: "/menu#breakfast" },
        { label: "Lunch", path: "/menu#lunch" },
        { label: "Dinner", path: "/menu#dinner" },
        { label: "Desserts", path: "/menu#desserts" },
        { label: "Drinks", path: "/menu#drinks" },
      ],
    },
    {
      label: "Order",
      path: "/order",
      children: [
        { label: "Order Online", path: "/order" },
        { label: "Catering", path: "/order#catering" },
        { label: "Gift Cards", path: "/order#gift-cards" },
      ],
    },
    { label: "Contact", path: "/contact" },
    {
      label: "Shop",
      path: "/shop",
      children: [
        { label: "All Products", path: "/shop" },
        { label: "Best Sellers", path: "/shop#bestsellers" },
        { label: "New Arrivals", path: "/shop#new" },
      ],
    },
  ],

  /* ── Contact Info ──────────────────────────────────────── */
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@tastyc.com",
    address: "1234 Gourmet Avenue, New York, NY 10001",
    mapUrl: "https://maps.google.com/?q=1234+Gourmet+Avenue+New+York",
  },

  /* ── Working Hours ─────────────────────────────────────── */
  workingHours: [
    { day: "Monday", hours: "09:00 AM – 10:00 PM" },
    { day: "Tuesday", hours: "09:00 AM – 10:00 PM" },
    { day: "Wednesday", hours: "09:00 AM – 10:00 PM" },
    { day: "Thursday", hours: "09:00 AM – 11:00 PM" },
    { day: "Friday", hours: "09:00 AM – 11:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 11:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 09:00 PM" },
  ],

  /* ── Social Links ──────────────────────────────────────── */
  socials: {
    facebook: "https://facebook.com/tastyc",
    instagram: "https://instagram.com/tastyc",
    twitter: "https://x.com/tastyc",
    youtube: "https://youtube.com/@tastyc",
  },

  /* ── Footer ────────────────────────────────────────────── */
  footer: {
    aboutText:
      "We are a passionate team of chefs and food enthusiasts dedicated to bringing you the finest dining experience. Every dish is crafted with love, using locally sourced and organic ingredients.",
    copyright: "© 2026 Tastyc. All rights reserved.",
  },

  /* ── Newsletter ────────────────────────────────────────── */
  newsletter: {
    heading: "SUBSCRIBE OUR NEWSLETTER",
    subtext: "Get the latest updates on new menu items, special offers, and exclusive events delivered straight to your inbox.",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing! 🎉",
  },

  /* ── Gallery (footer gallery strip) ────────────────────── */
  galleryImages: [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1432139509613-5c4255a78e0f?w=300&h=300&fit=crop",
  ],
};

export default siteConfig;
