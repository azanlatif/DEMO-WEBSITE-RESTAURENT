/**
 * CONTACT PAGE — Placeholder
 */
import siteConfig from "../../config/siteConfig";

export default function Contact() {
  return (
    <div className="placeholder-page">
      <h1>Contact Us</h1>
      <p>Get in touch — {siteConfig.contact.email}</p>
    </div>
  );
}
