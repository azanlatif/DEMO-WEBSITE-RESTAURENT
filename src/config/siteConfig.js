/**
 * ============================================================
 *  SITE CONFIG — Single source of truth for Wadi-e-Jannat Villas.
 *  Serene mountain retreat in Sālkhala focused on villa booking.
 * ============================================================
 */

const siteConfig = {
  /* ── Brand ─────────────────────────────────────────────── */
  name: "Wadi-e-Jannat Villas",
  tagline: "A peaceful mountain getaway surrounded by natural beauty",
  subTagline: "Enjoy a comfortable stay in our charming wooden villas in Sālkhala",
  description:
    "Wadi-e-Jannat Villas offers comfortable accommodation in Sālkhala, featuring a garden, terrace, free private parking, and complimentary Wi-Fi. The double room includes two beds, a private bathroom with a bath and shower, slippers, bathrobes, towels, and bed linen. Guests can enjoy a balcony and the surrounding mountain scenery.",

  /* ── Essential Specifications ─────────────────────────── */
  specifications: {
    guests: "4 Guests",
    guestsLabel: "Maximum listed capacity",
    bedrooms: "1 Bedroom",
    beds: "2 Beds",
    bedsLabel: "Comfortable double configuration",
    bathrooms: "1 Bathroom",
    bathroomsLabel: "Private bathroom (bath & shower)",
    location: "Sālkhala",
    locationLabel: "Scenic Mountain Valley",
  },

  /* ── Amenities ─────────────────────────────────────────── */
  amenities: [
    {
      id: "wifi",
      title: "Free Wi-Fi",
      description: "High-speed wireless connectivity throughout the villa & grounds",
      icon: "wifi",
    },
    {
      id: "parking",
      title: "Free Parking",
      description: "Complimentary secured private parking on premises",
      icon: "parking",
    },
    {
      id: "pool",
      title: "Indoor Swimming Pool",
      description: "Heated indoor pool for all-season relaxation",
      icon: "pool",
    },
    {
      id: "ac",
      title: "Air Conditioning",
      description: "Climate-controlled heating and cooling in the villa",
      icon: "ac",
    },
    {
      id: "shuttle",
      title: "Airport Shuttle",
      description: "Convenient pickup and drop-off transfers on request",
      icon: "shuttle",
    },
    {
      id: "fitness",
      title: "Fitness Center",
      description: "Equipped workout space to stay active while retreating",
      icon: "fitness",
    },
    {
      id: "garden",
      title: "Garden & Terrace",
      description: "Lush landscaped outdoor spaces and scenic terrace lounging",
      icon: "garden",
    },
    {
      id: "bath",
      title: "Private Bathroom",
      description: "Deep bath & shower, plush towels, slippers & bathrobes",
      icon: "bath",
    },
    {
      id: "balcony",
      title: "Mountain View Balcony",
      description: "Panoramic vistas of pristine peaks and alpine greenery",
      icon: "balcony",
    },
  ],

  /* ── Design Tokens ─────────────────────────────────────── */
  colors: {
    primary: "#183B2B",
    primaryHover: "#22523C",
    accent: "#C59B27",
    accentHover: "#AE8519",
    dark: "#0B1812",
    darkAlt: "#13261D",
    offWhite: "#F8F6F1",
    white: "#FFFFFF",
    textMuted: "#617369",
    whatsapp: "#25D366",
  },

  /* ── Navigation Links ──────────────────────────────────── */
  navLinks: [
    { label: "Home", path: "/" },
    { label: "About The Villa", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Rates & Booking", path: "/contact" },
    { label: "Contact", path: "/contact" },
  ],

  /* ── Contact Info ──────────────────────────────────────── */
  contact: {
    phone: "+92 355 7771140",
    phoneDisplay: "+92 355 7771140",
    whatsapp: "+92 355 7771140",
    whatsappNumber: "923557771140",
    email: "booking@wadiejannatvillas.com",
    address: "Sālkhala, Azad Jammu & Kashmir, Pakistan",
    locationCity: "Sālkhala",
    checkInTime: "02:00 PM",
    checkOutTime: "11:00 AM",
  },

  /* ── Pricing & Rates ───────────────────────────────────── */
  pricing: {
    title: "Exclusive Wooden Villa Stay",
    badge: "Direct Booking Special",
    pricePerNight: "18,500",
    currency: "PKR",
    originalPrice: "24,000",
    period: "per night",
    note: "All taxes and resort amenities included. No hidden fees.",
    ctaText: "Book via WhatsApp",
    features: [
      "Full private wooden villa (up to 4 guests)",
      "1 bedroom with 2 comfortable luxury beds",
      "Private bathroom with bath, shower, bathrobes & slippers",
      "Private balcony with panoramic mountain views",
      "Complimentary high-speed Wi-Fi & free private parking",
      "Access to indoor swimming pool & fitness center",
      "Private garden and scenic terrace access",
      "Complimentary mountain tea / welcome refreshments",
    ],
    trustBadges: [
      { label: "Instant Confirmation", icon: "check" },
      { label: "Free Private Parking", icon: "parking" },
      { label: "Mountain View Balcony", icon: "mountain" },
      { label: "Direct WhatsApp Host Support", icon: "whatsapp" },
    ],
  },

  /* ── Social Links ──────────────────────────────────────── */
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/923557771140",
  },

  /* ── Footer ────────────────────────────────────────────── */
  footer: {
    aboutText:
      "Wadi-e-Jannat Villas is your idyllic wooden mountain sanctuary in Sālkhala. Surrounded by towering pine forests and crisp mountain air, we offer personalized mountain hospitality and tranquil comfort.",
    copyright: "© 2026 Wadi-e-Jannat Villas. All rights reserved.",
  },

  /* ── Newsletter / Updates ──────────────────────────────── */
  newsletter: {
    heading: "PLAN YOUR ESCAPE TO SĀLHKALA",
    subtext: "Receive seasonal mountain updates, snowfall forecasts, and exclusive direct booking privileges.",
    buttonText: "Subscribe",
    successMessage: "Thank you for joining! We look forward to welcoming you to the mountains. 🌲",
  },
};

export default siteConfig;
