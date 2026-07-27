/**
 * ============================================================
 *  CART MODAL / DRAWER COMPONENT
 *  Slide-over cart drawer with WhatsApp order integration.
 * ============================================================
 */
import { useCart } from "../../context/CartContext";
import { openWhatsApp } from "../../utils/whatsapp";
import "./CartModal.css";

export default function CartModal() {
  const {
    items,
    addToCart,
    removeFromCart,
    deleteItem,
    clearCart,
    cartTotal,
    isCartOpen,
    closeCart,
  } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let text = `🛒 *NEW ORDER - TASTYC*\n`;
    text += `-------------------------------\n`;
    items.forEach((item) => {
      const itemSubtotal = (item.price * item.qty).toFixed(2);
      text += `• ${item.qty}x ${item.name} (€${itemSubtotal})\n`;
    });
    text += `-------------------------------\n`;
    text += `*Total Amount:* €${cartTotal.toFixed(2)}\n\n`;
    text += `Please confirm my order and let me know the estimated time!`;

    openWhatsApp(text);
  };

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={closeCart} aria-hidden="true" />

      {/* Drawer */}
      <div className="cart-drawer" role="dialog" aria-label="Shopping Cart">
        {/* Header */}
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">
            Your Cart <span className="cart-drawer__badge">({items.length})</span>
          </h2>
          <button className="cart-drawer__close" onClick={closeCart} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Your cart is empty.</p>
              <span className="cart-drawer__empty-sub">Add delicious meals to get started!</span>
            </div>
          ) : (
            <div className="cart-drawer__items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="cart-item__img" />
                  )}
                  <div className="cart-item__details">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <span className="cart-item__price">€{item.price.toFixed(2)}</span>
                    <div className="cart-item__controls">
                      <button
                        className="cart-item__btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="cart-item__qty">{item.qty}</span>
                      <button
                        className="cart-item__btn"
                        onClick={() => addToCart(item, false)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => deleteItem(item.id)}
                    aria-label="Remove item"
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total-row">
              <span>Total:</span>
              <span className="cart-drawer__total-price">€{cartTotal.toFixed(2)}</span>
            </div>
            <button className="cart-drawer__wa-btn" onClick={handleWhatsAppCheckout}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              Order via WhatsApp
            </button>
            <button className="cart-drawer__clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
