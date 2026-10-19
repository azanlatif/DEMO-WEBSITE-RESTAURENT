/**
 * ============================================================
 *  RESORT DATA — Real imagery and structured content for
 *  Wadi-e-Jannat Villas in Sālkhala.
 * ============================================================
 */
import heroExteriorDay from "../assets/Homepage Exterior.jpg";
import heroExteriorNight from "../assets/Homepage Exterior night view.jpg";
import bedInterior from "../assets/bed interoior.jpg";
import insideVillaInterior from "../assets/inside villas interior.jpg";
import livingInterior from "../assets/interior.jpg";
import interiorDetail2 from "../assets/interior 2.jpg";
import interiorPanoramic3 from "../assets/interior 3.jpg";
import washroomInterior from "../assets/washroom interior.jpg";

export const heroSlides = [
  {
    id: "exterior-day",
    title: "A Peaceful Mountain Getaway",
    subheading: "Surrounded by Natural Beauty",
    tagline: "WADI-E-JANNAT VILLAS · SĀLHKALA",
    description:
      "Enjoy a comfortable stay in our charming wooden villas in Sālkhala. Surrounded by tranquil mountain panoramas, lush pine forests, and crisp alpine air.",
    image: heroExteriorDay,
    timeOfDay: "day",
    badge: "☀️ Day View",
  },
  {
    id: "exterior-night",
    title: "Starry Alpine Nights & Warm Wood",
    subheading: "Cozy Sanctuaries in the Valley",
    tagline: "SERENE EVENINGS · SĀLHKALA",
    description:
      "Experience magical mountain twilights and clear starry skies. Our architectural lighting brings the natural wooden textures alive.",
    image: heroExteriorNight,
    timeOfDay: "night",
    badge: "🌙 Night View",
  },
];

export const villaGallery = [
  {
    id: 1,
    title: "Villa Exterior — Mountain Daylight",
    category: "exterior",
    categoryLabel: "Exterior",
    image: heroExteriorDay,
    description: "Charming wooden villa architecture nestled in the Sālkhala mountain valley.",
  },
  {
    id: 2,
    title: "Villa Exterior — Night Illumination",
    category: "exterior",
    categoryLabel: "Exterior",
    image: heroExteriorNight,
    description: "Enchanting night scenery with warm lighting reflecting off wooden facades.",
  },
  {
    id: 3,
    title: "Double Room with Two Comfortable Beds",
    category: "bedroom",
    categoryLabel: "Bedroom",
    image: bedInterior,
    description: "Spacious master bedroom with two plush beds, fresh linen, and wooden paneling.",
  },
  {
    id: 4,
    title: "Inside Villa Living Space",
    category: "interior",
    categoryLabel: "Interior",
    image: insideVillaInterior,
    description: "Warm, handcrafted cedar interiors offering comfort and mountain tranquility.",
  },
  {
    id: 5,
    title: "Private Bathroom & Bath Setup",
    category: "bathroom",
    categoryLabel: "Bathroom",
    image: washroomInterior,
    description: "Private bathroom equipped with deep bath, shower, slippers, towels, and bathrobes.",
  },
  {
    id: 6,
    title: "Villa Lounge & Seating Area",
    category: "interior",
    categoryLabel: "Interior",
    image: livingInterior,
    description: "Relaxed wooden lounge space perfect for family time and mountain contemplation.",
  },
  {
    id: 7,
    title: "Cozy Wooden Architectural Craft",
    category: "interior",
    categoryLabel: "Interior",
    image: interiorDetail2,
    description: "Detailed wooden craftsmanship with ambient lighting and natural warmth.",
  },
  {
    id: 8,
    title: "Panoramic Villa Suite Interior",
    category: "interior",
    categoryLabel: "Interior",
    image: interiorPanoramic3,
    description: "Harmonious balance of traditional wooden warmth and contemporary resort comfort.",
  },
];

export const resortTestimonials = [
  {
    id: 1,
    name: "Hamza Tariq",
    location: "Islamabad, Pakistan",
    rating: 5,
    text: "The wooden villa architecture is unbelievable. Waking up to the fresh mountain air in Sālkhala and having a warm tea on the balcony was the highlight of our trip. The host was incredibly responsive on WhatsApp!",
    stayDate: "Stayed with Family · 4 Guests",
  },
  {
    id: 2,
    name: "Dr. Ayesha & Salman",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "True peace and luxury in the mountains. The heated indoor pool was fantastic after exploring the valley, and the two beds were super comfortable for our family. Highly recommended!",
    stayDate: "Weekend Retreat",
  },
  {
    id: 3,
    name: "Bilal Farooq",
    location: "Rawalpindi, Pakistan",
    rating: 5,
    text: "Everything was as described: private bathroom with bathrobes, spotless rooms, peaceful garden and terrace, and hassle-free parking. Wadi-e-Jannat is now our permanent mountain stay.",
    stayDate: "Mountain Vacation",
  },
];

export const essentialInfo = [
  {
    id: "guests",
    title: "4 Guests",
    subtitle: "Maximum listed capacity",
    highlight: "Spacious for families or couples",
  },
  {
    id: "beds",
    title: "1 Bedroom · 2 Beds",
    subtitle: "Premium double setup",
    highlight: "Fresh linen & pillows",
  },
  {
    id: "bath",
    title: "1 Private Bathroom",
    subtitle: "Bath & shower included",
    highlight: "Slippers, bathrobes & towels",
  },
  {
    id: "location",
    title: "Sālkhala",
    subtitle: "Property location",
    highlight: "Scenic mountain valley & balcony",
  },
];
