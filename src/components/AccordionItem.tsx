import { useState } from "react";
import { Plus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink-800/10 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-medium text-ink-800 dark:text-cloud sm:text-lg">
          {question}
        </span>
        <Plus
          className={`h-5 w-5 shrink-0 text-sky-600 transition-transform duration-300 dark:text-glass ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-sm leading-relaxed text-slate dark:text-ink-100">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
