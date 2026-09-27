import type { Metadata } from "next";
import { LifeNearSection } from "@/components/sections/life-near-section";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { RealScoutOfficeListings } from "@/components/realscout/office-listings";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Homes for Sale | Lone Mountain 89129 & Northwest Las Vegas MLS",
  description: `MLS search skewed to Lone Mountain, ZIP 89129, Skye Canyon, and Centennial Hills with ${siteContact.businessName}. Live data from third-party search—verify price, HOA, and schools before you offer.`,
  alternates: { canonical: "/search" },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Homes for sale", path: "/search" },
] as const;

export default function SearchPage() {
  return (
    <main id="main-content" className="mx-auto flex-1 w-full max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd data={breadcrumbJsonLd([...breadcrumbs])} />
      <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Homes for sale" }]} />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
        Homes for sale near Lone Mountain
      </h1>
      <p className="mt-3 max-w-3xl text-stone-600">
        Use the live search below to explore listings. For a curated shortlist around Lone Mountain,
        Centennial Hills, or Skye Canyon, call {siteContact.phoneDisplay}.
      </p>
      <p className="mt-4 text-sm text-stone-500">
        Data displayed through third-party search is deemed reliable but not guaranteed. Confirm all
        material facts, HOA fees, taxes, and availability with {siteContact.businessName}.
      </p>
      <div className="mt-8 min-h-[480px] rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
        <RealScoutOfficeListings />
      </div>

      <div className="mt-16">
        <LifeNearSection
          defaultFilter="shopping"
          compact
          heading="Shop and run errands near your search area"
          intro="Before you write an offer, map grocery, parks, and schools around Lone Mountain ZIP 89129."
        />
      </div>
    </main>
  );
}
