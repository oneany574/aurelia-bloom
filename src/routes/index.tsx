import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Menu, Plus } from "lucide-react";

import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";

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
      { title: "Aurelia Wellness Resort — A touch of nature, silence, and slow luxury" },
      { name: "description", content: "Thermal pools, forest rituals, private villas, and refined gastronomy in the heart of an ancient forest." },
      { property: "og:title", content: "Aurelia Wellness Resort" },
      { property: "og:description", content: "A touch of nature, silence, and slow luxury." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <main className="relative bg-background text-foreground">
        <Nav />
        <Hero />
        <Marquee />
        <Intro />
        <Experiences />
        <SpaRitual />
        <Suites />
        <Gastronomy />
        <Forest />
        <Booking />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-10 py-6 text-cream">
        <a href="#" className="font-display text-xl tracking-wider">Aurelia<span className="text-accent">.</span></a>
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em]">
          <a href="#rooms" className="underline-grow">Suites</a>
          <a href="#spa" className="underline-grow">Spa</a>
          <a href="#dining" className="underline-grow">Dining</a>
          <a href="#forest" className="underline-grow">The Forest</a>
        </nav>
        <button className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em]">
          <span className="hidden sm:inline">Menu</span>
          <Menu size={18} strokeWidth={1.2} />
        </button>
      </div>
    </header>
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
        <img src={heroImg} alt="Aurelia resort at dusk" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-10 pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <span className="eyebrow"><span className="rule" />Est. MCMXCVIII — Aurelia Resort</span>
          <h1 className="mt-6 font-display text-[14vw] md:text-[8.5vw] leading-[0.92] text-cream text-balance italic">
            A touch of <em className="text-accent">nature</em>,<br />
            silence, and slow luxury.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:items-end sm:justify-between"
        >
          <p className="max-w-sm text-sm leading-relaxed text-cream/80">
            A wellness retreat hidden in an ancient forest — thermal pools, private villas, and rituals crafted in silence.
          </p>
          <a
            href="#booking"
            className="group inline-flex items-center gap-3 border border-cream/30 px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition hover:border-accent hover:text-accent"
          >
            Reserve Your Stay
            <ArrowUpRight size={16} className="transition group-hover:rotate-45" strokeWidth={1.2} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["Thermal Pools", "Forest Rituals", "Private Villas", "Slow Dining", "Silent Spa", "Wild Sauna"];
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
            <span className="eyebrow"><span className="rule" />The Idea</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              An estate for those who measure luxury <em className="text-accent">not in gold</em>, but in stillness — where mornings open with mist and evenings end with fire.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Aurelia was conceived as the quiet counter-weight to a loud world. Twenty-two villas, three thermal pools, and one ancient forest — composed with restraint, devoted to the body and the breath.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCES (image cards with parallax) ---------- */
