import type { Metadata } from "next";
import Link from "next/link";
import { LocalCta } from "@/components/sections/local-cta";
import { PageBreadcrumbs } from "@/components/sections/page-breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { loneMountainSchools } from "@/lib/lone-mountain-local";
import { marketUpdateMeta } from "@/lib/market-update";
import { articleJsonLd, breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
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
    question: "Which elementary and middle schools are near Lone Mountain?",
    answer:
      "Dean LaMar Allen Elementary, Edmundo Escobedo Middle, and Justice Myron Leavitt Middle are frequently tied to Lone Mountain / northwest 89129 pockets. Assignments are address-specific—verify on CCSD tools before you offer.",
  },
  {
    question: "How do I verify school zones for a Lone Mountain listing?",
    answer: `Use CCSD’s official zoning tools and call the district to confirm before you write an offer. ${siteContact.businessName} can flag boundary questions during showings at ${siteContact.phoneDisplay}.`,
  },
] as const;

export default function LoneMountainSchoolsPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Schools", path: "/schools/lone-mountain" },
          ]),
          articleJsonLd({
            headline: "Lone Mountain schools (CCSD) — ZIP 89129 guide",
            description:
              "Clark County School District schools commonly associated with Lone Mountain Las Vegas 89129, with verification steps before you offer.",
            path: "/schools/lone-mountain",
            dateModified: marketUpdateMeta.asOfIso,
          }),
          faqPageJsonLd([...schoolFaqs]),
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
        <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-800">
          CCSD · ZIP 89129 · Updated {marketUpdateMeta.asOfLabel}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Lone Mountain schools (CCSD)
        </h1>
        <p className="mt-4 text-lg text-stone-700">
          Buyers in <strong>ZIP 89129</strong> often ask which Clark County School District campuses
          serve a given address. The list below names schools frequently tied to the Lone Mountain
          corridor—always verify for your specific parcel before you offer.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          What high school serves Lone Mountain 89129?
        </h2>
        <p className="mt-3 text-stone-700">
          <strong>Centennial High School</strong> is commonly associated with northwest Lone
          Mountain pockets. Boundaries move—confirm the assigned high school for each listing with
          CCSD before you write an offer.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          Which elementary and middle schools are near Lone Mountain?
        </h2>
        <p className="mt-3 text-stone-700">
          Names frequently tied to this corridor include Dean LaMar Allen Elementary, Edmundo
          Escobedo Middle, and Justice Myron Leavitt Middle. Use the cards below as a starting
          checklist, not a guarantee of assignment.
        </p>

        <ul className="mt-8 space-y-4">
          {loneMountainSchools.map((s) => (
            <li key={s.name} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-800">
                {s.level}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-stone-900">{s.name}</h3>
              <p className="mt-2 text-sm text-stone-700">{s.note}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-stone-900">
          How do I verify school zones for a listing?
        </h2>
        <p className="mt-3 text-stone-700">
          Start with the official{" "}
          <a
            href="https://www.ccsd.net/"
            className="font-medium text-amber-800 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Clark County School District
          </a>{" "}
          zoning tools, then call the district or campus.{" "}
          {siteContact.businessName} can flag boundary questions during showings—call{" "}
          <a
            href={`tel:${siteContact.phoneE164}`}
            className="font-medium text-amber-800 underline"
          >
            {siteContact.phoneDisplay}
          </a>
          .
        </p>

        <div className="mt-10 space-y-8">
          {schoolFaqs.map((item) => (
            <article key={item.question}>
              <h2 className="text-lg font-semibold text-stone-900">{item.question}</h2>
              <p className="mt-2 text-stone-700">{item.answer}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-stone-600">
          Also see{" "}
          <Link href="/amenities" className="font-medium text-amber-800 underline">
            Lone Mountain amenities
          </Link>{" "}
          and the{" "}
          <Link href="/neighborhoods/lone-mountain" className="font-medium text-amber-800 underline">
            neighborhood guide
          </Link>
          .
        </p>

        <div className="mt-12">
          <LocalCta />
        </div>
      </article>
    </main>
  );
}
