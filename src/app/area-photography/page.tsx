import type { Metadata } from "next";
import Link from "next/link";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain 89129 & NW Las Vegas Area Photography",
  description: `On-the-ground photos around Lone Mountain, Las Vegas ZIP 89129, ridge views, and northwest corridors—context before you tour homes with ${siteContact.businessName}.`,
  alternates: { canonical: "/area-photography" },
  robots: { index: true, follow: true },
};

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Area photography", path: "/area-photography" },
] as const;

export default function AreaPhotographyPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd data={breadcrumbJsonLd([...breadcrumbs])} />
      <section className="border-b border-stone-200 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Area photography" },
            ]}
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Area photography — Lone Mountain and northwest Las Vegas
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-stone-600">
            A visual sampler of Lone Mountain and northwest Las Vegas context—use it as inspiration, then
            tour real listings on the search page.
          </p>
          <div className="mt-8">
            <PhotoGallery />
          </div>
          <p className="mt-10 text-stone-700">
            Ready to see homes that match what you like?{" "}
            <Link
              href="/search"
              className="font-semibold text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
            >
              Browse homes for sale near Lone Mountain
            </Link>
            , read the{" "}
            <Link
              href="/neighborhoods/lone-mountain"
              className="font-semibold text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
            >
              Lone Mountain neighborhood guide
            </Link>
            , or call {siteContact.businessName} at{" "}
            <a
              href={`tel:${siteContact.phoneE164}`}
              className="font-semibold text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
            >
              {siteContact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
