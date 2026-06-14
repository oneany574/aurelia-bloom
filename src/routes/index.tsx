import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FoodOrderCTA } from "@/components/site/FoodOrderCTA";
import { openBookingModal } from "@/lib/booking-modal";

import heroImg from "@/assets/hero.jpg";
import spaImg from "@/assets/spa.jpg";
import suiteImg from "@/assets/suite.jpg";
import diningImg from "@/assets/dining.jpg";
import natureImg from "@/assets/nature.jpg";
import saunaImg from "@/assets/sauna.jpg";
import ritualImg from "@/assets/ritual.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maya Devi Resort | Hotel Resort, Food Delivery, Pool & Events" },
      { name: "description", content: "Visit Maya Devi Resort for resort stays, food delivery, swimming pool, events, family gatherings, and celebrations." },
      { property: "og:title", content: "Maya Devi Resort" },
      { property: "og:description", content: "Hotel resort, food delivery, swimming pool and events — always open." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "Maya Devi Resort",
          telephone: "+977 984-7062177",
          email: "mayadeviresort@gmail.com",
          openingHours: "Mo-Su 00:00-23:59",
          servesCuisine: ["Nepali", "Momo", "Chowmein"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Intro />
      <Experiences />
      <SpaRitual />
      <Suites />
      <Gastronomy />
      <FoodOrderCTA />
      <Testimonials />
      <Forest />
      <FAQ />
      <Booking />
    </SiteLayout>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroImg} alt="Maya Devi Resort at dusk" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-10 pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <span className="eyebrow"><span className="rule" />Maya Devi Resort · Always Open</span>
          <h1 className="mt-6 font-display text-[14vw] md:text-[8.5vw] leading-[0.92] text-cream text-balance italic">
            Stay, dine and <em className="text-accent">celebrate</em><br />
            with warm hospitality.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:items-end sm:justify-between"
        >
          <p className="max-w-sm text-sm leading-relaxed text-cream/80">
            A welcoming hotel resort for rooms, food delivery, swimming pool, family gatherings and events.
          </p>
          <button
            onClick={() => openBookingModal()}
            className="group inline-flex items-center gap-3 border border-cream/30 px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition hover:border-accent hover:text-accent"
          >
            Book Your Stay
            <ArrowUpRight size={16} className="transition group-hover:rotate-45" strokeWidth={1.2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Resort Stay", "Food Delivery", "Swimming Pool", "Family Gatherings", "Birthdays", "Events", "Always Open"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border/60 py-8 overflow-hidden">
      <div className="flex whitespace-nowrap marquee gap-16 font-display italic text-4xl md:text-6xl text-cream/70">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- INTRO ---------- */
function Intro() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-48">
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-2 font-display text-3xl md:text-4xl text-accent italic">I</Reveal>
        <div className="col-span-12 md:col-span-7 md:col-start-4">
          <Reveal>
            <span className="eyebrow"><span className="rule" />The Resort</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              A welcoming hotel resort designed for relaxation, <em className="text-accent">family gatherings</em>, food, events and memorable stays.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
              With a friendly environment, resort-style hospitality and always-open service, Maya Devi Resort offers guests a comfortable place to enjoy leisure, food, swimming and celebrations.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCES ---------- */
function Experiences() {
  const items = [
    { num: "II", title: "Swimming Pool", body: "A refreshing pool for relaxing days with family and friends.", img: spaImg },
    { num: "III", title: "Food & Delivery", body: "Hot, fresh meals served on-site or delivered free, 11 AM – 6 PM.", img: diningImg },
    { num: "IV", title: "Events & Celebrations", body: "From birthdays to family gatherings — a warm space for every moment.", img: ritualImg },
  ];
  return (
    <section id="spa" className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <Reveal className="col-span-12 md:col-span-7">
          <span className="eyebrow"><span className="rule" />What we offer</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            More than a stay, a <em className="text-accent">resort experience</em>.
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.15} className="group">
            <ParallaxCard img={it.img} title={it.title} num={it.num} body={it.body} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ParallaxCard({ img, title, num, body }: { img: string; title: string; num: string; body: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <article ref={ref} className="flex flex-col">
      <div className="relative overflow-hidden h-[520px] bg-card">
        <motion.img
          src={img}
          alt={title}
          loading="lazy"
          style={{ y }}
          className="h-[115%] w-full object-cover transition-[filter,transform] duration-[1500ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-5 left-5 font-display italic text-accent text-2xl">{num}</span>
      </div>
      <div className="pt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-3xl">{title}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{body}</p>
        </div>
        <Plus size={20} className="mt-2 text-accent transition group-hover:rotate-90" strokeWidth={1} />
      </div>
    </article>
  );
}

/* ---------- SPA RITUAL (manifesto) ---------- */
function SpaRitual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <section ref={ref} className="relative h-[120vh] my-24 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%]">
        <img src={natureImg} alt="Resort surroundings" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow"><span className="rule" />Our Promise</span></Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] text-cream italic text-balance">
              "Maya Devi Resort is a home away from home — a place where food, family and good times come together."
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-xs uppercase tracking-[0.32em] text-accent">— The Maya Devi Team</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SUITES ---------- */
function Suites() {
  return (
    <section id="rooms" className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
        <Reveal className="col-span-12 md:col-span-5 md:sticky md:top-32">
          <span className="font-display italic text-accent text-2xl">V</span>
          <span className="eyebrow ml-4"><span className="rule" />Rooms & Stay</span>
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Comfortable rooms for <em className="text-accent">every guest</em>.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            From standard rooms to family suites — we have a space for couples, families and groups.
          </p>
          <button
            onClick={() => openBookingModal("Room Booking")}
            className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream underline-grow"
          >
            Inquire about rooms <ArrowUpRight size={14} strokeWidth={1.2} />
          </button>
        </Reveal>

        <div className="col-span-12 md:col-span-7 grid gap-10">
          {[
            { name: "Standard Room", num: "01", size: "2 guests", img: suiteImg },
            { name: "Family Room", num: "02", size: "4 guests", img: spaImg },
            { name: "Deluxe Room", num: "03", size: "2–3 guests", img: saunaImg },
          ].map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <article className="group grid grid-cols-12 gap-4 items-end">
                <div className="col-span-12 sm:col-span-8 relative overflow-hidden h-[420px] bg-card">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4 pb-3">
                  <span className="font-display italic text-accent">{r.num}</span>
                  <h3 className="mt-3 font-display text-3xl">{r.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">{r.size}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GASTRONOMY ---------- */
function Gastronomy() {
  return (
    <section id="dining" className="px-6 md:px-10 py-32 bg-secondary text-secondary-foreground">
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
        <Reveal className="col-span-12 md:col-span-6 order-2 md:order-1">
          <img src={diningImg} alt="Resort plate" loading="lazy" className="w-full h-[640px] object-cover" />
        </Reveal>
        <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
          <Reveal>
            <span className="font-display italic text-accent text-2xl">VI</span>
            <span className="eyebrow ml-4"><span className="rule" />Kitchen</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-6xl leading-[0.95] text-cream text-balance">
              Fresh food, made <em className="text-accent">in-house</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm leading-relaxed text-cream/70 max-w-md">
              Nepali sets, momo, chowmein, fried rice, family combos and resort specials — served at the resort or delivered to your door.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 space-y-4 max-w-md">
              {[
                ["Chicken Momo", "house chutney · steamed fresh"],
                ["Thakali Khana Set", "daal · bhat · tarkari · achar"],
                ["Family Combo Platter", "momo · chowmein · rice · drinks"],
              ].map(([t, sub]) => (
                <li key={t} className="flex items-baseline justify-between gap-4 border-b border-cream/15 pb-4">
                  <span className="font-display text-xl text-cream">{t}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/50 text-right">{sub}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOREST (full-bleed quote) ---------- */
function Forest() {
  return (
    <section id="forest" className="px-6 md:px-10 py-40">
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 md:col-span-10 md:col-start-2 text-center">
          <span className="eyebrow"><span className="rule" />The Estate</span>
          <p className="mt-10 font-display text-4xl md:text-7xl leading-[1.05] text-balance italic">
            A welcoming resort for stays, swims, food and celebrations — built for the <em className="text-accent">moments that matter</em>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- BOOKING ---------- */
function Booking() {
  return (
    <section id="booking" className="px-6 md:px-10 py-32 border-t border-border/60">
      <div className="grid grid-cols-12 gap-6 items-end">
        <Reveal className="col-span-12 md:col-span-7">
          <span className="eyebrow"><span className="rule" />Reservations</span>
          <h2 className="mt-6 font-display text-5xl md:text-8xl leading-[0.9] text-balance">
            Begin your <em className="text-accent">visit</em>.
          </h2>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-5" delay={0.15}>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Send a quick inquiry — our team will confirm availability and call you back.
            </p>
            <button
              onClick={() => openBookingModal()}
              className="group inline-flex items-center justify-between gap-3 border border-accent bg-accent/0 px-6 py-5 text-[11px] uppercase tracking-[0.3em] text-cream transition hover:bg-accent hover:text-background"
            >
              Open Booking Inquiry
              <ArrowUpRight size={16} className="transition group-hover:rotate-45" strokeWidth={1.2} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
