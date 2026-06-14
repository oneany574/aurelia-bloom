import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { openBookingModal } from "@/lib/booking-modal";
import { eventTypes } from "@/lib/data/events";
import ritualImg from "@/assets/ritual.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Celebrations | Maya Devi Resort" },
      { name: "description", content: "Plan birthdays, family gatherings, private celebrations, and entertainment events at Maya Devi Resort." },
      { property: "og:title", content: "Events & Celebrations" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events"
        title={<>Events & <em className="text-accent">celebrations</em></>}
        description="A lively and comfortable setting for birthdays, gatherings, cultural programs and entertainment nights."
        image={ritualImg}
      />

      <section className="px-6 md:px-10 py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow"><span className="rule" />The Setting</span>
          <p className="mt-6 font-display text-3xl md:text-4xl leading-[1.2] text-balance">
            Maya Devi Resort is a suitable destination for events, celebrations, entertainment programs, family gatherings, and special occasions — built for <em className="text-accent">lasting memories</em>.
          </p>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {eventTypes.map((e, i) => (
            <Reveal key={e.id} delay={(i % 6) * 0.06}>
              <article className="group flex flex-col h-full border border-border/60 bg-card/40">
                <div className="relative overflow-hidden h-[260px]">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-display text-2xl">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.description}</p>
                  <button
                    onClick={() => openBookingModal("Event Booking")}
                    className="mt-auto self-start inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-accent underline-grow"
                  >
                    Plan Event <ArrowUpRight size={14} strokeWidth={1.2} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border/60 text-center">
        <Reveal>
          <span className="eyebrow"><span className="rule" />Ready to plan?</span>
          <h2 className="mt-6 font-display text-4xl md:text-7xl text-balance">
            Let's make your event <em className="text-accent">unforgettable</em>.
          </h2>
          <button
            onClick={() => openBookingModal("Event Booking")}
            className="mt-10 inline-flex items-center gap-3 border border-accent px-8 py-5 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
          >
            Send Event Inquiry <ArrowUpRight size={16} strokeWidth={1.2} />
          </button>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
