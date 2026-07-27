/**
 * ============================================================
 *  SITE CONFIG — Single source of truth for ALL brand, layout,
 *  and page data across the application.
 *
 *  Edit ONLY this file to re-brand, change images, update text,
 *  or modify options across all pages.
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
    { label: "Menu", path: "/menu" },
    {
      label: "Order",
      path: "/order",
      children: [
        { label: "Order Online", path: "/order" },
        { label: "Catering", path: "/catering" },
      ],
    },
    { label: "Contact", path: "/contact" },
    { label: "Shop", path: "/shop" },
    { label: "About Us", path: "/about" },
  ],

  /* ── Contact Info ──────────────────────────────────────── */
  contact: {
    phone: "+92 316 0011900",
    phoneAlt: "+1 (555) 789-0123",
    whatsapp: "+92 316 0011900",
    whatsappNumber: "923160011900",
    email: "hello@tastyc.com",
    emailAlt: "reservation@tastyc.com",
    address: "1234 Gourmet Avenue, New York, NY 10001",
    addressShort: "Canada, Toronto, North Avenue 6 Rd.",
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

  /* ═══════════════════════════════════════════════════════════
   *  PAGE SPECIFIC DATA & IMAGES
   * ═══════════════════════════════════════════════════════════ */
  pages: {
    /* ── About Us Page ─────────────────────────────────────── */
    about: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=600&fit=crop",
        heading: "About Us",
      },
      story: {
        tag: "Our Story",
        heading: "Crafting Memorable Dining Experiences Since 2010",
        paragraphs: [
          "At {name}, we believe every meal should tell a story. Our chefs blend time-honoured traditions with bold creativity, sourcing only the freshest local ingredients to craft dishes that delight the senses and warm the soul.",
          "From our cosy interiors to our curated menu, every detail is designed to make you feel at home — while taking your taste buds on an unforgettable journey.",
        ],
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=450&fit=crop",
        imageAlt: "Restaurant ambiance",
        ctaText: "Explore Our Menu",
        ctaLink: "/menu",
      },
      values: {
        label: "Why Us",
        heading: "What Sets Us Apart",
        items: [
          {
            icon: "star",
            title: "Premium Quality",
            text: "Locally sourced, organic ingredients prepared by award-winning chefs.",
          },
          {
            icon: "heart",
            title: "Made with Love",
            text: "Every dish is handcrafted with passion and attention to detail.",
          },
          {
            icon: "people",
            title: "Warm Hospitality",
            text: "A welcoming atmosphere where every guest is treated like family.",
          },
        ],
      },
    },

    /* ── Menu Page ─────────────────────────────────────────── */
    menu: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=600&fit=crop",
        label: "Our Menu",
        heading: "MENU TABS",
      },
      dishes: {
        label: "Our Dishes",
        headingAll: "All Dishes",
        subtext: "Explore our delicious selection crafted with the freshest ingredients by our talented chefs.",
      },
      cta: {
        backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=500&fit=crop",
        heading: "THIS EVENING\nWILL BE GREAT!",
        text: "Reserve your table today and enjoy an unforgettable dining experience with family and friends.",
        reservedImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=350&fit=crop",
        reservedImageAlt: "Reserved table",
        reservedLabel: "RESERVED",
        primaryBtnText: "Reservation",
        primaryBtnLink: "/contact",
        secondaryBtnText: "Learn More",
        secondaryBtnLink: "/order",
      },
      specials: {
        label: "Chef's Pick",
        heading: "Special Proposals Menu",
        subtext: "Handpicked dishes from our chef — the best of what we offer this season.",
      },
      hours: {
        backgroundImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&h=500&fit=crop",
        label: "Reservation",
        heading: "WORKING HOURS",
        text: "Visit us during our opening hours and enjoy a warm, welcoming atmosphere.",
      },
    },

    /* ── Shop Page ─────────────────────────────────────────── */
    shop: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1400&h=600&fit=crop",
        label: "Online Store",
        heading: "SHOP",
        text: "Discover exclusive deals and discounts on our finest dishes",
      },
      toolbar: {
        title: "SHOP",
        showingText: "Showing all {count} results",
      },
      sortOptions: [
        { value: "default", label: "Default sorting" },
        { value: "price-asc", label: "Price: Low to High" },
        { value: "price-desc", label: "Price: High to Low" },
        { value: "name-asc", label: "Name: A–Z" },
      ],
      tags: ["Deals", "Discounts", "Seafood", "Fish", "Fresh", "Special"],
      emptyMessage: "No products found. Try a different search or category.",
    },

    /* ── Order Online Page ─────────────────────────────────── */
    order: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=600&fit=crop",
        label: "Online Ordering",
        heading: "ORDER ONLINE",
      },
      form: {
        label: "Place Your Order",
        heading: "Order for Pickup or Delivery",
        subtext: "Fill out the form below and we'll prepare your order fresh. Choose pickup or delivery to your door.",
        submitText: "Place Order",
        successText: "Order Placed! ✓",
        successMessage: "Thank you! Your order has been received. We'll confirm it shortly via phone or email.",
      },
      steps: {
        label: "Simple & Quick",
        heading: "How It Works",
        items: [
          {
            icon: "document",
            title: "Choose Your Dishes",
            text: "Browse our menu and tell us what you'd like in the order form.",
          },
          {
            icon: "clock",
            title: "Pick a Time",
            text: "Select your preferred date and time for pickup or delivery.",
          },
          {
            icon: "check",
            title: "Enjoy Your Meal",
            text: "We'll confirm your order and have it freshly prepared for you.",
          },
        ],
      },
    },

    /* ── Catering Page ─────────────────────────────────────── */
    catering: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&h=600&fit=crop",
        label: "Events & Celebrations",
        heading: "CATERING",
      },
      form: {
        label: "Catering Services",
        heading: "Let Us Cater Your Event",
        subtext: "From intimate dinners to grand celebrations, our team crafts bespoke menus tailored to your occasion. Fill out the form and we'll get back to you within 24 hours.",
        submitText: "Request a Quote",
        successText: "Request Sent! ✓",
        successMessage: "Thank you! We've received your catering request and will contact you within 24 hours.",
        eventTypes: [
          "Corporate Event",
          "Wedding Reception",
          "Birthday Party",
          "Private Dinner",
          "Holiday Gathering",
          "Other",
        ],
      },
      services: {
        label: "Our Offerings",
        heading: "What We Provide",
        items: [
          {
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
            imageAlt: "Custom menus",
            title: "Custom Menus",
            text: "Personalised menus designed around your preferences, dietary needs, and event theme.",
          },
          {
            image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
            imageAlt: "Full service",
            title: "Full Service",
            text: "Professional staff, tableware, setup, and cleanup — we handle everything.",
          },
          {
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
            imageAlt: "Any occasion",
            title: "Any Occasion",
            text: "Weddings, corporate events, birthdays, or private dinners — no event is too big or small.",
          },
        ],
      },
    },

    /* ── Contact Page ──────────────────────────────────────── */
    contact: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&h=600&fit=crop&q=30",
        heading: "Contact",
      },
      info: {
        label: "GET IN TOUCH",
        heading: "Contact Information",
        subtext: "We're always eager to hear from you. Reach out by any of the methods below and we'll get back to you as soon as possible.",
      },
      form: {
        label: "CONTACT FORM",
        heading: "Write Us a Message",
        subtext: "Have a question or a special request? Fill out the form below and we'll get back to you shortly.",
        submitText: "SEND A MESSAGE",
        successMessage: "✅ Thank you for your message! We'll get back to you within 24 hours.",
      },
    },
  },
};

export default siteConfig;
