import type { Metadata } from "next";
import Link from "next/link";
import { LifeNearSection } from "@/components/sections/life-near-section";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain Las Vegas 89129 Neighborhood Guide | Homes & Lifestyle",
  description: `Lone Mountain ZIP 89129 guide: northwest Las Vegas lifestyle, 215 beltway access, Skye Canyon and Centennial Hills proximity, and homes for sale with ${siteContact.businessName}.`,
  alternates: { canonical: "/neighborhoods/lone-mountain" },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Lone Mountain guide", path: "/neighborhoods/lone-mountain" },
] as const;

export default function LoneMountainNeighborhoodPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd data={breadcrumbJsonLd([...breadcrumbs])} />
      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Lone Mountain guide" },
            ]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Northwest Las Vegas · ZIP 89129
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Lone Mountain neighborhood guide
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            Lone Mountain is the ridge-and-residential pocket northwest of central Las Vegas most closely
            tied to <strong>ZIP code 89129</strong>. Buyers who type “homes near Lone Mountain” usually
            mean this ridge-line backdrop, larger-lot pockets, and a calmer rhythm than the Strip corridor—
            while still using the <strong>215 beltway</strong> to reach Summerlin offices, medical, and
            retail in reasonable time (always verify your own commute).
          </p>

          <h2 className="mt-10 text-xl font-semibold text-stone-900">What “hyperlocal” means here</h2>
          <p className="mt-3 text-stone-700">
            Within 89129 you will find a mix of established subdivisions and newer infill. Some blocks
            sit higher toward the <strong>Lone Mountain peak</strong> with long views; others nestle
            along arterials that feed <strong>US 95</strong> and the <strong>215</strong>. Micro-pockets
            can feel different block-to-block—lot size, HOA presence, and solar orientation—so it pays to
            tour in person with an agent who runs this farm weekly.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-stone-900">Neighbors on the map</h2>
          <p className="mt-3 text-stone-700">
            Buyers comparing Lone Mountain often also shop <strong>Skye Canyon</strong> to the northwest
            and <strong>Centennial Hills</strong> along the 215 corridor. Each has its own price cadence
            and HOA landscape; {siteContact.businessName} can help you weigh tradeoffs (views vs. newer
            build vs. commute shoulder) without the generic valley-wide noise.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-stone-900">Schools and daily life</h2>
          <p className="mt-3 text-stone-700">
            School assignments and attendance boundaries change; confirm directly with Clark County
            School District and your chosen school before you offer. For daily errands, northwest Las
            Vegas has grown its grocery, fitness, and medical options along major corridors—your “five
            minute life” depends on the exact pocket you choose inside 89129.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-stone-900">Open houses and showings</h2>
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

          <div className="mt-12 rounded-lg border border-stone-200 bg-stone-50 p-6">
            <p className="font-medium text-stone-900">Work with {siteContact.businessName}</p>
            <p className="mt-2 text-sm text-stone-700">
              {siteContact.legalBrokerage} · Nevada license {siteContact.license}
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
        </div>
      </article>

      <LifeNearSection
        defaultFilter="grocery"
        compact
        heading="What's nearby in 89129"
        intro="Groceries, parks, and medical access from Lone Mountain pockets—filter the map, then open the full amenities guide for commute FAQs."
      />
    </main>
  );
}
