import { Sun } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Theme is fixed to light mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-800/15 bg-white/70 text-ink-800 backdrop-blur-md"
    >
      <Sun className="h-4 w-4" />
    </button>
  );
}
