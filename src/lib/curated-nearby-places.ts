import type { AmenityFilterId } from "@/lib/amenity-map-config";

export type SchemaPlaceType =
  | "Park"
  | "Restaurant"
  | "CafeOrCoffeeShop"
  | "GroceryStore"
  | "GolfCourse"
  | "Hospital"
  | "Pharmacy"
  | "ShoppingCenter"
  | "School"
  | "ExerciseGym"
  | "Place";

export type CuratedNearbyPlace = {
  id: string;
  name: string;
  filters: AmenityFilterId[];
  schemaType: SchemaPlaceType;
  /** Verified street address only — omit when not confirmed from sourceUrl */
  address?: string;
  locality: string;
  region: string;
  postalCode?: string;
  description: string;
  sourceUrl: string;
  geo?: { latitude: number; longitude: number };
};

/** Verified names & addresses for static HTML, fallback lists, and JSON-LD only */
export const curatedNearbyPlaces: CuratedNearbyPlace[] = [
  {
    id: "lone-mountain-discovery-park",
    name: "Lone Mountain Discovery Park",
    filters: ["parks"],
    schemaType: "Park",
    address: "4445 N Jensen St",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89129",
    sourceUrl:
      "https://www.clarkcountynv.gov/government/departments/parks___recreation/services/area_reservations/",
    description:
      "Clark County park with dog areas, courts, and trail access around the Lone Mountain butte—everyday recreation for 89129 buyers.",
    geo: { latitude: 36.23932, longitude: -115.30911 },
  },
  {
    id: "mountain-crest-park",
    name: "Mountain Crest Park",
    filters: ["parks", "fitness"],
    schemaType: "Park",
    address: "4701 N Durango Dr",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89129",
    sourceUrl: "https://parkslocator.clarkcountynv.gov/Search/ParkDetail?parkId=29",
    description:
      "Clark County neighborhood park with a walking loop, disc golf, splash pad, and community center near Lone Mountain pockets.",
  },
  {
    id: "craig-ranch-regional-park",
    name: "Craig Ranch Regional Park",
    filters: ["parks"],
    schemaType: "Park",
    address: "628 W Craig Rd",
    locality: "North Las Vegas",
    region: "NV",
    postalCode: "89032",
    sourceUrl:
      "https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/parks/craig-ranch-regional-park",
    description:
      "170-acre City of North Las Vegas regional park along Craig Road with fields, splash pad, and amphitheater—common weekend stop from northwest 89129.",
  },
  {
    id: "smiths-craig",
    name: "Smith's Food and Drug",
    filters: ["grocery", "pharmacies"],
    schemaType: "GroceryStore",
    address: "3013 W Craig Rd",
    locality: "North Las Vegas",
    region: "NV",
    postalCode: "89032",
    sourceUrl: "https://www.smithsfoodanddrug.com/stores/grocery/nv/north-las-vegas/craig-road/687/68754",
    description:
      "Full-service Smith's grocery with pharmacy on Craig Road—common errand run from Lone Mountain and the 215 northwest corridor.",
  },
  {
    id: "centennial-hills-hospital",
    name: "Centennial Hills Hospital Medical Center",
    filters: ["healthcare"],
    schemaType: "Hospital",
    address: "6900 N Durango Dr",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89149",
    sourceUrl: "https://www.centennialhillshospital.com/about",
    description:
      "Acute-care hospital serving northwest Las Vegas—buyers often confirm emergency and specialist access from their block.",
  },
  {
    id: "dean-lamar-allen",
    name: "Dean LaMar Allen Elementary School",
    filters: ["schools"],
    schemaType: "School",
    address: "8680 W Hammer Ln",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89149",
    sourceUrl: "https://deanlamarallenes.ccsd.net/staff-directory",
    description:
      "CCSD elementary school serving parts of northwest Las Vegas—verify assignment for each listing address with the CCSD Zoning Search.",
  },
  {
    id: "centennial-high",
    name: "Centennial High School",
    filters: ["schools"],
    schemaType: "School",
    address: "10200 Centennial Pkwy",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89149",
    sourceUrl: "https://www.centennialhighschool.org/apps/contact/",
    description:
      "CCSD high school in the northwest valley—confirm which CCSD schools are assigned to each Lone Mountain address with the CCSD Zoning Search.",
  },
];

export function curatedPlacesForFilter(filter: AmenityFilterId): CuratedNearbyPlace[] {
  return curatedNearbyPlaces.filter((p) => p.filters.includes(filter));
}

