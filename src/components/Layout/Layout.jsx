/**
 * ============================================================
 *  LAYOUT COMPONENT
 *  Wraps every page with: Navbar (top) → Page → Newsletter → Footer → FloatingWhatsApp
 *  Uses <Outlet> from React Router for nested routing.
 * ============================================================
 */
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import FloatingWhatsApp from "../FloatingWhatsApp/FloatingWhatsApp";

export default function Layout() {
  const { pathname } = useLocation();

  /* Scroll to top on every route change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
