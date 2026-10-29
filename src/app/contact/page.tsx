import type { Metadata } from "next";
import Link from "next/link";
import { GoogleMapEmbed } from "@/components/sections/google-map-embed";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: `Contact ${siteContact.businessName} | Lone Mountain & Las Vegas`,
  description: `Call ${siteContact.phoneDisplay}, email ${siteContact.email}, or visit the office on W Lake Mead Blvd. Lone Mountain ZIP 89129, Skye Canyon, and northwest Las Vegas real estate.`,
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
] as const;

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto flex-1 max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd data={breadcrumbJsonLd([...breadcrumbs])} />
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        Contact {siteContact.businessName}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-stone-600">
        Questions about Lone Mountain, 89129, or northwest Las Vegas real estate? Reach out by phone,
        email, or schedule time at the office.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">Phone</h2>
            <p className="mt-2">
              <a
                href={`tel:${siteContact.phoneE164}`}
                className="text-lg font-medium text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                {siteContact.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm text-stone-600">Call or text, 7 days a week (see hours below).</p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">Email</h2>
            <p className="mt-2">
              <a
                href={`mailto:${siteContact.email}`}
                className="font-medium text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                {siteContact.email}
              </a>
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">Office</h2>
            <p className="mt-2 text-stone-700">
              {siteContact.streetAddress}
              <br />
              {siteContact.addressLocality}, {siteContact.addressRegion} {siteContact.postalCode}
            </p>
            <p className="mt-3 text-sm text-stone-600">
              {siteContact.businessName} · Las Vegas REALTOR®
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-stone-900">Hours</h2>
            <ul className="mt-2 space-y-1 text-stone-700">
              <li>Monday–Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday–Sunday: 10:00 AM – 4:00 PM</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteContact.googleDirectionsUrl}
              className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              Directions
            </a>
            <a
              href={siteContact.googleReviewsUrl}
              className="rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Google listing
            </a>
            <Link
              href="/search"
              className="rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Search homes
            </Link>
          </div>
        </div>
        <GoogleMapEmbed title="Office location map" />
      </div>
    </main>
  );
}
