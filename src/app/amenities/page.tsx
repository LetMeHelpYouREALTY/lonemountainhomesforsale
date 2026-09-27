import type { Metadata } from "next";
import Link from "next/link";
import { NearbyAmenityMap } from "@/components/sections/nearby-amenity-map";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { loneMountainCommunityCenter } from "@/lib/amenity-map-config";
import {
  amenityCategoryWriteups,
  amenitiesPageFaqs,
  curatedNearbyPlaces,
} from "@/lib/curated-nearby-places";
import { commuteCorridors, loneMountainSchools } from "@/lib/lone-mountain-local";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  defaultOgImagePath,
  loneMountainPlaceJsonLd,
  verifiedNearbyPlacesItemListJsonLd,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

const pageTitle = "Nearby Amenities in Lone Mountain, Las Vegas";
const pageDescription = `Interactive map and hyperlocal guide to parks, grocery, healthcare, schools, and shopping near Lone Mountain ZIP 89129 — ${siteContact.businessName}, ${siteContact.legalBrokerage}.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/amenities" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/amenities",
    images: [{ url: defaultOgImagePath, alt: "Lone Mountain northwest Las Vegas amenities" }],
  },
};

export default function AmenitiesPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          loneMountainPlaceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Nearby amenities", path: "/amenities" },
          ]),
          verifiedNearbyPlacesItemListJsonLd(curatedNearbyPlaces),
          faqPageJsonLd([...amenitiesPageFaqs]),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Nearby amenities" },
            ]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Hyperlocal · ZIP {loneMountainCommunityCenter.postalCode} · Northwest Las Vegas
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Nearby amenities in {loneMountainCommunityCenter.name}, Las Vegas
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone-700">
            Buyers searching Lone Mountain and <strong>ZIP 89129</strong> ask about parks, beltway
            access, groceries, and hospitals before they tour. This page maps verified anchors around{" "}
            <strong>{loneMountainCommunityCenter.landmarkName}</strong> (
            {loneMountainCommunityCenter.landmarkAddress}) with an interactive Google Maps layer
            when your site key is configured—and a static fallback list when it is not.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Browse 89129 homes
            </Link>
            <Link
              href="/neighborhoods/lone-mountain"
              className="inline-flex rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Neighborhood guide
            </Link>
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">Interactive amenity map</h2>
        <p className="mt-3 max-w-3xl text-stone-700">
          Filter restaurants, parks, grocery, schools, and more. The star marks Lone Mountain centered
          on {loneMountainCommunityCenter.landmarkName}. Tap a pin for directions.
        </p>
        <div className="mt-8">
          <NearbyAmenityMap defaultFilter="parks" ariaLabel="Full amenity map for Lone Mountain Las Vegas" />
        </div>
      </div>

      {amenityCategoryWriteups.map((section) => (
        <section
          key={section.id}
          className={
            section.id === "commute"
              ? "border-y border-stone-200 bg-stone-50 py-14"
              : "mx-auto max-w-6xl px-4 py-10 sm:px-6"
          }
        >
          <div
            className={
              section.id === "commute" ? "mx-auto max-w-6xl px-4 sm:px-6" : undefined
            }
          >
            <h2 className="text-xl font-semibold text-stone-900">{section.title}</h2>
            <p className="mt-3 max-w-3xl text-stone-700">{section.body}</p>
            {section.id === "commute" ? (
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {commuteCorridors.map((c) => (
                  <li key={c.name} className="rounded-lg border border-stone-200 bg-white p-5">
                    <h3 className="font-semibold text-stone-900">{c.name}</h3>
                    <p className="mt-2 text-sm text-stone-700">{c.detail}</p>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.id === "schools" ? (
              <>
                <p className="mt-4 text-sm text-stone-600">
                  Confirm CCSD assignments for each address—see the{" "}
                  <Link href="/schools/lone-mountain" className="font-medium text-amber-800 underline">
                    Lone Mountain schools page
                  </Link>
                  .
                </p>
                <ul className="mt-4 space-y-2">
                  {loneMountainSchools.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-800"
                    >
                      <span className="font-medium">{s.level}:</span> {s.name}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </section>
      ))}

      <section className="border-t border-stone-200 bg-stone-100/80 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">Living near Lone Mountain — FAQ</h2>
          <div className="mt-8 space-y-8">
            {amenitiesPageFaqs.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-semibold text-stone-900">{item.question}</h3>
                <p className="mt-2 text-stone-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <LocalCta
          heading={`${siteContact.businessName} — Lone Mountain & ZIP 89129`}
          body={`${siteContact.legalBrokerage} · Nevada license ${siteContact.license} · Call ${siteContact.phoneDisplay} for a hyperlocal tour with parks, commute, and MLS shortlists tailored to your block.`}
        />
      </section>
    </main>
  );
}
