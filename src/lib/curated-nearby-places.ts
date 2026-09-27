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
  address: string;
  locality: string;
  region: string;
  postalCode: string;
  description: string;
  geo?: { latitude: number; longitude: number };
};

/** Verified names & addresses for static HTML, fallback lists, and JSON-LD only */
export const curatedNearbyPlaces: CuratedNearbyPlace[] = [
  {
    id: "lone-mountain-regional-park",
    name: "Lone Mountain Regional Park",
    filters: ["parks"],
    schemaType: "Park",
    address: "4445 N Jensen St",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89129",
    description:
      "Clark County park with a multi-use base loop, tennis, basketball, and equestrian paths—everyday recreation for 89129 buyers.",
    geo: { latitude: 36.2389, longitude: -115.3145 },
  },
  {
    id: "lone-mountain-discovery-park",
    name: "Lone Mountain Discovery Park",
    filters: ["parks"],
    schemaType: "Park",
    address: "N Jensen St",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89129",
    description: "Trailhead access along Jensen Road for the perimeter route around Lone Mountain.",
    geo: { latitude: 36.23932, longitude: -115.30911 },
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
    description:
      "Large regional park along Lone Mountain Road with sports fields and community events—popular for northwest families.",
  },
  {
    id: "mountain-crest-park",
    name: "Mountain Crest Park",
    filters: ["parks"],
    schemaType: "Park",
    address: "6200 Brent Ln",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89130",
    description: "Northwest park with disc golf and open recreation space near Lone Mountain pockets.",
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
    description:
      "Full-service grocery with pharmacy on Craig Road—common errand run from Lone Mountain and the 215 northwest corridor.",
  },
  {
    id: "craig-marketplace",
    name: "Craig Marketplace",
    filters: ["shopping", "grocery"],
    schemaType: "ShoppingCenter",
    address: "Craig Rd & Camino Al Norte",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89129",
    description: "Retail and grocery-anchored center along Craig Road near beltway access.",
  },
  {
    id: "centennial-center",
    name: "Centennial Center",
    filters: ["shopping"],
    schemaType: "ShoppingCenter",
    address: "Centennial Pkwy",
    locality: "Las Vegas",
    region: "NV",
    postalCode: "89149",
    description: "Retail cluster along the Centennial Parkway / CC-215 northwest corridor.",
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
    postalCode: "89129",
    description: "CCSD elementary school serving parts of northwest 89129—verify assignment per listing.",
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
    description: "Large northwest high school; programs and athletics draw families to the corridor.",
  },
];

export function curatedPlacesForFilter(filter: AmenityFilterId): CuratedNearbyPlace[] {
  return curatedNearbyPlaces.filter((p) => p.filters.includes(filter));
}

export const amenitiesPageFaqs = [
  {
    question: "What grocery stores are near Lone Mountain Las Vegas?",
    answer:
      "Smith's Food and Drug on West Craig Road and grocery-anchored centers such as Craig Marketplace are common errand stops from ZIP 89129—drive time depends on your exact pocket near the butte or the 215.",
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
      "Lone Mountain Regional Park and Lone Mountain Discovery Park anchor daily recreation, with Craig Ranch Regional Park and Mountain Crest Park a short drive away for fields, events, or disc golf.",
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
    question: "Which schools serve Lone Mountain ZIP 89129?",
    answer:
      "Clark County School District boundaries shift—Dean LaMar Allen Elementary, Escobado or Leavitt middle schools, and Centennial High may serve parts of the area, but you must confirm the assignment for each listing address before you offer.",
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
      "The namesake Lone Mountain butte rises above northwest Las Vegas with a multi-mile perimeter trail. Clark County maintains Lone Mountain Regional Park and the Discovery Park trailhead on Jensen Street, while Craig Ranch Regional Park adds fields and events along Lone Mountain Road.",
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
      "Smith's on West Craig Road and centers such as Craig Marketplace cover weekly groceries without a Summerlin detour. Pharmacy counters inside major grocers are common for northwest errands.",
  },
  {
    id: "golf",
    title: "Golf",
    body:
      "Public and resort courses spread across the northwest and Summerlin corridors; tee times and drive time vary by course and traffic. The interactive map surfaces golf facilities within a few miles of Lone Mountain when the Google Maps key is configured.",
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
      "Craig Marketplace, Centennial Center, and power centers along the 215 beltway keep apparel, home goods, and services inside the northwest valley.",
  },
  {
    id: "schools",
    title: "Schools",
    body:
      "CCSD assigns schools by address, not ZIP alone. Dean LaMar Allen Elementary, Escobado or Leavitt middle schools, and Centennial High appear on many buyer checklists—verify boundaries on the district site for each home you tour.",
  },
  {
    id: "commute",
    title: "Commute & key destinations",
    body:
      "CC-215 Exit 32 at Lone Mountain Road feeds the Bruce Woodbury Beltway toward Centennial Hills and Skye Canyon. US-95 / I-11 is the north–south spine toward downtown, Henderson, and Harry Reid International Airport. Strip and Downtown Summerlin drives are commonly 25–40 minutes depending on time of day—treat any estimate as approximate.",
  },
];
