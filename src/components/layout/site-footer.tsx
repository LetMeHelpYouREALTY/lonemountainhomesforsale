import Link from "next/link";
import { siteContact } from "@/lib/site-contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-base font-semibold text-stone-900">{siteContact.siteName}</p>
            <p className="mt-2 text-sm text-stone-600">{siteContact.primaryArea}</p>
            <p className="mt-4 text-sm text-stone-700">
              {siteContact.businessName}, {siteContact.legalBrokerage}
            </p>
            <p className="text-sm text-stone-600">License {siteContact.license}</p>
            <nav className="mt-4 text-sm" aria-label="Explore Lone Mountain">
              <p className="font-medium text-stone-900">Explore</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/neighborhoods/lone-mountain"
                    className="text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    Lone Mountain 89129 guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amenities"
                    className="text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    Amenities &amp; maps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/zip-codes/89129"
                    className="text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    ZIP 89129 guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/open-houses"
                    className="text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    Open houses map
                  </Link>
                </li>
                <li>
                  <Link
                    href="/search"
                    className="text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    Homes for sale near Lone Mountain
                  </Link>
                </li>
                <li>
                  <Link
                    href="/area-photography"
                    className="text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  >
                    Area photography
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-sm text-stone-700">
            <p className="font-medium text-stone-900">Office</p>
            <p className="mt-2">
              {siteContact.streetAddress}
              <br />
              {siteContact.addressLocality}, {siteContact.addressRegion} {siteContact.postalCode}
            </p>
            <p className="mt-3">
              <a
                href={`tel:${siteContact.phoneE164}`}
                className="font-medium text-amber-900 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                {siteContact.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">
              <a
                href={`mailto:${siteContact.email}`}
                className="underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                {siteContact.email}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={siteContact.googleDirectionsUrl}
                className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                Directions
              </a>
              <a
                href={siteContact.googleMapsPlaceUrl}
                className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                View on Google Maps
              </a>
              <Link
                href="/contact"
                className="rounded-md border border-stone-300 bg-white px-3 py-2 text-sm font-medium text-stone-800 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-stone-500">
          MLS listing data is displayed via third-party search tools. Availability, price, and status
          should be verified with {siteContact.businessName}.
        </p>
      </div>
    </footer>
  );
}
