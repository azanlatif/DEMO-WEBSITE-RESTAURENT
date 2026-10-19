/**
 * ============================================================
 *  FLOATING WHATSAPP COMPONENT
 *  Quick direct contact widget pinned to bottom-right
 *  Direct number: +92 355 7771140
 * ============================================================
 */
import siteConfig from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";

export default function FloatingWhatsApp() {
  const handleClick = (e) => {
    e.preventDefault();
    openWhatsApp(
      `Hello! I would like to book or inquire about a stay at ${siteConfig.name} in Sālkhala.`
    );
  };

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
      onClick={handleClick}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Wadi-e-Jannat Villas"
      title="Book on WhatsApp"
    >
      <svg viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
      </svg>
      <span>Book on WhatsApp</span>
    </a>
  );
}
