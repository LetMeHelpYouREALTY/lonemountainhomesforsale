import type { Metadata } from "next";
import Link from "next/link";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { marketUpdateMeta, pocketComparison } from "@/lib/market-update";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  loneMountainPlaceJsonLd,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain Las Vegas 89129 Neighborhood Guide | Homes & Lifestyle",
  description: `Lone Mountain ZIP 89129 guide: northwest Las Vegas lifestyle, 215 beltway access, Skye Canyon and Centennial Hills proximity, and homes for sale with ${siteContact.businessName}.`,
  alternates: { canonical: "/neighborhoods/lone-mountain" },
  robots: { index: true, follow: true },
};

const neighborhoodFaqs = [
  {
    question: "What zip code is Lone Mountain in Las Vegas?",
    answer:
      "Lone Mountain residential pockets are primarily served by ZIP code 89129 in northwest Las Vegas. Nearby ZIPs 89128 and 89149 often appear in the same search radius depending on the block.",
  },
  {
    question: "Where is Lone Mountain relative to the Strip and Summerlin?",
    answer:
      "Lone Mountain sits in northwest Las Vegas near the butte and CC-215 Exit 32 at Lone Mountain Road—not on the Strip corridor. Beltway access supports drives toward Summerlin offices, medical, and retail; always verify your own commute times.",
  },
  {
    question: "How do Lone Mountain, Skye Canyon, and Centennial Hills differ?",
    answer:
      "Lone Mountain / 89129 leans established lots and butte views; Skye Canyon emphasizes newer master-planned builds; Centennial Hills offers mixed housing along the 215 medical and retail corridor. Compare lot size, HOA packages, and beltway exits—not marketing labels.",
  },
  {
    question: "How do I tour Lone Mountain homes this weekend?",
    answer: `Check the open-houses map for weekend pins, book a private showing, or call ${siteContact.businessName} at ${siteContact.phoneDisplay} for a curated shortlist before you drive.`,
  },
] as const;

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Lone Mountain guide", path: "/neighborhoods/lone-mountain" },
] as const;

export default function LoneMountainNeighborhoodPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          loneMountainPlaceJsonLd(),
          breadcrumbJsonLd([...breadcrumbs]),
          articleJsonLd({
            headline: "Lone Mountain Las Vegas 89129 neighborhood guide",
            description:
              "Hyperlocal guide to Lone Mountain ZIP 89129: beltway access, pocket comparisons, schools verification, and how to tour with live MLS.",
            path: "/neighborhoods/lone-mountain",
            dateModified: marketUpdateMeta.asOfIso,
          }),
          faqPageJsonLd([...neighborhoodFaqs]),
        ]}
      />
      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Lone Mountain guide" },
            ]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Northwest Las Vegas · ZIP 89129 · Updated {marketUpdateMeta.asOfLabel}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Lone Mountain neighborhood guide
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            Lone Mountain is the ridge-and-residential pocket northwest of central Las Vegas most
            closely tied to <strong>ZIP code 89129</strong>. Buyers who type “homes near Lone
            Mountain” usually mean this ridge-line backdrop, larger-lot pockets, and a calmer rhythm
            than the Strip corridor—while still using the <strong>215 beltway</strong> to reach
            Summerlin offices, medical, and retail (always verify your own commute).
          </p>
        </div>
      </article>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-xl font-semibold text-stone-900">
          What zip code is Lone Mountain in Las Vegas?
        </h2>
        <p className="mt-3 text-stone-700">
          <strong>89129</strong> is the primary ZIP for Lone Mountain residential searches. Blocks
          near 89128 and 89149 can still show up in map searches—narrow by commute, lot size, and
          HOA rules rather than ZIP alone.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          What does “hyperlocal” mean inside 89129?
        </h2>
        <p className="mt-3 text-stone-700">
          Within 89129 you will find established subdivisions and newer infill. Some blocks sit
          higher toward the <strong>Lone Mountain peak</strong> with long views; others nestle along
          arterials that feed <strong>US 95</strong> and the <strong>215</strong>. Lot size, HOA
          presence, and solar orientation change block-to-block—tour with an agent who runs this
          farm weekly.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          How does Lone Mountain compare with Skye Canyon and Centennial Hills?
        </h2>
        <p className="mt-3 text-stone-700">
          Buyers comparing Lone Mountain often also shop <strong>Skye Canyon</strong> to the
          northwest and <strong>Centennial Hills</strong> along the 215 corridor. Each has a
          different housing age mix and HOA landscape; {siteContact.businessName} helps weigh views
          vs. newer build vs. commute shoulder.
        </p>
        <ComparisonTable
          caption="Lone Mountain vs nearby northwest pockets"
          rows={pocketComparison}
        />

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          How do I check schools for a Lone Mountain address?
        </h2>
        <p className="mt-3 text-stone-700">
          Clark County School District assignments change by address and year. Confirm directly with{" "}
          <a
            href="https://www.ccsd.net/"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            CCSD
          </a>{" "}
          and the assigned school before you offer. See the{" "}
          <Link
            href="/schools/lone-mountain"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            Lone Mountain schools guide
          </Link>{" "}
          for names commonly tied to this corridor.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          What are current Lone Mountain home prices?
        </h2>
        <p className="mt-3 text-stone-700">
          As of {marketUpdateMeta.asOfLabel}, public sources show a Lone Mountain neighborhood
          median sale near <strong>$421K</strong> (Redfin, three months ending October 2026) and ZIP
          89129 median list near <strong>$550K</strong> (IDX report, mid-November 2026). Read the
          full sourced snapshot on the{" "}
          <Link
            href="/market-update"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            market update page
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          How do I tour open houses this weekend?
        </h2>
        <p className="mt-3 text-stone-700">
          Weekend traffic clusters around published open houses. See the{" "}
          <Link
            href="/open-houses"
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            Lone Mountain open house map
          </Link>{" "}
          for this week’s pins, or call{" "}
          <a
            href={`tel:${siteContact.phoneE164}`}
            className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            {siteContact.phoneDisplay}
          </a>{" "}
          for a curated shortlist before you spend a Saturday driving.
        </p>

        <div className="mt-12 space-y-8 border-t border-stone-200 pt-10">
          <h2 className="text-xl font-semibold text-stone-900">Lone Mountain FAQ</h2>
          {neighborhoodFaqs.map((item) => (
            <article key={item.question}>
              <h3 className="text-lg font-semibold text-stone-900">{item.question}</h3>
              <p className="mt-2 text-stone-700">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-stone-200 bg-stone-50 p-6">
          <p className="font-medium text-stone-900">Work with {siteContact.businessName}</p>
          <p className="mt-2 text-sm text-stone-700">
            Licensed since 2008 · Lone Mountain &amp; ZIP 89129 focus · {siteContact.phoneDisplay}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Browse 89129 area listings
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
