import type { Metadata } from "next";
import Link from "next/link";
import { AmenityGrid } from "@/components/sections/hyperlocal-grids";
import { HyperlocalMapEmbed } from "@/components/sections/hyperlocal-map-embed";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  commuteCorridors,
  loneMountainAmenities,
  loneMountainSchools,
  loneMountainZipCodes,
} from "@/lib/lone-mountain-local";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  itemListJsonLd,
  loneMountainPlaceJsonLd,
} from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain Amenities, Parks & Maps | Las Vegas 89129",
  description: `Parks, trails, shopping, and commute corridors near Lone Mountain Las Vegas (ZIP 89129)—hyperlocal maps for buyers working with ${siteContact.businessName}.`,
  alternates: { canonical: "/amenities" },
};

const amenitiesFaqs = [
  {
    question: "What parks are near Lone Mountain Las Vegas?",
    answer:
      "Lone Mountain Regional Park, Lone Mountain Discovery Park, Mountain Crest Park, and Craig Ranch Regional Park are common recreation anchors for 89129 residents—each offers different trails, sports, or event space.",
  },
  {
    question: "How do I access the 215 beltway from Lone Mountain?",
    answer:
      "CC-215 Exit 32 at Lone Mountain Road provides direct beltway access near Lone Mountain Regional Park, linking northwest Las Vegas to Centennial Hills, Skye Canyon, and the Centennial Bowl interchange with I-11/US-95.",
  },
  {
    question: "Which ZIP codes overlap the Lone Mountain area?",
    answer:
      "89129 is the primary Lone Mountain residential ZIP; buyers also compare 89128, 89149, and 89134 depending on pocket, school assignment, and commute.",
  },
];

export default function AmenitiesPage() {
  const parks = loneMountainAmenities.filter((a) => a.category === "park" || a.category === "landmark");
  const shopping = loneMountainAmenities.filter((a) => a.category === "shopping");
  const communities = loneMountainAmenities.filter((a) => a.category === "community");

  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          loneMountainPlaceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Amenities", path: "/amenities" },
          ]),
          itemListJsonLd(
            "Lone Mountain amenities",
            loneMountainAmenities.map((a) => ({
              name: a.name,
              description: a.description,
            })),
          ),
          faqPageJsonLd(amenitiesFaqs),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Lone Mountain amenities" },
            ]}
          />
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
            Hyperlocal · ZIP 89129 · Northwest Las Vegas
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Lone Mountain amenities, parks &amp; daily life
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone-700">
            Buyers searching “Lone Mountain Las Vegas homes” usually care about more than square
            footage—they want parks, beltway access, and errands within a short drive. This guide
            maps the recreation, retail, and commute corridors around the{" "}
            <strong>Lone Mountain butte</strong> and <strong>ZIP 89129</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/area-map"
              className="inline-flex rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              View hyperlocal map hub
            </Link>
            <Link
              href="/schools/lone-mountain"
              className="inline-flex rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Schools guide
            </Link>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">Parks, trails &amp; the Lone Mountain peak</h2>
        <p className="mt-3 max-w-3xl text-stone-700">
          The namesake butte rises about 560 feet above the northwest valley with a multi-mile
          perimeter trail for hiking, jogging, and horseback riding—views stretch toward the Spring
          Mountains and the wider Las Vegas basin.
        </p>
        <div className="mt-8">
          <AmenityGrid amenities={parks} showMaps />
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">Shopping &amp; errands</h2>
          <p className="mt-3 max-w-3xl text-stone-700">
            Grocery-anchored centers along Craig Road and the Centennial Parkway corridor keep daily
            errands inside northwest Las Vegas without a Summerlin detour.
          </p>
          <div className="mt-8">
            <AmenityGrid amenities={shopping} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">Nearby communities buyers compare</h2>
        <p className="mt-3 max-w-3xl text-stone-700">
          Lone Mountain sits between established northwest pockets and newer master-planned growth—
          {siteContact.businessName} helps you weigh Skye Canyon new build vs. mature 89129 lots.
        </p>
        <div className="mt-8">
          <AmenityGrid amenities={communities} />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">Commute corridors</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {commuteCorridors.map((c) => (
              <li key={c.name} className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                <h3 className="font-semibold text-stone-900">{c.name}</h3>
                <p className="mt-2 text-sm text-stone-700">{c.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <HyperlocalMapEmbed
              title="CC-215 Exit 32 Lone Mountain Road area map"
              mapQuery="CC-215 Exit 32 Lone Mountain Road Las Vegas NV"
              zoom={13}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">ZIP codes in the Lone Mountain search radius</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {loneMountainZipCodes.map((z) => (
              <li key={z.zip} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-amber-800">{z.zip}</p>
                <h3 className="mt-1 font-semibold text-stone-900">{z.label}</h3>
                <p className="mt-2 text-sm text-stone-700">{z.description}</p>
                <Link
                  href={z.href}
                  className="mt-3 inline-block text-sm font-medium text-amber-900 underline-offset-2 hover:underline"
                >
                  {z.primary ? "89129 homes guide →" : "Search homes →"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold text-stone-900">Schools snapshot</h2>
        <p className="mt-3 max-w-3xl text-sm text-stone-600">
          CCSD boundaries change—confirm assignments for each address before you offer. Full detail on
          the{" "}
          <Link href="/schools/lone-mountain" className="font-medium text-amber-800 underline">
            Lone Mountain schools page
          </Link>
          .
        </p>
        <ul className="mt-6 space-y-3">
          {loneMountainSchools.map((s) => (
            <li key={s.name} className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm">
              <span className="font-medium text-stone-900">{s.level}:</span> {s.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-stone-200 bg-stone-100/80 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-900">Amenities FAQ</h2>
          <div className="mt-8 space-y-8">
            {amenitiesFaqs.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-semibold text-stone-900">{item.question}</h3>
                <p className="mt-2 text-stone-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <LocalCta />
      </section>
    </main>
  );
}
