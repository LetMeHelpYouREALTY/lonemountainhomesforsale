import Link from "next/link";
import { NearbyAmenityMap } from "@/components/sections/nearby-amenity-map";
import { loneMountainCommunityCenter } from "@/lib/amenity-map-config";
import type { AmenityFilterId } from "@/lib/amenity-map-config";

type LifeNearSectionProps = {
  defaultFilter?: AmenityFilterId;
  compact?: boolean;
  heading?: string;
  intro?: string;
};

export function LifeNearSection({
  defaultFilter = "parks",
  compact = false,
  heading = `Life near ${loneMountainCommunityCenter.name}`,
  intro,
}: LifeNearSectionProps) {
  const defaultIntro =
    `Parks, groceries, schools, and medical care within a short drive of ZIP ${loneMountainCommunityCenter.postalCode}. ` +
    "Switch categories on the map, then open the full amenities guide for commute notes and FAQs.";

  return (
    <section
      className="border-y border-stone-200 bg-white py-12 sm:py-14"
      aria-labelledby="life-near-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="life-near-heading" className="text-2xl font-semibold tracking-tight text-stone-900">
          {heading}
        </h2>
        <p className="mt-3 max-w-3xl text-stone-700">{intro ?? defaultIntro}</p>
        <div className="mt-8">
          <NearbyAmenityMap defaultFilter={defaultFilter} compact={compact} />
        </div>
        <Link
          href="/amenities"
          className="mt-6 inline-flex text-sm font-semibold text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Nearby amenities guide — maps, commute &amp; FAQ →
        </Link>
      </div>
    </section>
  );
}