function Experiences() {
  const items = [
    { num: "II", title: "Forest Spa", body: "Stone baths heated by ancient wood-fire, surrounded by silence.", img: spaImg },
    { num: "III", title: "Wild Sauna", body: "A cedar-walled retreat opening onto the trees and the dawn.", img: saunaImg },
    { num: "IV", title: "Ritual Treatments", body: "Hand-blended oils, warm stones, and slow, attentive hands.", img: ritualImg },
  ];
  return (
    <section id="spa" className="px-6 md:px-10 py-24">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <Reveal className="col-span-12 md:col-span-6">
          <span className="eyebrow"><span className="rule" />Experiences</span>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Rituals for the body, <em className="text-accent">silence</em> for the mind.
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

/* ---------- SPA RITUAL (full-bleed editorial) ---------- */
function SpaRitual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <section ref={ref} className="relative h-[120vh] my-24 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%]">
        <img src={natureImg} alt="Ancient forest in mist" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal><span className="eyebrow"><span className="rule" />Manifesto</span></Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] text-cream italic text-balance">
              "We do not ask the forest to be quieter. We ask ourselves to listen more carefully."
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-xs uppercase tracking-[0.32em] text-accent">— Iren Aurelius, Founder</p>
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
          <span className="eyebrow ml-4"><span className="rule" />Suites & Villas</span>
          <h2 className="mt-8 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Rooms that <em className="text-accent">breathe</em> with the trees.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Twenty-two villas dressed in oak, linen and stone — each with its own fire, its own bath, and a long window facing the wild.
          </p>
          <a href="#" className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream underline-grow">
            View all suites <ArrowUpRight size={14} strokeWidth={1.2} />
          </a>
        </Reveal>

        <div className="col-span-12 md:col-span-7 grid gap-10">
          {[
            { name: "Forest Villa", num: "01", size: "85m²", img: suiteImg },
            { name: "Atrium Suite", num: "02", size: "62m²", img: spaImg },
            { name: "Stone Retreat", num: "03", size: "110m²", img: saunaImg },
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
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">{r.size} · 2 guests</p>
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
          <img src={diningImg} alt="Tasting menu plate" loading="lazy" className="w-full h-[640px] object-cover" />
        </Reveal>
        <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
          <Reveal>
            <span className="font-display italic text-accent text-2xl">VI</span>
            <span className="eyebrow ml-4"><span className="rule" />Gastronomy</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl md:text-6xl leading-[0.95] text-cream text-balance">
              A table set by the <em className="text-accent">season</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm leading-relaxed text-cream/70 max-w-md">
              Eight courses composed each morning from the kitchen garden and the surrounding forest — wild herbs, slow-cooked roots, smoke from cedar, honey from the meadow.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 space-y-4 max-w-md">
              {[
                ["Cedar smoked beetroot", "honey · sorrel · juniper"],
                ["Wood-fired trout", "burnt butter · forest mushrooms"],
                ["Birch sap sorbet", "ash · cream · pollen"],
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
            Three hundred hectares of wild forest, two thermal springs, one ancient promise — to leave you <em className="text-accent">softer</em> than we found you.
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
            Begin your <em className="text-accent">stay</em>.
          </h2>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-5" delay={0.15}>
          <form className="grid grid-cols-2 gap-4">
            {[
              ["Arrival", "DD / MM / YYYY"],
              ["Departure", "DD / MM / YYYY"],
              ["Guests", "2 Adults"],
              ["Villa type", "Forest Villa"],
            ].map(([label, ph]) => (
              <label key={label} className="col-span-1 flex flex-col gap-2 border-b border-border pb-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
                <input placeholder={ph} className="bg-transparent text-sm text-cream placeholder:text-cream/40 outline-none" />
              </label>
            ))}
            <button className="col-span-2 mt-6 group inline-flex items-center justify-between gap-3 border border-accent bg-accent/0 px-6 py-5 text-[11px] uppercase tracking-[0.3em] text-cream transition hover:bg-accent hover:text-background">
              Check Availability
              <ArrowUpRight size={16} className="transition group-hover:rotate-45" strokeWidth={1.2} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-24 pb-10 border-t border-border/60">
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-display text-6xl md:text-9xl leading-[0.85] italic">
            Aurelia<span className="text-accent">.</span>
          </h3>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">A touch of nature, silence, and slow luxury.</p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow">Contact</p>
          <ul className="mt-6 space-y-2 text-sm text-cream/80">
            <li>+33 4 80 00 12 00</li>
            <li>stay@aurelia.com</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow">Address</p>
          <ul className="mt-6 space-y-2 text-sm text-cream/80">
            <li>Forêt d'Aurelia</li>
            <li>Vallée des Mille Sources</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2">
          <p className="eyebrow">Follow</p>
          <ul className="mt-6 space-y-2 text-sm text-cream/80">
            <li><a href="#" className="underline-grow">Instagram</a></li>
            <li><a href="#" className="underline-grow">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>© MMXXVI Aurelia Wellness Resort</span>
        <span>Designed in silence.</span>
      </div>
    </footer>
  );
}
