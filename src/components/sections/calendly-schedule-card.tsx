import { calendlyUrl } from "@/lib/calendly";
import { siteContact } from "@/lib/site-contact";

type CalendlyScheduleCardProps = {
  placement: string;
  title?: string;
  body?: string;
};

export function CalendlyScheduleCard({
  placement,
  title = "Schedule time online",
  body = "Pick a private showing or buyer consult—opens Calendly in a new tab. You can also call or email if you prefer.",
}: CalendlyScheduleCardProps) {
  const url = calendlyUrl("showing", placement);

  return (
    <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm sm:p-8">
      <h2 className="text-lg font-semibold text-stone-900">{title}</h2>
      <p className="mt-2 text-sm text-stone-700">{body}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-md bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Book on Calendly
          <span className="sr-only"> (opens Calendly in a new tab)</span>
        </a>
        <a
          href={`tel:${siteContact.phoneE164}`}
          className="inline-flex rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-50"
        >
          Call {siteContact.phoneDisplay}
        </a>
      </div>
    </div>
  );
}