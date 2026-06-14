import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/faqs";

export function FAQ() {
  return (
    <section className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
        <Reveal className="col-span-12 md:col-span-5 md:sticky md:top-32">
          <span className="eyebrow"><span className="rule" />Questions</span>
          <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95] text-balance">
            Things our <em className="text-accent">guests</em> often ask.
          </h2>
        </Reveal>
        <div className="col-span-12 md:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <AccordionItem value={`item-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left font-display text-2xl md:text-3xl hover:no-underline hover:text-accent py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
