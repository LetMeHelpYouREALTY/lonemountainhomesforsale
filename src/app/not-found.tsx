import Link from "next/link";
import { siteContact } from "@/lib/site-contact";

const linkClass =
  "font-medium text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700 hover:decoration-amber-700";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto flex flex-1 max-w-lg flex-col items-center justify-center px-4 py-24 text-center"
    >
      <h1 className="text-2xl font-semibold text-stone-900">Page not found</h1>
      <p className="mt-2 text-stone-600">That URL may be outdated or mistyped.</p>
      <p className="mt-4 text-sm text-stone-600">
        Try{" "}
        <Link href="/search" className={linkClass}>
          homes for sale
        </Link>
        ,{" "}
        <Link href="/tour" className={linkClass}>
          schedule a tour
        </Link>
        , or{" "}
        <Link href="/open-houses" className={linkClass}>
          open houses
        </Link>
        .
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
      >
        Back to home
      </Link>
      <p className="mt-6 text-sm text-stone-600">
        <a href={`tel:${siteContact.phoneE164}`} className={linkClass}>
          {siteContact.phoneDisplay}
        </a>
        <span className="mx-2 text-stone-400" aria-hidden>
          ·
        </span>
        <a href={`mailto:${siteContact.email}`} className={linkClass}>
          {siteContact.email}
        </a>
      </p>
    </main>
  );
}
