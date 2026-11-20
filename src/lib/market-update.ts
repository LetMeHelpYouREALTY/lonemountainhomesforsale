/**
 * Lone Mountain / 89129 market snapshot — refresh monthly.
 * Never invent figures: every number needs a dated public source.
 * As of: November 2026 (America/Los_Angeles).
 */

export const marketUpdateMeta = {
  /** Display + schema dateModified */
  asOfLabel: "November 20, 2026",
  asOfIso: "2026-11-20",
  title: "Lone Mountain & 89129 Market Update",
  path: "/market-update",
} as const;

export type MarketStat = {
  label: string;
  value: string;
  detail: string;
  sourceName: string;
  sourceUrl: string;
};

/** Sourced stats only — geography labels differ by vendor (neighborhood vs ZIP). */
export const marketStats: MarketStat[] = [
  {
    label: "Lone Mountain median sale price",
    value: "$421,298",
    detail:
      "Trailing three months ending October 2026 for the Redfin Lone Mountain neighborhood geography (+6.7% vs. the same period a year earlier).",
    sourceName: "Redfin Lone Mountain housing market",
    sourceUrl:
      "https://www.redfin.com/neighborhood/497746/NV/Las-Vegas/Lone-Mountain/housing-market",
  },
  {
    label: "Lone Mountain median days on market",
    value: "50 days",
    detail:
      "Trailing three months ending October 2026 (7 days faster than the prior-year period on Redfin’s neighborhood series).",
    sourceName: "Redfin Lone Mountain housing market",
    sourceUrl:
      "https://www.redfin.com/neighborhood/497746/NV/Las-Vegas/Lone-Mountain/housing-market",
  },
  {
    label: "Lone Mountain homes sold (October)",
    value: "40 closings",
    detail: "October 2026 closings in Redfin’s Lone Mountain neighborhood series (−18% vs. October prior year).",
    sourceName: "Redfin Lone Mountain housing market",
    sourceUrl:
      "https://www.redfin.com/neighborhood/497746/NV/Las-Vegas/Lone-Mountain/housing-market",
  },
  {
    label: "ZIP 89129 median list price",
    value: "$550,000",
    detail:
      "Current median list price for ZIP 89129 on a GLVAR/IDX-backed market report (checked mid-November 2026). List ≠ sold.",
    sourceName: "NREG 89129 market report",
    sourceUrl: "https://www.nevadarealestategroup.com/market-report/89129/",
  },
  {
    label: "ZIP 89129 median days on market",
    value: "28 days",
    detail: "Last 90 days median DOM for ZIP 89129 on the same IDX-backed report (mid-November 2026).",
    sourceName: "NREG 89129 market report",
    sourceUrl: "https://www.nevadarealestategroup.com/market-report/89129/",
  },
  {
    label: "ZIP 89129 months of inventory",
    value: "~8 months",
    detail:
      "Roughly eight months of inventory on the mid-November 2026 89129 report—conditions can favor negotiated offers; verify live MLS before you plan strategy.",
    sourceName: "NREG 89129 market report",
    sourceUrl: "https://www.nevadarealestategroup.com/market-report/89129/",
  },
];

export const marketFaqs = [
  {
    question: "What is the median home price in Lone Mountain Las Vegas right now?",
    answer:
      "As of the three months ending October 2026, Redfin reported a $421,298 median sale price for its Lone Mountain neighborhood geography (+6.7% year over year). ZIP 89129 list prices can run higher—mid-November 2026 median list on one IDX report was $550,000. Confirm live MLS comps with Dr. Jan Duffy before you offer.",
  },
  {
    question: "Is Lone Mountain a buyer’s or seller’s market in 2026?",
    answer:
      "Public ZIP 89129 inventory around eight months (mid-November 2026 IDX report) and 50-day neighborhood median DOM (Redfin, three months ending October 2026) point to more room to negotiate than a tight seller’s market—but pocket and price band still matter. Ask for a fresh CMA on your target streets.",
  },
  {
    question: "Where should I search live Lone Mountain inventory?",
    answer:
      "Use the Homes for sale page on lonemountainhomesforsale.com for live MLS tools, check the open-houses map for weekend pins, or call (702) 500-1942 for a curated shortlist matched to budget and commute.",
  },
] as const;

/** Pocket comparison — qualitative / infrastructure facts only (fair-housing safe). */
export const pocketComparison = [
  {
    pocket: "Lone Mountain / 89129",
    housingMix: "Established subdivisions + view lots toward the butte",
    beltway: "CC-215 Exit 32 (Lone Mountain Rd)",
    recreation: "Lone Mountain Regional Park & perimeter trail",
    typicalBuyerFocus: "Lot size, views, northwest commute",
  },
  {
    pocket: "Skye Canyon / NW growth",
    housingMix: "Newer master-planned builds; often compared with 89149",
    beltway: "Northwest 215 corridor access",
    recreation: "Community amenities + nearby regional parks",
    typicalBuyerFocus: "Newer construction, HOA packages",
  },
  {
    pocket: "Centennial Hills",
    housingMix: "Varied housing stock along the 215 medical/retail corridor",
    beltway: "Direct 215 / Centennial Parkway access",
    recreation: "Corridor parks + Centennial retail",
    typicalBuyerFocus: "Medical/retail proximity, varied price bands",
  },
] as const;
