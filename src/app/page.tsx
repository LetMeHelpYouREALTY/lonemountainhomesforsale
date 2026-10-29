import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleMapEmbed } from "@/components/sections/google-map-embed";
import { OpenHousesMapBlock } from "@/components/sections/open-houses-map-block";
import { JsonLd } from "@/components/seo/json-ld";
import { homeFaqs } from "@/lib/home-faqs";
import { galleryImagePaths } from "@/lib/gallery-images";
import { faqPageJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const hero = galleryImagePaths[0];

  return (
    <main id="main-content" className="flex-1">
      <JsonLd data={faqPageJsonLd([...homeFaqs])} />

      <section className="relative isolate min-h-[min(70vh,560px)] w-full">
        <Image
          src={hero}
          alt="Lone Mountain and northwest Las Vegas homes and desert ridgelines"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/40 to-stone-900/20" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
          <p className="text-sm font-medium uppercase tracking-wide text-amber-200/90">
            Las Vegas, NV · Lone Mountain · 89129
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {siteContact.siteName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-100">
            Explore homes and lifestyle near Lone Mountain with {siteContact.businessName}, Las Vegas
            REALTOR®. Call {siteContact.phoneDisplay} for a focused search and
            straightforward guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Browse homes for sale
            </Link>
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
            >
              Call {siteContact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
            Open houses this weekend (89129 &amp; NW Las Vegas)
          </h2>
          <p className="mt-3 max-w-3xl text-stone-700">
            Live My Map pins around <strong>Lone Mountain</strong>, <strong>ZIP 89129</strong>, Skye
            Canyon, Centennial Hills, and the 215 beltway—tap for times, then confirm with{" "}
            {siteContact.businessName} before you drive.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Call {siteContact.phoneDisplay}
            </a>
            <Link
              href="/open-houses"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Open houses page (details)
            </Link>
          </div>
          <div className="mt-8">
            <OpenHousesMapBlock />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          Why buyers watch Lone Mountain
        </h2>
        <p className="mt-3 max-w-3xl text-stone-700">
          Lone Mountain offers a northwest Las Vegas address with open views, older neighborhoods,
          and practical access to the 215 beltway, Centennial Hills, and Skye Canyon corridors. It is a
          strong fit for buyers who want space, newer construction pockets, and a calmer residential
          rhythm while staying inside the valley. For block-by-block context inside{" "}
          <Link
            href="/neighborhoods/lone-mountain"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            ZIP 89129 and Lone Mountain proper
          </Link>
          , read the neighborhood guide—then tour what is actually on the market this week.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          <li className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-stone-900">Room to breathe</h3>
            <p className="mt-2 text-sm text-stone-600">
              Lot sizes and floor plans often skew larger than core urban pockets—helpful for garages,
              RV parking, pools, and multi-generational layouts when available.
            </p>
          </li>
          <li className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-stone-900">Northwest connectivity</h3>
            <p className="mt-2 text-sm text-stone-600">
              Commutes toward Summerlin, Centennial Hills, and major employment centers can be
              straightforward with beltway access—always verify drive times to your daily destinations.
            </p>
          </li>
        </ul>
      </section>

      <section className="border-y border-stone-200 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Area photography</h2>
          <p className="mt-3 max-w-3xl text-stone-700">
            See a full gallery of Lone Mountain and northwest Las Vegas scenery and neighborhood
            context—then jump to active listings when you are ready to tour.
          </p>
          <Link
            href="/area-photography"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
          >
            View area photos
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">Office &amp; hours</h2>
            <p className="mt-3 text-stone-700">
              {siteContact.streetAddress}
              <br />
              {siteContact.addressLocality}, {siteContact.addressRegion} {siteContact.postalCode}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>Monday–Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday–Sunday: 10:00 AM – 4:00 PM</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteContact.phoneE164}`}
                className="rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                Call {siteContact.phoneDisplay}
              </a>
              <a
                href={siteContact.googleDirectionsUrl}
                className="rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
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
                href="/contact"
                className="rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                Contact page
              </Link>
            </div>
          </div>
          <GoogleMapEmbed title="Map of the office on W Lake Mead Blvd" />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-100/80 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-8">
            {homeFaqs.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-semibold text-stone-900">{item.question}</h3>
                <p className="mt-2 text-stone-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
