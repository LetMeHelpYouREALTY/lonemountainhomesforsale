import type { Metadata } from "next";
import Link from "next/link";
import { OpenHousesMapBlock } from "@/components/sections/open-houses-map-block";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Open Houses Near Lone Mountain & ZIP 89129 | Las Vegas NW",
  description: `Weekend open houses around Lone Mountain, Las Vegas 89129, Skye Canyon, and Centennial Hills—map, legend, and private tours with ${siteContact.businessName}. Call ${siteContact.phoneDisplay}.`,
  alternates: { canonical: "/open-houses" },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Open houses", path: "/open-houses" },
] as const;

export default function OpenHousesPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd data={breadcrumbJsonLd([...breadcrumbs])} />
      <section className="border-b border-stone-200 bg-stone-50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Open houses" },
            ]}
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Open houses near Lone Mountain (89129) and northwest Las Vegas
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-stone-700">
            Pin drops cover the Lone Mountain core, pockets toward{" "}
            <Link
              href="/neighborhoods/lone-mountain"
              className="font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
            >
              ZIP 89129
            </Link>
            , and nearby northwest corridors buyers often compare (Skye Canyon, Centennial Hills). Tap a
            pin for times and notes—then confirm with {siteContact.businessName} before you drive.
          </p>
          <p className="mt-3 max-w-3xl text-stone-700">
            Need a private slot instead? Call{" "}
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="font-medium text-amber-800 underline decoration-amber-700/30 underline-offset-2 hover:text-amber-700"
            >
              {siteContact.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${siteContact.email}`}
              className="font-medium text-amber-800 underline decoration-amber-700/30 underline-offset-2 hover:text-amber-700"
            >
              {siteContact.email}
            </a>
            .
          </p>

          <div className="mt-8">
            <OpenHousesMapBlock />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Search Lone Mountain MLS listings
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
            >
              Contact {siteContact.businessName}
            </Link>
          </div>

          <p className="mt-6 text-xs text-stone-500">
            Map hosted on Google My Maps; dates and homes subject to change—confirm with{" "}
            {siteContact.businessName} before you go. MLS details may differ; verify material facts with
            your agent.
          </p>
        </div>
      </section>
    </main>
  );
}
