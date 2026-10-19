/**
 * ============================================================
 *  WHATSAPP UTILITY — Direct WhatsApp booking & inquiry helpers
 *  Direct contact: +92 355 7771140 (Wadi-e-Jannat Villas)
 * ============================================================
 */
import siteConfig from "../config/siteConfig";

/** Generate a wa.me URL with encoded message text */
export function getWhatsAppLink(message) {
  const number = siteConfig.contact?.whatsappNumber || "923557771140";
  const defaultText = `Hello! I would like to inquire about booking a stay at ${siteConfig.name} in Sālkhala.`;
  const textToSend = message || defaultText;
  const encodedText = encodeURIComponent(textToSend);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/** Open WhatsApp in a new tab with the given message */
export function openWhatsApp(message) {
  const url = getWhatsAppLink(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Pre-formatted stay booking request */
export function bookStayWhatsApp({ checkIn, checkOut, guests, name, note } = {}) {
  let msg = `🌟 *Reservation Inquiry - ${siteConfig.name}*\n\n`;
  if (name) msg += `• Guest Name: ${name}\n`;
  if (checkIn) msg += `• Check-in Date: ${checkIn}\n`;
  if (checkOut) msg += `• Check-out Date: ${checkOut}\n`;
  if (guests) msg += `• Guests: ${guests}\n`;
  if (note) msg += `• Special Note: ${note}\n`;
  msg += `\nPlease let me know the villa availability and confirmation details. Thank you!`;

  openWhatsApp(msg);
}
