import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { commuteCorridors, loneMountainZipCodes } from "@/lib/lone-mountain-local";
import { marketUpdateMeta, pocketComparison } from "@/lib/market-update";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  loneMountainPlaceJsonLd,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "89129 Homes for Sale | Lone Mountain Las Vegas ZIP",
  description: `Homes for sale in ZIP 89129 Lone Mountain Las Vegas—parks, 215 access, market context, and realtor services with ${siteContact.businessName}.`,
  alternates: { canonical: "/zip-codes/89129" },
};

const zipFaqs = [
  {
    question: "Is 89129 the same as Lone Mountain Las Vegas?",
    answer:
      "89129 is the primary ZIP buyers associate with Lone Mountain residential pockets in northwest Las Vegas, though nearby ZIPs 89128 and 89149 appear in many searches.",
  },
  {
    question: "What is the median home price in ZIP 89129?",
    answer:
      "As of mid-November 2026, one GLVAR/IDX-backed report showed a $550,000 median list price for ZIP 89129 with about eight months of inventory. Lone Mountain neighborhood sold medians can differ—see the market update page for sourced figures.",
  },
  {
    question: "Where do I search live 89129 MLS listings?",
    answer: `Use the Homes for sale page for live search tools, or call ${siteContact.businessName} at ${siteContact.phoneDisplay} for a curated shortlist matched to your budget and commute.`,
  },
  {
    question: "How do I get to the 215 from 89129?",
    answer:
      "CC-215 Exit 32 at Lone Mountain Road provides direct beltway access near Lone Mountain Regional Park, linking northwest Las Vegas to Centennial Hills, Skye Canyon, and the Centennial Bowl interchange with I-11/US-95.",
  },
] as const;

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
          articleJsonLd({
            headline: "89129 homes for sale — Lone Mountain Las Vegas ZIP guide",
            description:
              "ZIP 89129 Lone Mountain homes: beltway access, nearby ZIPs, sourced market context, and live MLS search.",
            path: "/zip-codes/89129",
            dateModified: marketUpdateMeta.asOfIso,
          }),
          faqPageJsonLd([...zipFaqs]),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "ZIP 89129" }]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Lone Mountain · Northwest Las Vegas · Updated {marketUpdateMeta.asOfLabel}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            89129 homes for sale
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            ZIP <strong>89129</strong> anchors most “Lone Mountain homes for sale” searches—mixing
            established subdivisions, view lots toward the butte, and practical access to{" "}
            <strong>CC-215 Exit 32</strong> at Lone Mountain Road. Mid-November 2026 public list data
            put the ZIP median list near <strong>$550,000</strong>; confirm sold comps on live MLS.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Search 89129 listings
            </Link>
            <Link
              href="/market-update"
              className="inline-flex rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Market update
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-semibold text-stone-900">
          Is 89129 the same as Lone Mountain Las Vegas?
        </h2>
        <p className="mt-3 text-stone-700">
          For most MLS searches, yes—<strong>89129</strong> is the ZIP buyers mean when they say
          Lone Mountain. Adjacent ZIPs still matter for school assignment and commute; use the
          comparison below when you cross-shop.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          How does 89129 compare with nearby northwest pockets?
        </h2>
        <p className="mt-3 text-stone-700">
          Match housing age, beltway exit, and recreation distance to your daily routes—not to a
          single ZIP label.
        </p>
        <ComparisonTable
          caption="89129 / Lone Mountain vs nearby northwest pockets"
          rows={pocketComparison}
        />

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          What commute corridors serve ZIP 89129?
        </h2>
        <ul className="mt-6 space-y-4">
          {commuteCorridors.slice(0, 3).map((c) => (
            <li key={c.name} className="text-sm text-stone-700">
              <strong className="text-stone-900">{c.name}:</strong> {c.detail}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">Nearby ZIP codes</h2>
        <ul className="mt-4 space-y-3">
          {related.map((z) => (
            <li key={z.zip} className="text-sm text-stone-700">
              <strong>{z.zip}</strong> — {z.label}. {z.description}
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
