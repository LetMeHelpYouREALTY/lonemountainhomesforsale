import type { Metadata } from "next";
import Link from "next/link";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { commuteCorridors, loneMountainZipCodes } from "@/lib/lone-mountain-local";
import { breadcrumbJsonLd, faqPageJsonLd, loneMountainPlaceJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "89129 Homes for Sale | Lone Mountain Las Vegas ZIP",
  description: `Homes for sale in ZIP 89129 Lone Mountain Las Vegas—parks, 215 access, and realtor services with ${siteContact.businessName}.`,
  alternates: { canonical: "/zip-codes/89129" },
};

const zipFaqs = [
  {
    question: "Is 89129 the same as Lone Mountain Las Vegas?",
    answer:
      "89129 is the primary ZIP buyers associate with Lone Mountain residential pockets in northwest Las Vegas, though nearby ZIPs 89128 and 89149 appear in many searches.",
  },
  {
    question: "Where do I search live 89129 MLS listings?",
    answer:
      "Use the Homes for sale page for live search tools, or call Dr. Jan Duffy for a curated shortlist matched to your budget and commute.",
  },
];

export default function Zip89129Page() {
  const related = loneMountainZipCodes.filter((z) => z.zip !== "89129");

  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          loneMountainPlaceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "89129", path: "/zip-codes/89129" },
          ]),
          faqPageJsonLd(zipFaqs),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "ZIP 89129" }]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Lone Mountain · Northwest Las Vegas
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            89129 homes for sale
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            ZIP <strong>89129</strong> anchors most “Lone Mountain homes for sale” searches—mixing
            established subdivisions, view lots toward the butte, and practical access to{" "}
            <strong>CC-215 Exit 32</strong> at Lone Mountain Road.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Search 89129 listings
            </Link>
            <Link
              href="/amenities"
              className="inline-flex rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Parks &amp; amenities
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-semibold text-stone-900">Commute context</h2>
        <ul className="mt-6 space-y-4">
          {commuteCorridors.slice(0, 3).map((c) => (
            <li key={c.name} className="text-sm text-stone-700">
              <strong className="text-stone-900">{c.name}:</strong> {c.detail}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-xl font-semibold text-stone-900">Nearby ZIP codes</h2>
        <ul className="mt-4 space-y-3">
          {related.map((z) => (
            <li key={z.zip} className="text-sm text-stone-700">
              <strong>{z.zip}</strong> — {z.label}
            </li>
          ))}
        </ul>

        <div className="mt-12 space-y-8">
          {zipFaqs.map((item) => (
            <article key={item.question}>
              <h2 className="text-lg font-semibold text-stone-900">{item.question}</h2>
              <p className="mt-2 text-stone-700">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <LocalCta />
        </div>
      </section>
    </main>
  );
}
