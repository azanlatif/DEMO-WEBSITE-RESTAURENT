/**
 * ============================================================
 *  CART CONTEXT — Frontend cart state + Cart Modal toggle.
 * ============================================================
 */
import { createContext, useContext, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  /** Add an item (or increment qty if already in cart) and auto-open cart drawer */
  const addToCart = useCallback((product, autoOpen = true) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [...prev, { ...product, qty: 1 }];
    });
    if (autoOpen) {
      setIsCartOpen(true);
    }
  }, []);

  /** Remove one unit; if qty hits 0 remove the item entirely */
  const removeFromCart = useCallback((productId) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === productId ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  /** Completely remove item by ID regardless of quantity */
  const deleteItem = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  /** Clear entire cart */
  const clearCart = useCallback(() => setItems([]), []);

  /** Total number of items (sum of quantities) */
  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  /** Total price of items */
  const cartTotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      deleteItem,
      clearCart,
      cartCount,
      cartTotal,
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
    }),
    [items, addToCart, removeFromCart, deleteItem, clearCart, cartCount, cartTotal, isCartOpen, openCart, closeCart, toggleCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a <CartProvider>");
  return ctx;
}

export default CartContext;
