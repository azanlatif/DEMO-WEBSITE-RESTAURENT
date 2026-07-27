/**
 * ============================================================
 *  LAYOUT COMPONENT
 *  Wraps every page with: Navbar (top) → Page → Newsletter → Footer
 *  Uses <Outlet> from React Router for nested routing.
 * ============================================================
 */
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import CartModal from "../CartModal/CartModal";

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
      <CartModal />
    </>
  );
}
