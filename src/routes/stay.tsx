import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { openBookingModal } from "@/lib/booking-modal";
import { rooms, stayAmenities } from "@/lib/data/rooms";
import suiteImg from "@/assets/suite.jpg";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Stay at Maya Devi Resort | Rooms, Family Suites & Group Packages" },
      { name: "description", content: "Comfortable standard, family and deluxe rooms at Maya Devi Resort, plus group stay packages — inquire to book." },
      { property: "og:title", content: "Stay at Maya Devi Resort" },
      { property: "og:url", content: "/stay" },
    ],
    links: [{ rel: "canonical", href: "/stay" }],
  }),
  component: StayPage,
});

function StayPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Stay"
        title={<>Stay at <em className="text-accent">Maya Devi</em> Resort</>}
        description="Comfortable rooms in a peaceful resort setting — for couples, families and groups."
        image={suiteImg}
      />

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {rooms.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.08} className="col-span-12 md:col-span-6">
              <article className="group flex flex-col h-full border border-border/60 bg-card/40">
                <div className="relative overflow-hidden h-[320px]">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl">{r.name}</h3>
                    <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{r.capacity}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{r.description}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {r.amenities.map((a) => (
                      <li key={a} className="text-[10px] uppercase tracking-[0.22em] text-cream/70 border border-border/60 px-3 py-1">
                        {a}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openBookingModal("Room Booking")}
                    className="mt-auto self-start inline-flex items-center gap-3 border border-accent px-5 py-3 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
                  >
                    Inquire Now <ArrowUpRight size={14} strokeWidth={1.2} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-secondary text-secondary-foreground">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <span className="eyebrow"><span className="rule" />Amenities</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-cream text-balance">
              Everything you need.
            </h2>
          </Reveal>
          <ul className="col-span-12 md:col-span-7 grid sm:grid-cols-2 gap-3">
            {stayAmenities.map((a, i) => (
              <Reveal key={a} delay={i * 0.04}>
                <li className="flex items-center gap-3 text-cream">
                  <Check size={16} className="text-accent" strokeWidth={1.6} />
                  <span className="text-base">{a}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
