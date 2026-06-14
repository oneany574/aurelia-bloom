import { createFileRoute } from "@tanstack/react-router";
import { Shield, Users, Sparkles, Phone, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/data/site";
import spaImg from "@/assets/spa.jpg";
import saunaImg from "@/assets/sauna.jpg";
import natureImg from "@/assets/nature.jpg";

export const Route = createFileRoute("/swimming-pool")({
  head: () => ({
    meta: [
      { title: "Swimming Pool & Leisure | Maya Devi Resort" },
      { name: "description", content: "Relax and refresh at the Maya Devi Resort swimming pool — a fun and peaceful spot for family and friends." },
      { property: "og:title", content: "Swimming Pool & Leisure" },
      { property: "og:url", content: "/swimming-pool" },
    ],
    links: [{ rel: "canonical", href: "/swimming-pool" }],
  }),
  component: PoolPage,
});

const rules = [
  { icon: Shield, title: "Proper attire", body: "Please wear proper swimming attire while using the pool." },
  { icon: Users, title: "Supervise children", body: "Children should be supervised by an adult at all times." },
  { icon: Sparkles, title: "Keep it clean", body: "Help us keep the pool area clean and welcoming for everyone." },
  { icon: Shield, title: "Follow safety", body: "Follow resort safety instructions and staff guidance." },
  { icon: Phone, title: "Call ahead", body: "Contact the resort before visiting to confirm pool availability." },
];

function PoolPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pool"
        title={<>Swimming pool & <em className="text-accent">leisure</em></>}
        description="Relax, refresh and enjoy quality time at the Maya Devi Resort pool."
        image={spaImg}
      />

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <span className="eyebrow"><span className="rule" />The Pool</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-balance">
              A peaceful place to <em className="text-accent">refresh</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Relax, refresh, and enjoy vacation moments at the Maya Devi Resort swimming pool. The resort creates a fun and peaceful environment for guests looking to spend quality time with family and friends.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-cream/80">
              <Clock size={16} className="text-accent" strokeWidth={1.4} />
              <span>{siteConfig.openingStatus} · Call before visiting</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 bg-secondary text-secondary-foreground">
        <Reveal className="mb-12">
          <span className="eyebrow"><span className="rule" />Pool Rules</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-cream">For a safe, happy pool day.</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rules.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="border border-cream/15 p-6 h-full">
                <r.icon size={20} className="text-accent" strokeWidth={1.4} />
                <h3 className="mt-4 font-display text-2xl text-cream">{r.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <img src={spaImg} alt="Pool view" className="w-full h-[420px] md:h-[520px] object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="col-span-6 md:col-span-5">
            <img src={saunaImg} alt="Poolside" className="w-full h-[260px] md:h-[250px] object-cover" />
          </Reveal>
          <Reveal delay={0.15} className="col-span-6 md:col-span-5 md:col-start-8">
            <img src={natureImg} alt="Resort surroundings" className="w-full h-[260px] md:h-[260px] object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 border-t border-border/60 text-center">
        <Reveal>
          <span className="eyebrow"><span className="rule" />Plan Your Swim</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">Call for pool availability.</h2>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="mt-10 inline-flex items-center gap-3 border border-accent px-8 py-5 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
          >
            <Phone size={14} strokeWidth={1.4} /> Call {siteConfig.phone}
          </a>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
