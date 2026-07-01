import type { Metadata } from "next";
import Link from "next/link";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { loneMountainSchools } from "@/lib/lone-mountain-local";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { siteContact } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Lone Mountain Schools | CCSD & ZIP 89129",
  description: `Clark County School District schools serving Lone Mountain Las Vegas (89129)—verify boundaries with ${siteContact.businessName} before you offer.`,
  alternates: { canonical: "/schools/lone-mountain" },
};

const schoolFaqs = [
  {
    question: "What high school serves Lone Mountain 89129?",
    answer:
      "Centennial High School is commonly associated with northwest Lone Mountain pockets, but CCSD boundaries shift—confirm the assigned school for each listing address.",
  },
  {
    question: "How do I verify school zones for a Lone Mountain listing?",
    answer:
      "Use CCSD’s official zoning tools and call the district to confirm before you write an offer. Dr. Jan Duffy can flag boundary questions during showings.",
  },
];

export default function LoneMountainSchoolsPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Schools", path: "/schools/lone-mountain" },
          ]),
          faqPageJsonLd(schoolFaqs),
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <PageBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Amenities", href: "/amenities" },
            { label: "Schools" },
          ]}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Lone Mountain schools (CCSD)
        </h1>
        <p className="mt-4 text-lg text-stone-700">
          Families buying in <strong>ZIP 89129</strong> often ask about Clark County School District
          assignments. The list below reflects schools frequently tied to the Lone Mountain area—
          always verify for your specific address.
        </p>

        <ul className="mt-10 space-y-4">
          {loneMountainSchools.map((s) => (
            <li key={s.name} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                {s.level}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-stone-900">{s.name}</h2>
              <p className="mt-2 text-sm text-stone-700">{s.note}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-stone-600">
          Official source:{" "}
          <a
            href="https://www.ccsd.net/"
            className="font-medium text-amber-800 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Clark County School District
          </a>
        </p>

        <div className="mt-10 space-y-8">
          {schoolFaqs.map((item) => (
            <article key={item.question}>
              <h2 className="text-lg font-semibold text-stone-900">{item.question}</h2>
              <p className="mt-2 text-stone-700">{item.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <LocalCta />
        </div>
      </article>
    </main>
  );
}
