import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import conf1 from "@/assets/conf-1.jpg";
import conf2 from "@/assets/conf-2.jpg";
import conf3 from "@/assets/conf-3.jpg";
import conf4 from "@/assets/conf-4.jpg";
import conf5 from "@/assets/conf-5.jpg";
import conf6 from "@/assets/conf-6.jpg";

type ConferenceShot = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  year: string;
  span: "tall" | "wide" | "square";
};

const shots: ConferenceShot[] = [
  { id: "keynote", src: conf1, alt: "Keynote address at the annual industry conference", caption: "Opening Keynote", year: "2025", span: "tall" },
  { id: "network", src: conf2, alt: "Networking reception in the resort gardens", caption: "Garden Reception", year: "2025", span: "wide" },
  { id: "panel", src: conf3, alt: "Industry leaders panel discussion on stage", caption: "Leadership Panel", year: "2024", span: "wide" },
  { id: "gala", src: conf4, alt: "Gala dinner under draped canopies", caption: "Gala Dinner", year: "2024", span: "tall" },
  { id: "workshop", src: conf5, alt: "Breakout workshop session", caption: "Breakout Workshop", year: "2024", span: "wide" },
  { id: "welcome", src: conf6, alt: "Registration and welcome lounge", caption: "Welcome Lounge", year: "2023", span: "tall" },
];

function ParallaxTile({ shot, onOpen }: { shot: ConferenceShot; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    const img = imgRef.current;
    if (!el || !img) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform = `scale(1.08) translate3d(${x * -18}px, ${y * -18}px, 0)`;
  };
  const handleLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = "";
  };

  const aspect =
    shot.span === "tall" ? "aspect-[3/4]" : shot.span === "wide" ? "aspect-[4/3]" : "aspect-square";

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onOpen}
      className={`group relative block w-full overflow-hidden bg-card border border-border/40 ${aspect}`}
      aria-label={`Open ${shot.caption}`}
    >
      <img
        ref={imgRef}
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-out will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-90 group-hover:opacity-100 transition" />
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-left">
          <div className="text-[10px] uppercase tracking-[0.3em] text-accent">{shot.year}</div>
          <div className="font-display text-xl text-cream mt-1">{shot.caption}</div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/70 group-hover:text-accent transition">
          View
        </span>
      </div>
    </button>
  );
}

export function ConferenceGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = open ? shots[index!] : null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % shots.length)),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  return (
    <section className="px-6 md:px-10 py-24 border-t border-border/60">
      <Reveal className="max-w-3xl mb-12">
        <span className="eyebrow"><span className="rule" />Annual Industry Conferences</span>
        <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
          A gallery of <em className="text-accent">gatherings</em> past.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl">
          Keynotes, panels, and quiet conversations from our annual industry conferences hosted at the resort.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-3 md:gap-4">
        {shots.map((s, i) => (
          <Reveal
            key={s.id}
            delay={(i % 4) * 0.05}
            className={s.span === "tall" ? "row-span-2" : ""}
          >
            <ParallaxTile shot={s} onOpen={() => setIndex(i)} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
          >
            <button
              aria-label="Close gallery"
              onClick={close}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-cream/80 hover:text-accent transition"
            >
              <X size={28} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 border border-border/60 text-cream/80 hover:text-accent hover:border-accent transition"
            >
              <ChevronLeft size={22} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 p-3 border border-border/60 text-cream/80 hover:text-accent hover:border-accent transition"
            >
              <ChevronRight size={22} strokeWidth={1.2} />
            </button>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4 max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[78vh] max-w-[90vw] object-contain shadow-2xl"
              />
              <figcaption className="flex items-center gap-4 text-cream/80">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{current.year}</span>
                <span className="font-display text-lg">{current.caption}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">
                  {(index ?? 0) + 1} / {shots.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
