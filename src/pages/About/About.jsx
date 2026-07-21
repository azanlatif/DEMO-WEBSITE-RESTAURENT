/**
 * ABOUT PAGE — Placeholder
 */
import siteConfig from "../../config/siteConfig";

export default function About() {
  return (
    <div className="placeholder-page">
      <h1>About {siteConfig.name}</h1>
      <p>{siteConfig.description}</p>
    </div>
  );
}
