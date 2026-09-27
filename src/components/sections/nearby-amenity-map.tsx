"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  amenityFilterLabels,
  amenityFilterOrder,
  getGoogleMapsApiKey,
  getGoogleMapsMapId,
  googleMapsDirectionsUrl,
  googleMapsEmbedAtCoordinates,
  loneMountainCommunityCenter,
  placesApiTypesByFilter,
  type AmenityFilterId,
} from "@/lib/amenity-map-config";
import { curatedPlacesForFilter } from "@/lib/curated-nearby-places";
import { loadGoogleMaps, mapsAuthFailed } from "@/lib/google-maps-loader";
import { searchCategory, type NearbyPlaceResult } from "@/lib/places-search";

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
        Curated {amenityFilterLabels[filter].toLowerCase()} for Lone Mountain are listed on other
        categories—try parks, grocery, or schools, or call for a neighborhood tour.
      </p>
    );
  }
  return (
    <ul className="mt-3 space-y-2 text-sm text-stone-700">
      {places.map((p) => (
        <li key={p.id} className="rounded-md border border-stone-200 bg-white px-3 py-2">
          <span className="font-medium text-stone-900">{p.name}</span>
          {p.address ? (
            <span className="text-stone-600">
              {" "}
              — {p.address}, {p.locality}, {p.region} {p.postalCode}
            </span>
          ) : (
            <span className="text-stone-600"> — {p.locality}, {p.region}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function EmbedFallback({ compact }: { compact?: boolean }) {
  const { latitude, longitude, name } = loneMountainCommunityCenter;
  const src = googleMapsEmbedAtCoordinates(latitude, longitude, 14);
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

function buildInfoWindowContent(place: NearbyPlaceResult): HTMLElement {
  const root = document.createElement("div");
  root.style.maxWidth = "240px";
  root.style.fontFamily = "system-ui, sans-serif";

  const title = document.createElement("p");
  title.style.fontWeight = "600";
  title.style.margin = "0 0 4px";
  title.textContent = place.name;
  root.appendChild(title);

  if (place.address) {
    const address = document.createElement("p");
    address.className = "text-sm";
    address.textContent = place.address;
    root.appendChild(address);
  }

  const link = document.createElement("a");
  link.href = place.mapsUri ?? googleMapsDirectionsUrl(place.lat, place.lng, place.name);
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = "Directions";
  link.style.display = "inline-block";
  link.style.marginTop = "8px";
  root.appendChild(link);

  return root;
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
  const [useFallback, setUseFallback] = useState(() => mapsAuthFailed || !getGoogleMapsApiKey());
  const [placesSearchFailed, setPlacesSearchFailed] = useState(false);

  const apiKey = getGoogleMapsApiKey();
  const mapId = getGoogleMapsMapId();

  const showEmbedFallback = !apiKey || useFallback;
  const mapIsReady = mapStatus === "ready" && !showEmbedFallback;

  const enterFallback = useCallback(() => {
    setUseFallback(true);
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    mapInstanceRef.current = null;
    if (mapContainerRef.current) {
      mapContainerRef.current.replaceChildren();
    }
    setMapStatus("pending");
  }, []);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFailure);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFailure);
  }, [enterFallback]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showInfo = useCallback((place: NearbyPlaceResult) => {
    const map = mapInstanceRef.current;
    if (!map) return;
    if (!infoWindowRef.current) {
      infoWindowRef.current = new google.maps.InfoWindow();
    }
    infoWindowRef.current.setContent(buildInfoWindowContent(place));
    infoWindowRef.current.setPosition({ lat: place.lat, lng: place.lng });
    infoWindowRef.current.open({ map });
  }, []);

  const renderMarkers = useCallback(
    (places: NearbyPlaceResult[]) => {
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

  useEffect(() => {
    if (!isInView || !apiKey || useFallback || mapInstanceRef.current) return;

    void (async () => {
      setMapStatus("loading");
      try {
        await loadGoogleMaps(apiKey);
        if (useFallback || mapsAuthFailed || !mapContainerRef.current) return;
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
        enterFallback();
      }
    })();
  }, [apiKey, compact, ensureCommunityMarker, enterFallback, isInView, mapId, useFallback]);

  useEffect(() => {
    if (!mapIsReady) return;
    let cancelled = false;
    void (async () => {
      const types = placesApiTypesByFilter[activeFilter];
      try {
        const results = await searchCategory(mapCenter, activeFilter, types);
        if (cancelled) return;
        renderMarkers(results);
        if (results.length === 0) {
          setPlacesSearchFailed(true);
        }
      } catch {
        if (cancelled) return;
        clearMarkers();
        setPlacesSearchFailed(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activeFilter, clearMarkers, mapIsReady, renderMarkers]);

  const heightClass = compact
    ? `h-[min(50vh,360px)] ${MAP_MIN_HEIGHT_CLASS}`
    : `h-[min(55vh,520px)] ${MAP_MIN_HEIGHT_CLASS}`;

  const showCuratedPanel =
    (showEmbedFallback && isInView) || (mapIsReady && placesSearchFailed);

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
              onClick={() => {
                setPlacesSearchFailed(false);
                setActiveFilter(filter);
              }}
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
        {apiKey && !useFallback && mapStatus === "loading" ? (
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

      {showCuratedPanel ? (
        <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-4">
          <p className="text-sm font-medium text-stone-900">
            Curated {amenityFilterLabels[activeFilter].toLowerCase()} near Lone Mountain
          </p>
          <CuratedFallbackList filter={activeFilter} />
        </div>
      ) : null}
    </div>
  );
}
