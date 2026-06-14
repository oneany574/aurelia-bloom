import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/data/faqs";

export function Testimonials() {
  return (
    <section className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <Reveal className="col-span-12 md:col-span-7">
          <span className="eyebrow"><span className="rule" />Reviews</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Loved by <em className="text-accent">guests</em> and families.
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <article className="h-full border border-border/60 bg-card/40 p-8 flex flex-col gap-6">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-display text-2xl italic leading-snug text-cream">"{t.review}"</p>
              <div className="mt-auto flex items-center gap-3 pt-6 border-t border-border/40">
                <div className="h-10 w-10 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{t.name}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
