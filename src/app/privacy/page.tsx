import type { Metadata } from "next";
import Link from "next/link";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteContact.siteName} — how ${siteContact.businessName} and ${siteContact.legalBrokerage} handle contact data on lonemountainhomesforsale.com.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const updated = "June 30, 2026";

  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-stone-600">Last updated: {updated}</p>

        <div className="prose prose-stone mt-8 max-w-none text-stone-700 prose-headings:text-stone-900 prose-a:text-amber-800">
          <p>
            {siteContact.siteName} ({siteContact.siteUrl}) is operated by {siteContact.businessName}
            , {siteContact.legalBrokerage}, Nevada license {siteContact.license}. This policy
            describes how we handle information when you use this website.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you submit a contact form, call, or email, we may collect your name, phone number,
            email address, and any message you provide about Lone Mountain or northwest Las Vegas real
            estate needs. MLS search widgets may set cookies or collect usage data according to their
            providers&apos; policies (including RealScout).
          </p>

          <h2>How we use information</h2>
          <ul>
            <li>Respond to inquiries about homes for sale, open houses, or listings near Lone Mountain</li>
            <li>Provide real estate brokerage services you request</li>
            <li>Improve site performance and security</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with service providers
            (hosting, CRM, MLS/search tools) only as needed to operate the site and serve clients,
            and as required by law or real estate regulations.
          </p>

          <h2>Cookies &amp; analytics</h2>
          <p>
            The site may use essential cookies and third-party scripts (e.g., RealScout, Google Maps
            embeds). You can control cookies through your browser settings.
          </p>

          <h2>Your choices</h2>
          <p>
            You may request access, correction, or deletion of contact information we hold by
            emailing{" "}
            <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a> or calling{" "}
            <a href={`tel:${siteContact.phoneE164}`}>{siteContact.phoneDisplay}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            {siteContact.businessName}
            <br />
            {siteContact.streetAddress}
            <br />
            {siteContact.addressLocality}, {siteContact.addressRegion} {siteContact.postalCode}
            <br />
            <Link href="/contact" className="font-medium text-amber-800 underline">
              Contact page
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
