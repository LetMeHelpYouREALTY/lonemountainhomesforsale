import Link from "next/link";
import { RealScoutOfficeListings } from "@/components/realscout/office-listings";
import { siteContact } from "@/lib/site-contact";

type HeroListingsBandProps = {
  heading?: string;
  intro?: string;
};

export function HeroListingsBand({
  heading = "Lone Mountain & 89129 homes for sale now",
  intro = `Live MLS inventory from Dr. Jan Duffy’s office—newest updates first. Confirm HOA, schools, and condition on every address before you offer.`,
}: HeroListingsBandProps) {
  return (
    <section
      className="border-b border-stone-200 bg-white py-12 sm:py-14"
      aria-labelledby="hero-listings-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="hero-listings-heading" className="text-2xl font-semibold tracking-tight text-stone-900">
          {heading}
        </h2>
        <p className="mt-3 max-w-3xl text-stone-700">{intro}</p>
        <p className="mt-2 text-xs text-stone-500">
          Listing data is deemed reliable but not guaranteed. © {new Date().getFullYear()} GLVAR.{" "}
          {siteContact.businessName}, {siteContact.legalBrokerage}, License {siteContact.license}.
        </p>
        <div className="mt-6 min-h-[320px] rounded-xl border border-stone-200 bg-stone-50 p-4 shadow-sm">
          <RealScoutOfficeListings />
        </div>
        <Link
          href="/search"
          className="mt-4 inline-block text-sm font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
        >
          Full-screen MLS search →
        </Link>
      </div>
    </section>
  );
}