import { Star } from "lucide-react";

export default function RatingStars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? "fill-amber text-amber" : "fill-transparent text-ink-800/15 dark:text-white/15"
          }`}
        />
      ))}
    </div>
  );
}
