import { googleMapsEmbedSrc, googleMapsSearchUrl } from "@/lib/lone-mountain-local";

type HyperlocalMapEmbedProps = {
  title: string;
  mapQuery: string;
  zoom?: number;
  className?: string;
  searchLabel?: string;
};

export function HyperlocalMapEmbed({
  title,
  mapQuery,
  zoom = 14,
  className,
  searchLabel = "Open in Google Maps",
}: HyperlocalMapEmbedProps) {
  const src = googleMapsEmbedSrc(mapQuery, zoom);
  const searchUrl = googleMapsSearchUrl(mapQuery);

  return (
    <figure className={className}>
      <iframe
        title={title}
        src={src}
        className="aspect-[4/3] h-auto min-h-[240px] w-full rounded-lg border border-stone-200 shadow-sm sm:min-h-[280px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <figcaption className="mt-2 text-sm text-stone-600">
        <a
          href={searchUrl}
          className="font-semibold text-amber-800 underline decoration-amber-700/40 underline-offset-2 hover:text-amber-700"
          rel="noopener noreferrer"
          target="_blank"
        >
          {searchLabel}
        </a>
      </figcaption>
    </figure>
  );
}
