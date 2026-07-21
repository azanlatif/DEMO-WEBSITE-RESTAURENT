/**
 * ============================================================
 *  HOME PAGE DATA — All content for the landing page sections.
 *  Edit this file to change hero slides, about text, stats,
 *  testimonials, blog posts, and app download content.
 * ============================================================
 */

const homeData = {
  /* ── Hero Slider ───────────────────────────────────────── */
  heroSlides: [
    {
      id: 1,
      subtitle: "HELLO, NEW FRIENDS",
      heading: "RESERVE YOUR\nTABLE TODAY",
      description: "Experience the finest dining with dishes crafted by world-class chefs using the freshest ingredients.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
      ctaText: "BOOK A TABLE",
      ctaLink: "/contact",
    },
    {
      id: 2,
      subtitle: "TASTE THE DIFFERENCE",
      heading: "WELCOME TO\nOUR PLACE",
      description: "Every dish tells a story of passion, tradition, and the finest culinary artistry.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop",
      ctaText: "VIEW MENU",
      ctaLink: "/menu",
    },
    {
      id: 3,
      subtitle: "UNFORGETTABLE MOMENTS",
      heading: "DISCOVER NEW\nFLAVORS",
      description: "From appetizers to desserts, embark on a culinary journey that delights every sense.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop",
      ctaText: "ORDER NOW",
      ctaLink: "/order",
    },
  ],

  /* ── Welcome / About Section ───────────────────────────── */
  welcome: {
    label: "ABOUT US",
    heading: "We Invite You to Visit\nOur Restaurant",
    description:
      "Welcome to a dining experience where every detail matters. Our chefs combine traditional techniques with modern innovation to create dishes that are as beautiful as they are delicious. We source only the finest ingredients from local farms and trusted suppliers.",
    features: [
      "Farm-to-table fresh ingredients daily",
      "Award-winning culinary team",
      "Intimate & elegant dining atmosphere",
    ],
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop",
    ctaText: "READ MORE",
    ctaLink: "/about",
  },

  /* ── Fresh Ingredients Section ──────────────────────────── */
  freshIngredients: {
    label: "QUALITY FOOD",
    heading: "Always Fresh\nIngredients",
    description:
      "We believe that great food starts with great ingredients. That's why we partner with local farmers and artisanal producers to bring you the freshest seasonal produce, sustainably sourced seafood, and premium meats.",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop",
    chefImage: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop",
    stats: [
      { value: "100%", label: "Organic" },
      { value: "Fresh", label: "Daily" },
    ],
  },

  /* ── Chef's Recipes Section ────────────────────────────── */
  chefRecipes: {
    label: "SPECIAL MENU",
    heading: "Use the Tips and\nRecipes of Our Chefs",
    description:
      "Our chefs share their secret recipes and cooking tips so you can recreate the magic at home. From classic techniques to innovative approaches.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop",
    ctaText: "VIEW ALL RECIPES",
    ctaLink: "/menu",
  },

  /* ── Why Choose Us ─────────────────────────────────────── */
  whyChooseUs: {
    label: "OUR ADVANTAGES",
    heading: "Why people choose us?",
    items: [
      {
        icon: "quality",
        title: "Quality Food",
        description: "We use only the finest and freshest ingredients to prepare every dish with exceptional care and attention.",
      },
      {
        icon: "delivery",
        title: "Fast Delivery",
        description: "Hot and fresh meals delivered right to your door within 30 minutes or your next order is on us.",
      },
      {
        icon: "service",
        title: "Best Service",
        description: "Our dedicated team ensures every guest receives personalized attention and an unforgettable experience.",
      },
    ],
  },

  /* ── Working Hours (uses siteConfig.workingHours) ──────── */
  workingHoursSection: {
    label: "VISIT US",
    heading: "WORKING HOURS",
    backgroundImage: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=800&fit=crop",
  },

  /* ── Testimonials ──────────────────────────────────────── */
  testimonials: {
    label: "TESTIMONIALS",
    heading: "What Our Visitors say",
    items: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Food Blogger",
        text: "An absolutely incredible dining experience. The flavors, the presentation, the ambiance — everything was perfect. I'll definitely be coming back!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Regular Customer",
        text: "This restaurant has become my go-to spot for special occasions. The chef's tasting menu is a work of art, and the service is always impeccable.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
      },
      {
        id: 3,
        name: "Emily Davis",
        role: "Food Critic",
        text: "Rarely do you find a restaurant that excels in every category. From the warm welcome to the exquisite desserts, this is fine dining at its best.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        rating: 5,
      },
    ],
  },

  /* ── Stats / Counters ──────────────────────────────────── */
  stats: [
    { value: 400, suffix: "+", label: "Dishes Served Daily" },
    { value: 100, suffix: "%", label: "Fresh Ingredients" },
    { value: 5, suffix: "k+", label: "Happy Customers" },
    { value: 24, suffix: "+", label: "Expert Chefs" },
  ],

  /* ── Download App Section ──────────────────────────────── */
  downloadApp: {
    label: "GET THE APP",
    heading: "DOWNLOAD OUR\nAPPLICATION",
    description:
      "Order your favorite dishes, track delivery in real-time, and earn rewards with every order. Available on iOS and Android.",
    appStoreUrl: "#",
    playStoreUrl: "#",
    phoneImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=700&fit=crop",
    backgroundImage: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=800&fit=crop",
  },

  /* ── Blog / Tips Section ───────────────────────────────── */
  blogPosts: [
    {
      id: 1,
      category: "Recipes",
      date: "June 15, 2026",
      title: "Learn Cooking from our\nExpert Chefs",
      excerpt: "Discover the secrets behind our signature dishes and learn professional cooking techniques.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
      link: "/about",
    },
    {
      id: 2,
      category: "Tips",
      date: "June 10, 2026",
      title: "Italian Pasta Made\nSimple & Delicious",
      excerpt: "Master the art of making authentic Italian pasta with just a few simple ingredients.",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop",
      link: "/about",
    },
    {
      id: 3,
      category: "Health",
      date: "June 5, 2026",
      title: "Healthy Eating Tips\nfor Everyone",
      excerpt: "Balance flavor and nutrition with our chef's guide to wholesome, delicious meals.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
      link: "/about",
    },
  ],
};

export default homeData;
