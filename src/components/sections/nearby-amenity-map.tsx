"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  amenityFilterLabels,
  amenityFilterOrder,
  amenitySearchRadiusMeters,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  googleMapsDirectionsUrl,
  googleMapsEmbedAtCoordinates,
  legacyNearbyTypeByFilter,
  loneMountainCommunityCenter,
  placesApiTypesByFilter,
  type AmenityFilterId,
} from "@/lib/amenity-map-config";
import { curatedPlacesForFilter } from "@/lib/curated-nearby-places";

function readDisplayName(value: unknown): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "text" in value) {
    return String((value as { text: string }).text);
  }
  return "Place";
}

type MapPlaceResult = {
  id: string;
  name: string;
  address?: string;
  rating?: number;
  lat: number;
  lng: number;
};

type NearbyAmenityMapProps = {
  defaultFilter?: AmenityFilterId;
  /** Slightly shorter map on homepage previews */
  compact?: boolean;
  className?: string;
  /** Accessible label for the map region */
  ariaLabel?: string;
};

const MAP_MIN_HEIGHT_CLASS = "min-h-[280px] sm:min-h-[360px]";

const mapCenter = {
  lat: loneMountainCommunityCenter.latitude,
  lng: loneMountainCommunityCenter.longitude,
};

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.google?.maps) {
    return Promise.resolve();
  }
  const existing = document.querySelector<HTMLScriptElement>(
    'script[data-lmh-google-maps="1"]',
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("script error")));
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.dataset.lmhGoogleMaps = "1";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps script failed"));
    document.head.appendChild(script);
  });
}

function useLazyVisible(rootMargin = "200px") {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return { ref, visible };
}

function CuratedFallbackList({ filter }: { filter: AmenityFilterId }) {
  const places = curatedPlacesForFilter(filter);
  if (places.length === 0) {
    return (
      <p className="text-sm text-stone-600">
        Nearby {amenityFilterLabels[filter].toLowerCase()} appear on the interactive map when Google
        Maps is enabled. Browse other categories or call for a neighborhood tour.
      </p>
    );
  }
  return (
    <ul className="mt-3 space-y-2 text-sm text-stone-700">
      {places.map((p) => (
        <li key={p.id} className="rounded-md border border-stone-200 bg-white px-3 py-2">
          <span className="font-medium text-stone-900">{p.name}</span>
          <span className="text-stone-600"> — {p.address}, {p.locality}, {p.region} {p.postalCode}</span>
        </li>
      ))}
    </ul>
  );
}

