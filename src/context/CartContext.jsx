/**
 * ============================================================
 *  CART CONTEXT — Frontend-only cart state (no backend).
 *  Provides addToCart, removeFromCart, clearCart, and cartCount.
 * ============================================================
 */
import { createContext, useContext, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  /** Add an item (or increment qty if already in cart) */
  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  /** Remove one unit; if qty hits 0 remove the item entirely */
  const removeFromCart = useCallback((productId) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === productId ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  /** Clear entire cart */
  const clearCart = useCallback(() => setItems([]), []);

  /** Total number of items (sum of quantities) */
  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, clearCart, cartCount }),
    [items, addToCart, removeFromCart, clearCart, cartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/** Custom hook for consuming cart context */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a <CartProvider>");
  return ctx;
}

export default CartContext;
