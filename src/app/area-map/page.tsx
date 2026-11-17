import type { Metadata } from "next";
import Link from "next/link";
import { LifeNearSection } from "@/components/sections/life-near-section";
import { HyperlocalMapEmbed } from "@/components/sections/hyperlocal-map-embed";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { loneMountainAmenities, loneMountainPeakGeo } from "@/lib/lone-mountain-local";
import { breadcrumbJsonLd, loneMountainPlaceJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain Area Map | Parks, 215 & 89129",
  description: `Hyperlocal Google Maps for Lone Mountain Las Vegas parks, the summit trailhead, and CC-215 Exit 32—buyer orientation with ${siteContact.businessName}.`,
  alternates: { canonical: "/area-map" },
};

export default function AreaMapPage() {
  const featured = loneMountainAmenities.filter((a) =>
    ["lone-mountain-regional-park", "lone-mountain-summit", "craig-ranch-regional-park"].includes(
      a.slug,
    ),
  );

  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          loneMountainPlaceJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Area map", path: "/area-map" },
          ]),
        ]}
      />

      <article className="border-b border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Area map" }]} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Lone Mountain hyperlocal map hub
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-stone-700">
            Orient yourself around the Lone Mountain butte ({loneMountainPeakGeo.latitude}°N,{" "}
            {Math.abs(loneMountainPeakGeo.longitude)}°W), CC-215 Exit 32, and the parks buyers ask
            about most in ZIP <strong>89129</strong>.
          </p>
          <Link
            href="/amenities"
            className="mt-6 inline-flex text-sm font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          >
            Full amenities &amp; commute guide →
          </Link>
        </div>
      </article>

      <LifeNearSection defaultFilter="parks" compact />

      <section className="mx-auto max-w-6xl space-y-12 px-4 py-14 sm:px-6">
        {featured.map((place) => (
          <div key={place.slug}>
            <h2 className="text-xl font-semibold text-stone-900">{place.name}</h2>
            <p className="mt-2 max-w-2xl text-sm text-stone-700">{place.description}</p>
            <div className="mt-4 max-w-3xl">
              <HyperlocalMapEmbed title={`Map of ${place.name}`} mapQuery={place.mapQuery} />
            </div>
          </div>
        ))}
        <LocalCta heading="Tour Lone Mountain with a local agent" />
      </section>
    </main>
  );
}
