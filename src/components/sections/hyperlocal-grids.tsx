import Link from "next/link";
import type { LocalPlace } from "@/lib/lone-mountain-local";
import { HyperlocalMapEmbed } from "@/components/sections/hyperlocal-map-embed";

type AmenityGridProps = {
  amenities: LocalPlace[];
  showMaps?: boolean;
};

const categoryLabel: Record<LocalPlace["category"], string> = {
  park: "Parks & trails",
  shopping: "Shopping & errands",
  corridor: "Commute corridors",
  landmark: "Landmarks",
  community: "Nearby communities",
};

export function AmenityGrid({ amenities, showMaps = false }: AmenityGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {amenities.map((place) => (
        <li
          key={place.slug}
          className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
            {categoryLabel[place.category]}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-stone-900">{place.name}</h3>
          {place.address ? (
            <p className="mt-1 text-sm text-stone-600">
              {place.address}
              {place.zip ? ` · ${place.zip}` : ""}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-stone-700">{place.description}</p>
          {showMaps ? (
            <div className="mt-4">
              <HyperlocalMapEmbed
                title={`Map of ${place.name}`}
                mapQuery={place.mapQuery}
                zoom={place.category === "landmark" ? 15 : 14}
              />
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

type ServicesGridProps = {
  services: {
    title: string;
    shortDescription: string;
    href: string;
    highlights: string[];
  }[];
};

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {services.map((service) => (
        <li
          key={service.href}
          className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-stone-900">{service.title}</h3>
          <p className="mt-2 text-sm text-stone-700">{service.shortDescription}</p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-stone-600">
            {service.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-amber-700" aria-hidden="true">
                  •
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Link
            href={service.href}
            className="mt-6 inline-flex w-fit rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
          >
            Learn more
          </Link>
        </li>
      ))}
    </ul>
  );
}
