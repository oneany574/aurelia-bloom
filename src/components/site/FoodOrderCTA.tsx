import { Phone, MessageCircle, Truck, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

export function FoodOrderCTA() {
  return (
    <section className="px-6 md:px-10 py-24">
      <div className="border border-border/60 bg-card/40 p-8 md:p-14 grid grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="col-span-12 md:col-span-7">
          <span className="eyebrow"><span className="rule" />Food & Delivery</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-balance">
            Order food from <em className="text-accent">Maya Devi</em>.
          </h2>
          <p className="mt-6 text-sm text-muted-foreground max-w-md">
            Hot, fresh and made in-house — delivered free across the area.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs text-cream/80">
            <span className="inline-flex items-center gap-2 border border-border/60 px-4 py-2">
              <Clock size={14} strokeWidth={1.4} className="text-accent" />
              {siteConfig.deliveryTime}
            </span>
            <span className="inline-flex items-center gap-2 border border-border/60 px-4 py-2">
              <Truck size={14} strokeWidth={1.4} className="text-accent" />
              {siteConfig.deliveryNote}
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
          {siteConfig.foodOrderNumbers.map((n) => (
            <a
              key={n}
              href={`tel:${n}`}
              className="group flex items-center justify-between gap-4 border border-accent/40 px-5 py-4 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
            >
              <span className="inline-flex items-center gap-3">
                <Phone size={14} strokeWidth={1.4} />
                Call {n}
              </span>
              <span className="opacity-60 group-hover:opacity-100">→</span>
            </a>
          ))}
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between gap-4 border border-border/60 px-5 py-4 text-[11px] uppercase tracking-[0.3em] text-cream/80 hover:text-accent hover:border-accent/60 transition"
          >
            <span className="inline-flex items-center gap-3">
              <MessageCircle size={14} strokeWidth={1.4} />
              Message on Facebook
            </span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
