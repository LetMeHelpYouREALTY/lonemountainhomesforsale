import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  marketFaqs,
  marketStats,
  marketUpdateMeta,
  pocketComparison,
} from "@/lib/market-update";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  loneMountainPlaceJsonLd,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain 89129 Market Update | Median Prices & Inventory",
  description: `As of ${marketUpdateMeta.asOfLabel}: Lone Mountain median sale price, days on market, and ZIP 89129 list inventory with sourced figures—plus how to tour with ${siteContact.businessName}.`,
  alternates: { canonical: marketUpdateMeta.path },
  robots: { index: true, follow: true },
};

export default function MarketUpdatePage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          loneMountainPlaceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Market update", path: marketUpdateMeta.path },
          ]),
          articleJsonLd({
            headline: `${marketUpdateMeta.title} — ${marketUpdateMeta.asOfLabel}`,
            description: `Sourced Lone Mountain and ZIP 89129 housing metrics as of ${marketUpdateMeta.asOfLabel}, with buyer guidance from ${siteContact.businessName}.`,
            path: marketUpdateMeta.path,
            dateModified: marketUpdateMeta.asOfIso,
            datePublished: marketUpdateMeta.asOfIso,
          }),
          faqPageJsonLd([...marketFaqs]),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Market update" }]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            As of {marketUpdateMeta.asOfLabel} · America/Los_Angeles
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {marketUpdateMeta.title}
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            Lone Mountain’s Redfin neighborhood median sale price was{" "}
            <strong>$421,298</strong> for the three months ending October 2026 (+6.7% year over
            year). ZIP <strong>89129</strong> median list price sat near <strong>$550,000</strong>{" "}
            mid-November 2026 on an IDX-backed report—list and sold series are not the same. Figures
            below cite public sources; always verify live MLS before you write an offer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Search live MLS
            </Link>
            <Link
              href="/open-houses"
              className="inline-flex rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Open houses map
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-semibold text-stone-900">
          What are the key Lone Mountain market numbers right now?
        </h2>
        <p className="mt-3 text-stone-700">
          Use these as a dated snapshot—not a CMA. Neighborhood (Lone Mountain) and ZIP (89129)
          boundaries differ by data vendor, so treat each row as labeled.
        </p>
        <ul className="mt-8 space-y-6">
          {marketStats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-stone-900">{stat.value}</p>
              <p className="mt-2 text-sm text-stone-700">{stat.detail}</p>
              <p className="mt-2 text-xs text-stone-500">
                Source:{" "}
                <a
                  href={stat.sourceUrl}
                  className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {stat.sourceName}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-stone-900">
            How does Lone Mountain compare with Skye Canyon and Centennial Hills?
          </h2>
          <p className="mt-3 max-w-3xl text-stone-700">
            Buyers cross-shop these northwest pockets for housing age, beltway access, and recreation
            distance—not “better” or “worse.” Match the pocket to commute and lot priorities.
          </p>
          <ComparisonTable
            caption="Northwest Las Vegas pocket comparison (infrastructure & housing mix)"
            rows={pocketComparison}
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-semibold text-stone-900">Market FAQ</h2>
        <div className="mt-8 space-y-8">
          {marketFaqs.map((item) => (
            <article key={item.question}>
              <h3 className="text-lg font-semibold text-stone-900">{item.question}</h3>
              <p className="mt-2 text-stone-700">{item.answer}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-stone-600">
          Related guides:{" "}
          <Link
            href="/neighborhoods/lone-mountain"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            Lone Mountain neighborhood
          </Link>
          ,{" "}
          <Link
            href="/zip-codes/89129"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            ZIP 89129
          </Link>
          ,{" "}
          <Link
            href="/amenities"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            amenities &amp; maps
          </Link>
          .
        </p>
        <div className="mt-12">
          <LocalCta />
        </div>
      </section>
    </main>
  );
}
