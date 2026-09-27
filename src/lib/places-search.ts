import { amenitySearchRadiusMeters } from "@/lib/amenity-map-config";
import type { AmenityFilterId } from "@/lib/amenity-map-config";

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

function readDisplayName(value: unknown): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "text" in value) {
    return String((value as { text: string }).text);
  }
  return "Place";
}

function readLatLng(location: google.maps.LatLng | null | undefined): { lat: number; lng: number } | null {
  if (!location) return null;
  if (typeof location.lat === "function") {
    return { lat: location.lat(), lng: location.lng() };
  }
  const json = location.toJSON?.();
  if (json && typeof json.lat === "number" && typeof json.lng === "number") {
    return { lat: json.lat, lng: json.lng };
  }
  return null;
}

const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityFilterId,
  types: string[],
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI", "id"],
        locationRestriction: { center, radius: amenitySearchRadiusMeters },
        includedPrimaryTypes: types,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as google.maps.places.SearchNearbyRankPreference & string,
      });
      return places.map((place, index) => {
        const coords = readLatLng(place.location ?? undefined);
        return {
          id: place.id ?? `place-${categoryId}-${index}`,
          name: readDisplayName(place.displayName),
          address: place.formattedAddress ?? undefined,
          lat: coords?.lat ?? center.lat,
          lng: coords?.lng ?? center.lng,
          mapsUri: place.googleMapsURI ?? undefined,
        };
      });
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
