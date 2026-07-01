"use client";

import Link from "next/link";
import { useState } from "react";
import { siteContact } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/neighborhoods/lone-mountain", label: "Lone Mountain" },
  { href: "/amenities", label: "Amenities" },
  { href: "/open-houses", label: "Open houses" },
  { href: "/area-photography", label: "Area photos" },
  { href: "/search", label: "Homes for sale" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          {siteContact.siteName}
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-stone-300 px-3 py-2 text-sm font-medium text-stone-800 shadow-sm hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close menu" : "Menu"}
        </button>
        <nav
          id="site-nav"
          className={cn(
            "absolute left-0 right-0 top-full border-b border-stone-200 bg-white px-4 py-3 md:static md:flex md:border-0 md:bg-transparent md:p-0",
            open ? "block" : "hidden md:flex",
          )}
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-1 text-stone-700 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${siteContact.phoneE164}`}
                className="block rounded-md px-2 py-1 font-medium text-amber-900 hover:text-amber-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
              >
                Call {siteContact.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
