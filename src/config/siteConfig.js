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
  name: "HN Foods",
  tagline: "Authentic Pakistani Taste in Islamabad",
  description:
    "HN Foods brings authentic Pakistani, BBQ, and desi flavors to F-6 Markaz, Islamabad, with a comfortable family-friendly dining experience and a wide menu of breakfast, karahi, handi, seafood, rice, and grill specialties.",

  /* ── Logo (import or URL) ──────────────────────────────── */
  // Use a text-based logo by default; replace with an image path if desired.
  logo: null, // e.g. "/images/logo.png"
  logoAlt: "HN Foods Restaurant Logo",

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
    phone: "",
    phoneAlt: "",
    whatsapp: "",
    whatsappNumber: "",
    email: "",
    emailAlt: "",
    address: "F6 Markaz, Plot 19, Agha Khan Rd (behind Kaspas Desserts), Sector F-6, Islamabad.",
    addressShort: "F-6, Islamabad",
    mapUrl: "https://maps.google.com/?q=F6+Markaz,+Plot+19,+Agha+Khan+Rd+(behind+Kaspas+Desserts),+Sector+F-6,+Islamabad",
  },

  /* ── Working Hours ─────────────────────────────────────── */
  workingHours: [
    { day: "Monday", hours: "12:00 AM – 11:59 PM" },
    { day: "Tuesday", hours: "12:00 AM – 11:59 PM" },
    { day: "Wednesday", hours: "12:00 AM – 11:59 PM" },
    { day: "Thursday", hours: "12:00 AM – 11:59 PM" },
    { day: "Friday", hours: "12:00 AM – 11:59 PM" },
    { day: "Saturday", hours: "12:00 AM – 11:59 PM" },
    { day: "Sunday", hours: "12:00 AM – 11:59 PM" },
  ],

  /* ── Social Links ──────────────────────────────────────── */
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
  },

  /* ── Footer ────────────────────────────────────────────── */
  footer: {
    aboutText:
      "HN Foods serves authentic Pakistani flavors in a comfortable, family-friendly space in Islamabad. From BBQ and karahi to breakfast platters and rice dishes, every meal is prepared with care and traditional taste.",
    copyright: "© 2026 HN Foods. All rights reserved.",
  },

  /* ── Newsletter ────────────────────────────────────────── */
  newsletter: {
    heading: "STAY UPDATED",
    subtext: "Get the latest updates on new dishes, special offers, and events from HN Foods.",
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
    /* ── Home Page ─────────────────────────────────────────── */
    home: {
      hero: {
        backgroundImage: "https://kommodo.ai/i/k2CbPGX6YC4BIoVU35vA",
        label: "Welcome to HN Foods",
        heading: "Authentic Pakistani Taste",
        text: "Enjoy BBQ, karahi, breakfast, seafood, rice, and desi favorites in a warm family-friendly setting in Islamabad.",
      },
    },

    /* ── About Us Page ─────────────────────────────────────── */
    about: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=600&fit=crop",
        heading: "About Us",
      },
      story: {
        tag: "Our Story",
        heading: "Authentic Taste, Warm Hospitality",
        paragraphs: [
          "At HN Foods, we focus on authentic Pakistani food prepared with care and served in a comfortable dining environment.",
          "Located in F-6 Markaz, Islamabad, the restaurant is known for its BBQ, desi dishes, karahi, handi, breakfast items, rice, and seafood options.",
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
            title: "Authentic Taste",
            text: "Traditional Pakistani flavors made with care and attention to detail.",
          },
          {
            icon: "heart",
            title: "Wide Variety",
            text: "BBQ, karahi, breakfast, rice, seafood, and more under one roof.",
          },
          {
            icon: "people",
            title: "Family Friendly",
            text: "A comfortable dining space for families, friends, and gatherings.",
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
        subtext: "Explore HN Foods' selection of authentic Pakistani, BBQ, karahi, breakfast, seafood, and rice dishes.",
      },
      cta: {
        backgroundImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&h=500&fit=crop",
        heading: "YOUR TABLE\nIS READY!",
        text: "Reserve your table today and enjoy authentic Pakistani flavors with family and friends.",
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
        heading: "Signature Favorites",
        subtext: "Handpicked dishes from HN Foods — the best of our BBQ, karahi, breakfast, and rice offerings.",
      },
      hours: {
        backgroundImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1400&h=500&fit=crop",
        label: "Reservation",
        heading: "WORKING HOURS",
        text: "Open every day for lunch, dinner, and late-night dining.",
      },
    },

    /* ── Shop Page ─────────────────────────────────────────── */
    shop: {
      hero: {
        backgroundImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1400&h=600&fit=crop",
        label: "Online Store",
        heading: "SHOP",
        text: "Discover menu highlights and special combos from HN Foods.",
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
      tags: ["BBQ", "Karahi", "Breakfast", "Seafood", "Rice", "Deals"],
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
        subtext: "Reach out to HN Foods for reservations, orders, or general inquiries.",
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
