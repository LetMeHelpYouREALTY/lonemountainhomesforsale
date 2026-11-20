import Link from "next/link";
import { calendlyUrl } from "@/lib/calendly";
import { siteContact } from "@/lib/site-contact";

type LocalCtaProps = {
  heading?: string;
  body?: string;
};

export function LocalCta({
  heading = `Work with ${siteContact.businessName}`,
  body = `Licensed since 2008 · hyperlocal focus on Lone Mountain & ZIP 89129`,
}: LocalCtaProps) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-6 sm:p-8">
      <p className="text-lg font-semibold text-stone-900">{heading}</p>
      <p className="mt-2 text-sm text-stone-700">{body}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={`tel:${siteContact.phoneE164}`}
          className="inline-flex rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Call {siteContact.phoneDisplay}
        </a>
        <a
          href={calendlyUrl("showing", "local-cta")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Book on Calendly
          <span className="sr-only"> (opens Calendly in a new tab)</span>
        </a>
        <Link
          href="/search"
          className="inline-flex rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Search 89129 homes
        </Link>
      </div>
    </div>
  );
}
