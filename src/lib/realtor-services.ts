/** Hyperlocal realtor services for Lone Mountain / 89129 — used on service pages and schema. */

export type RealtorService = {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
  audience: "buyer" | "seller" | "both";
  highlights: string[];
};

export const realtorServices: RealtorService[] = [
  {
    slug: "buying",
    title: "Buy a Lone Mountain home",
    shortDescription:
      "Focused buyer representation in ZIP 89129 and northwest Las Vegas—curated tours, offer strategy, and hyperlocal pocket knowledge.",
    href: "/services/buying",
    audience: "buyer",
    highlights: [
      "MLS search narrowed to Lone Mountain, Skye Canyon, and Centennial Hills comparables",
      "Open-house routing map for efficient weekend tours",
      "School-boundary and commute checks before you write an offer",
      "Inspection and appraisal guidance from a northwest Las Vegas farm agent",
    ],
  },
  {
    slug: "selling",
    title: "Sell your Lone Mountain home",
    shortDescription:
      "Listing marketing that emphasizes views, lot size, and 215-beltway convenience—the details buyers search for in 89129.",
    href: "/services/selling",
    audience: "seller",
    highlights: [
      "Pricing against recent 89129 closed sales and active competition",
      "Photography-forward marketing with area context buyers expect",
      "Open-house promotion on the site’s Lone Mountain map",
      "Negotiation support aligned with Berkshire Hathaway HomeServices standards",
    ],
  },
  {
    slug: "relocation",
    title: "Relocate to Lone Mountain",
    shortDescription:
      "Out-of-state and corporate moves into northwest Las Vegas—virtual previews, timed visits, and neighborhood amenity briefings.",
    href: "/services/relocation",
    audience: "buyer",
    highlights: [
      "Video walk-throughs and targeted shortlists before you fly in",
      "Amenity and school orientation for 89129 micro-pockets",
      "Coordination with local lenders and inspectors on your timeline",
      "Post-close vendor introductions for northwest Las Vegas homeowners",
    ],
  },
  {
    slug: "market-analysis",
    title: "Lone Mountain market analysis",
    shortDescription:
      "Seller net sheets and buyer offer guidance grounded in current northwest Las Vegas comps—not valley-wide averages.",
    href: "/services/selling",
    audience: "both",
    highlights: [
      "CMA-style pricing for Lone Mountain and adjacent ZIP codes",
      "Explanation of rural-preservation and larger-lot pockets where applicable",
      "Investor-friendly rent vs. buy snapshots on request",
    ],
  },
  {
    slug: "open-houses",
    title: "Open house tours",
    shortDescription:
      "Weekend showings clustered around the live open-house map—confirm times before you drive the 215 corridor.",
    href: "/open-houses",
    audience: "buyer",
    highlights: [
      "Google My Map pins for 89129 and northwest Las Vegas",
      "On-site legend explaining pin colors",
      "Same-day texting for last-minute showing changes",
    ],
  },
  {
    slug: "consultation",
    title: "Free consultation",
    shortDescription:
      "15-minute call to align budget, timeline, and target pockets inside Lone Mountain and northwest Las Vegas.",
    href: "/contact",
    audience: "both",
    highlights: [
      "No obligation buyer or seller strategy session",
      "Direct line to Dr. Jan Duffy — not a call center",
      "Clear next steps whether you are 30 or 90 days from moving",
    ],
  },
];

export const servicesFaqs = [
  {
    question: "Does Dr. Jan Duffy only work Lone Mountain ZIP 89129?",
    answer:
      "The site is hyperfocused on Lone Mountain and northwest Las Vegas—especially 89129—but Dr. Jan Duffy also helps clients in adjacent northwest pockets such as Skye Canyon, Centennial Hills, and Summerlin when the commute and lifestyle fit your goals.",
  },
  {
    question: "What should I prepare before a Lone Mountain buyer consultation?",
    answer:
      "Bring a rough budget, preferred beds/baths, must-have amenities (pool, RV parking, single story), and your top two commute destinations. We will map realistic pockets inside 89129 and nearby ZIP codes.",
  },
  {
    question: "How are Lone Mountain listings marketed differently?",
    answer:
      "Listings highlight hyperlocal context—views toward Lone Mountain, 215 access, park proximity, and accurate school-boundary notes—so searchers and AI assistants can match your home to the right buyer profile.",
  },
] as const;
