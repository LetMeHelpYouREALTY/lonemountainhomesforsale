import type { Metadata } from "next";
import Link from "next/link";
import { LocalCta } from "@/components/sections/local-cta";
import { OpenHousesMapBlock } from "@/components/sections/open-houses-map-block";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Tour Lone Mountain Homes | Open Houses & Private Showings 89129",
  description: `Schedule a Lone Mountain Las Vegas home tour or open house visit in ZIP 89129 with ${siteContact.businessName}. Call ${siteContact.phoneDisplay}.`,
  alternates: { canonical: "/tour" },
  robots: { index: true, follow: true },
};

const tourFaqs = [
  {
    question: "How do I tour homes near Lone Mountain?",
    answer:
      "Start with the open house map for this weekend’s published showings, then call or text to confirm times. For private tours, Dr. Jan Duffy can build a shortlist matched to your budget and commute.",
  },
  {
    question: "Are open houses in 89129 always drop-in?",
    answer:
      "Hours on third-party maps and MLS feeds can change. Confirm with the listing agent before you drive—especially for Lone Mountain and northwest Las Vegas pockets.",
  },
];

export default function TourPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Tour homes", path: "/tour" },
          ]),
          faqPageJsonLd(tourFaqs),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tour homes" }]} />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Lone Mountain · ZIP 89129
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Tour Lone Mountain homes
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone-700">
            Whether you are planning a Saturday open-house loop or a private showing near the Lone
            Mountain butte, {siteContact.businessName} can help you tour northwest Las Vegas with a
            clear plan—not random drive-bys.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="inline-flex rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Call {siteContact.phoneDisplay}
            </a>
            <Link
              href="/search"
              className="inline-flex rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Browse listings first
            </Link>
          </div>
        </div>
      </article>

      <section className="border-b border-stone-200 bg-stone-50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">This weekend&apos;s open houses</h2>
          <p className="mt-3 max-w-3xl text-stone-700">
            Map pins cover Lone Mountain, 89129, Skye Canyon, and the 215 beltway—confirm times before
            you head out.
          </p>
          <div className="mt-8">
            <OpenHousesMapBlock />
          </div>
          <Link
            href="/open-houses"
            className="mt-6 inline-block text-sm font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            Full open houses page →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">Private showings</h2>
        <p className="mt-3 text-stone-700">
          Share your must-haves (beds, garage, pool, single story, horse-friendly lots) and commute
          targets. You will get a focused tour route instead of scrolling every 89129 listing
          manually.
        </p>
        <div className="mt-10 space-y-8">
          {tourFaqs.map((item) => (
            <article key={item.question}>
              <h3 className="text-lg font-semibold text-stone-900">{item.question}</h3>
              <p className="mt-2 text-stone-700">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <LocalCta heading="Plan your Lone Mountain tour" />
        </div>
      </section>
    </main>
  );
}