function EmbedFallback({ compact }: { compact?: boolean }) {
  const { latitude, longitude, name } = loneMountainCommunityCenter;
  const src = googleMapsEmbedAtCoordinates(latitude, longitude, 13);
  return (
    <iframe
      title={`Map centered on ${name}, Las Vegas`}
      src={src}
      className={`aspect-[4/3] w-full rounded-lg border border-stone-200 shadow-sm ${compact ? "max-h-[320px]" : ""} ${MAP_MIN_HEIGHT_CLASS}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}

export function NearbyAmenityMap({
  defaultFilter = "parks",
  compact = false,
  className,
  ariaLabel = "Interactive map of amenities near Lone Mountain, Las Vegas",
}: NearbyAmenityMapProps) {
  const toolbarId = useId();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const { ref: lazyRootRef, visible: isInView } = useLazyVisible();
  const [activeFilter, setActiveFilter] = useState<AmenityFilterId>(defaultFilter);
  const [mapStatus, setMapStatus] = useState<"pending" | "loading" | "ready">("pending");
  const [loadError, setLoadError] = useState(false);
  const [livePlaces, setLivePlaces] = useState<MapPlaceResult[]>([]);

  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();

  const showEmbedFallback = !apiKey || loadError;
  const mapIsReady = mapStatus === "ready" && !showEmbedFallback;

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showInfo = useCallback((place: MapPlaceResult) => {
    const map = mapInstanceRef.current;
    if (!map) return;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    const ratingLine =
      place.rating !== undefined ? `<p class="text-sm">Rating: ${place.rating.toFixed(1)}</p>` : "";
    const addressLine = place.address
      ? `<p class="text-sm">${place.address}</p>`
      : "";
    const directions = googleMapsDirectionsUrl(place.lat, place.lng, place.name);
    infoWindowRef.current.setContent(
      `<div style="max-width:240px;font-family:system-ui,sans-serif">
        <p style="font-weight:600;margin:0 0 4px">${place.name}</p>
        ${ratingLine}
        ${addressLine}
        <p style="margin:8px 0 0"><a href="${directions}" target="_blank" rel="noopener">Directions</a></p>
      </div>`,
    );
    infoWindowRef.current.setPosition({ lat: place.lat, lng: place.lng });
    infoWindowRef.current.open({ map });
  }, []);

  const renderMarkers = useCallback(
    (places: MapPlaceResult[]) => {
      const map = mapInstanceRef.current;
      if (!map) return;
      clearMarkers();
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener("click", () => showInfo(place));
        markersRef.current.push(marker);
      });
    },
    [clearMarkers, showInfo],
  );

  const ensureCommunityMarker = useCallback((map: google.maps.Map) => {
    if (communityMarkerRef.current) return;
    communityMarkerRef.current = new google.maps.Marker({
      map,
      position: mapCenter,
      title: loneMountainCommunityCenter.name,
      label: { text: "★", color: "#ffffff", fontWeight: "700" },
      zIndex: 999,
    });
    communityMarkerRef.current.addListener("click", () => {
      showInfo({
        id: "community",
        name: loneMountainCommunityCenter.name,
        address: loneMountainCommunityCenter.landmarkAddress,
        lat: mapCenter.lat,
        lng: mapCenter.lng,
      });
    });
  }, [showInfo]);

  const fetchPlacesLegacy = useCallback(
    (filter: AmenityFilterId): Promise<MapPlaceResult[]> => {
      const map = mapInstanceRef.current;
      const legacyType = legacyNearbyTypeByFilter[filter];
      if (!map || !legacyType || !window.google?.maps?.places) {
        return Promise.resolve([]);
      }
      return new Promise((resolve) => {
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(
          {
            location: mapCenter,
            radius: amenitySearchRadiusMeters,
            type: legacyType,
          },
          (results, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
              resolve([]);
              return;
            }
            resolve(
              results.slice(0, 14).map((r, index) => ({
                id: r.place_id ?? `legacy-${index}`,
                name: r.name ?? "Place",
                address: r.vicinity,
                rating: r.rating,
                lat: r.geometry?.location?.lat() ?? mapCenter.lat,
                lng: r.geometry?.location?.lng() ?? mapCenter.lng,
              })),
            );
          },
        );
      });
    },
    [],
  );

  const fetchPlacesNew = useCallback(
    async (filter: AmenityFilterId): Promise<MapPlaceResult[]> => {
      const types = placesApiTypesByFilter[filter];
      if (!types.length || !window.google?.maps?.importLibrary) {
        return fetchPlacesLegacy(filter);
      }
      try {
        const placesLib = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;
        const Place = placesLib.Place;
        if (!Place?.searchNearby) {
          return fetchPlacesLegacy(filter);
        }
        const { places } = await Place.searchNearby({
          fields: ["displayName", "location", "formattedAddress", "rating", "id"],
          locationRestriction: {
            center: mapCenter,
            radius: amenitySearchRadiusMeters,
          },
          includedPrimaryTypes: types,
          maxResultCount: 14,
        });
        return places.map((p, index) => ({
          id: p.id ?? `new-${index}`,
          name: readDisplayName(p.displayName),
          address: p.formattedAddress ?? undefined,
          rating: p.rating ?? undefined,
          lat: p.location?.lat() ?? mapCenter.lat,
          lng: p.location?.lng() ?? mapCenter.lng,
        }));
      } catch {
        return fetchPlacesLegacy(filter);
      }
    },
    [fetchPlacesLegacy],
  );

  useEffect(() => {
    if (!isInView || !apiKey || loadError || mapInstanceRef.current) return;

    void (async () => {
      setMapStatus("loading");
      try {
        await loadGoogleMapsScript(apiKey);
        if (!mapContainerRef.current) return;
        const mapOptions: google.maps.MapOptions = {
          center: mapCenter,
          zoom: compact ? 12 : 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          ...(mapId ? { mapId } : {}),
        };
        const map = new google.maps.Map(mapContainerRef.current, mapOptions);
        mapInstanceRef.current = map;
        ensureCommunityMarker(map);
        setMapStatus("ready");
      } catch {
        setLoadError(true);
      }
    })();
  }, [apiKey, compact, ensureCommunityMarker, isInView, loadError, mapId]);

  useEffect(() => {
    if (!mapIsReady) return;
    let cancelled = false;
    void (async () => {
      const results = await fetchPlacesNew(activeFilter);
      if (cancelled) return;
      setLivePlaces(results);
      renderMarkers(results);
    })();
    return () => {
      cancelled = true;
    };
  }, [activeFilter, fetchPlacesNew, mapIsReady, renderMarkers]);

  const heightClass = compact
    ? `h-[min(50vh,360px)] ${MAP_MIN_HEIGHT_CLASS}`
    : `h-[min(55vh,520px)] ${MAP_MIN_HEIGHT_CLASS}`;

  return (
    <div ref={lazyRootRef} className={className}>
      <div
        role="toolbar"
        aria-label="Amenity categories"
        id={toolbarId}
        className="flex flex-wrap gap-2"
      >
        {amenityFilterOrder.map((filter) => {
          const pressed = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={pressed}
              aria-label={`Show ${amenityFilterLabels[filter]} near Lone Mountain`}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 ${
                pressed
                  ? "bg-amber-700 text-white shadow-sm"
                  : "border border-stone-300 bg-white text-stone-800 hover:bg-stone-50"
              }`}
            >
              {amenityFilterLabels[filter]}
            </button>
          );
        })}
      </div>

      <div
        className={`relative mt-4 w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100 ${heightClass}`}
        aria-label={ariaLabel}
      >
        {showEmbedFallback && isInView ? (
          <EmbedFallback compact={compact} />
        ) : (
          <div
            ref={mapContainerRef}
            className={`absolute inset-0 ${mapStatus === "loading" ? "opacity-0" : "opacity-100"}`}
            role="application"
            aria-busy={mapStatus === "loading"}
          />
        )}
        {apiKey && !loadError && mapStatus === "loading" ? (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-sm text-stone-600">
            Loading map…
          </div>
        ) : null}
        {!isInView ? (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-sm text-stone-500">
            Map loads as you scroll
          </div>
        ) : null}
      </div>

      {showEmbedFallback && isInView ? (
        <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm font-medium text-stone-900">
            Curated {amenityFilterLabels[activeFilter].toLowerCase()} near Lone Mountain
          </p>
          <CuratedFallbackList filter={activeFilter} />
        </div>
      ) : livePlaces.length === 0 && mapIsReady ? (
        <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm text-stone-700">
            No live results for this filter—try another category or see the curated list below.
          </p>
          <CuratedFallbackList filter={activeFilter} />
        </div>
      ) : null}
    </div>
  );
}