export const amenitiesPageFaqs = [
  {
    question: "What grocery stores are near Lone Mountain Las Vegas?",
    answer:
      "Smith's Food and Drug on West Craig Road is a common grocery stop from ZIP 89129—drive time depends on your exact pocket near the butte or the 215.",
  },
  {
    question: "How far is Lone Mountain from the Las Vegas Strip?",
    answer:
      "From Lone Mountain Regional Park, a typical midday drive to the central Strip corridor is often roughly 25–35 minutes via US-95 and surface streets—traffic and your starting block can add or subtract time, so verify your own route.",
  },
  {
    question: "Are there hospitals near Lone Mountain?",
    answer:
      "Centennial Hills Hospital Medical Center on North Durango Drive serves northwest Las Vegas, including buyers comparing Lone Mountain, Centennial Hills, and Skye Canyon.",
  },
  {
    question: "What parks can I walk or hike near Lone Mountain?",
    answer:
      "Lone Mountain Discovery Park and Mountain Crest Park anchor daily recreation, with Craig Ranch Regional Park a short drive away for fields, splash pad, and events.",
  },
  {
    question: "How do I reach the 215 beltway from Lone Mountain?",
    answer:
      "CC-215 Exit 32 at Lone Mountain Road provides direct beltway access near Lone Mountain Regional Park, linking northwest Las Vegas toward Centennial Hills, Skye Canyon, and the Centennial Bowl interchange with I-11/US-95.",
  },
  {
    question: "How far is Harry Reid International Airport from Lone Mountain?",
    answer:
      "Airport drive times from northwest 89129 are commonly in the 30–45 minute range depending on traffic and whether you use US-95 and the 215—label any estimate approximate and test your commute.",
  },
  {
    question: "Which CCSD schools are assigned to Lone Mountain ZIP 89129 addresses?",
    answer:
      "Clark County School District boundaries shift by street, not ZIP alone. Dean LaMar Allen Elementary, Escobado or Leavitt middle schools, and Centennial High may serve parts of the area—confirm each listing address with the CCSD Zoning Search before you offer.",
  },
  {
    question: "Is Downtown Summerlin close to Lone Mountain?",
    answer:
      "Downtown Summerlin is west of US-95 from Lone Mountain; many buyers reach it in roughly 20–35 minutes by car when traffic is light—again, verify from your target neighborhood block.",
  },
] as const;

export const amenityCategoryWriteups: {
  id: AmenityFilterId | "commute";
  title: string;
  body: string;
}[] = [
  {
    id: "parks",
    title: "Parks & recreation",
    body:
      "The namesake Lone Mountain butte rises above northwest Las Vegas with a multi-mile perimeter trail. Clark County maintains Lone Mountain Discovery Park on Jensen Street, Mountain Crest Park on Durango Drive, and Craig Ranch Regional Park adds 170 acres of fields and events along Craig Road.",
  },
  {
    id: "restaurants",
    title: "Dining & cafes",
    body:
      "Restaurant and cafe options cluster along Craig Road, Ann Road, and the Centennial Parkway retail strips—chains, fast casual, and local spots within a practical drive from 89129. Use the map filters to browse current nearby listings, then confirm hours before you visit.",
  },
  {
    id: "grocery",
    title: "Grocery & errands",
    body:
      "Smith's on West Craig Road covers weekly groceries without a Summerlin detour. Pharmacy counters inside major grocers are common for northwest errands.",
  },
  {
    id: "golf",
    title: "Golf",
    body:
      "Public and resort courses spread across the northwest and Summerlin corridors; tee times and drive time vary by course and traffic. The interactive map surfaces golf facilities within a few miles of Lone Mountain when maps load successfully.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    body:
      "Centennial Hills Hospital Medical Center on North Durango Drive is the anchor acute-care facility many northwest buyers reference. Urgent care, imaging, and specialist offices also line Durango, Craig, and Ann—confirm in-network providers for your plan.",
  },
  {
    id: "shopping",
    title: "Shopping",
    body:
      "Craig Road and Centennial Parkway retail strips keep apparel, home goods, and services inside the northwest valley without a cross-town drive.",
  },
  {
    id: "schools",
    title: "Schools",
    body:
      "CCSD assigns schools by address, not ZIP alone. Which CCSD schools are assigned to Lone Mountain addresses? Verify with the CCSD Zoning Search for each home you tour—Dean LaMar Allen Elementary, Escobado or Leavitt middle schools, and Centennial High appear on many buyer checklists.",
  },
  {
    id: "commute",
    title: "Commute & key destinations",
    body:
      "CC-215 Exit 32 at Lone Mountain Road feeds the Bruce Woodbury Beltway toward Centennial Hills and Skye Canyon. US-95 / I-11 is the north–south spine toward downtown, Henderson, and Harry Reid International Airport. Strip and Downtown Summerlin drives are commonly 25–40 minutes depending on time of day—treat any estimate as approximate.",
  },
];
