/**
 * ============================================================
 *  WHATSAPP UTILITY — Utility helper to build WhatsApp links
 *  and trigger direct messaging for orders & reservations.
 * ============================================================
 */
import siteConfig from "../config/siteConfig";

/** Generate a wa.me URL with encoded message text */
export function getWhatsAppLink(message) {
  const number = siteConfig.contact?.whatsappNumber || "923160011900";
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/** Open WhatsApp in a new tab with the given message */
export function openWhatsApp(message) {
  const url = getWhatsAppLink(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
