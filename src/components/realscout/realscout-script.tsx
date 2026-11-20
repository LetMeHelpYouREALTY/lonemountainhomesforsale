import Script from "next/script";
import { realScoutDefaults } from "@/lib/site-contact";

/** Load RealScout web components once per document (CSP allows em + www). */
export function RealScoutScript() {
  return (
    <Script src={realScoutDefaults.scriptSrc} strategy="afterInteractive" type="module" />
  );
}