/**
 * ============================================================
 *  APP — Root component with React Router
 *  Wadi-e-Jannat Villas (Sālkhala)
 *  Routes:
 *  - / : Home (Hero Slideshow, Amenities, Gallery, Pricing, Reviews)
 *  - /about : About The Villa (Specifications & Nature retreat)
 *  - /gallery : Full Photographic Gallery with Lightbox
 *  - /contact : Contact & WhatsApp Booking Inquiry
 * ============================================================
 */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback for legacy restaurant paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
