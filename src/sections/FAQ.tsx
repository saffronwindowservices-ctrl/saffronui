import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import AccordionItem from "@/components/AccordionItem";
import { FAQS } from "@/data/content";

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions before you book?"
          align="center"
        />

        <RevealOnScroll delay={80} className="mt-12">
          <div className="glass-panel px-6 sm:px-8">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
