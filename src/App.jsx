/**
 * ============================================================
 *  APP — Root component with React Router.
 *  Routes: / (Home), /menu, /order, /contact, /shop, /about
 *  All pages wrapped in Layout (Navbar + Newsletter + Footer).
 * ============================================================
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Order from "./pages/Order/Order";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
