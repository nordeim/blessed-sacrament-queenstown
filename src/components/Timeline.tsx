import type { TimelineEntry } from "@/data/content";
import { cn } from "@/utils/cn";

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

export function Timeline({ entries, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-10 pl-8", className)}>
      <span
        data-testid="timeline-rail"
        aria-hidden="true"
        className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-shrine-maroon-700 via-shrine-gold-400/70 to-shrine-gold-500"
      />
      {entries.map((entry) => (
        <li key={entry.year} className="relative">
          <span
            className="dot-pulse absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-shrine-gold-400 bg-shrine-cream"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-shrine-gold-600">
            {entry.year}
          </p>
          <h3 className="mt-1 font-display text-2xl">{entry.title}</h3>
          <p className="mt-2 leading-relaxed text-shrine-charcoal/85">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}
