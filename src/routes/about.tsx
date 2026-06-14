import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { openBookingModal } from "@/lib/booking-modal";
import heroImg from "@/assets/hero.jpg";
import natureImg from "@/assets/nature.jpg";
import suiteImg from "@/assets/suite.jpg";
import diningImg from "@/assets/dining.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Maya Devi Resort | Family-Friendly Resort Experience" },
      { name: "description", content: "Learn about Maya Devi Resort, a welcoming hotel resort for relaxation, food, events, swimming, and family gatherings." },
      { property: "og:title", content: "About Maya Devi Resort" },
      { property: "og:description", content: "A welcoming hotel resort for stays, food, swimming and celebrations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const highlights = [
  "Family-friendly resort environment",
  "Food and delivery service",
  "Swimming pool and leisure",
  "Events and celebrations",
  "Always open for guests",
  "Comfortable stay experience",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={<>About <em className="text-accent">Maya Devi</em> Resort</>}
        description="A welcoming hotel resort designed for relaxation, family gatherings, food, events and memorable stays."
        image={heroImg}
      />

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <span className="eyebrow"><span className="rule" />Who we are</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-balance">
              Warm hospitality, <em className="text-accent">always open</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Maya Devi Resort is a welcoming hotel resort designed for relaxation, family gatherings, food, events, and memorable stays. With a friendly environment, resort-style hospitality, and always-open service, Maya Devi Resort offers guests a comfortable place to enjoy leisure, food, swimming, and celebrations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-secondary text-secondary-foreground">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <span className="eyebrow"><span className="rule" />Why guests choose us</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-cream text-balance">
              Resort highlights.
            </h2>
          </Reveal>
          <ul className="col-span-12 md:col-span-7 grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.06}>
                <li className="flex items-start gap-3 border border-cream/15 p-5">
                  <Check size={16} className="mt-1 text-accent flex-shrink-0" strokeWidth={1.6} />
                  <span className="font-display text-xl text-cream">{h}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <img src={natureImg} alt="Maya Devi Resort grounds" className="w-full h-[420px] md:h-[560px] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="col-span-6 md:col-span-5">
            <img src={suiteImg} alt="Comfortable rooms" className="w-full h-[260px] md:h-[270px] object-cover" />
          </Reveal>
          <Reveal delay={0.15} className="col-span-6 md:col-span-5 md:col-start-8">
            <img src={diningImg} alt="Resort dining" className="w-full h-[260px] md:h-[270px] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border/60">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="eyebrow"><span className="rule" />Mission</span>
          <p className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] italic text-balance">
            "We open our doors so guests can rest, eat well, swim, and celebrate — comfortably, always."
          </p>
          <button
            onClick={() => openBookingModal()}
            className="mt-12 inline-flex items-center gap-3 border border-accent px-8 py-5 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
          >
            Plan Your Visit <ArrowUpRight size={16} strokeWidth={1.2} />
          </button>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
