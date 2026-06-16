import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  formatGalleryDate,
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/lib/data/gallery";
import natureImg from "@/assets/nature.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Maya Devi Resort" },
      { name: "description", content: "Photos of Maya Devi Resort — rooms, pool, food, events and guest celebrations." },
      { property: "og:title", content: "Gallery | Maya Devi Resort" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [index, setIndex] = useState<number | null>(null);
  const items =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);
  const open = index !== null;
  const current = open ? items[index!] : null;

  const close = () => setIndex(null);
  const next = () =>
    setIndex((i) => (i === null ? i : (i + 1) % items.length));
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments at <em className="text-accent">Maya Devi</em></>}
        description="A glimpse into stays, swims, food and celebrations at the resort."
        image={natureImg}
      />

      <section className="px-6 md:px-10 py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          {(["All", ...galleryCategories] as const).map((c) => (
            <button
              key={c}
              onClick={() => { setActive(c); setIndex(null); }}
              className={`text-[11px] uppercase tracking-[0.28em] px-4 py-2 border transition ${
                active === c
                  ? "border-accent bg-accent text-background"
                  : "border-border/60 text-cream/80 hover:text-accent hover:border-accent/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {items.map((g, i) => (
            <Reveal key={g.id} delay={(i % 6) * 0.04} className="mb-4 break-inside-avoid block">
              <figure className="group block w-full overflow-hidden bg-card border border-border/40">
                <button
                  onClick={() => setIndex(i)}
                  className="block w-full overflow-hidden"
                  aria-label={`Open ${g.caption}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </button>
                <figcaption className="flex items-center justify-between gap-3 px-4 py-3 border-t border-border/40">
                  <div className="min-w-0">
                    <div className="font-display text-base text-cream truncate">{g.caption}</div>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-accent mt-1">
                      {g.category}
                    </div>
                  </div>
                  <time
                    dateTime={g.date}
                    className="shrink-0 text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
                  >
                    {formatGalleryDate(g.date)}
                  </time>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

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
              aria-label="Close"
              onClick={close}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-cream/80 hover:text-accent transition"
            >
              <X size={28} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 p-3 border border-border/60 text-cream/80 hover:text-accent hover:border-accent transition"
            >
              <ChevronLeft size={22} strokeWidth={1.2} />
            </button>
            <button
              aria-label="Next"
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
                loading="eager"
                decoding="async"
                className="max-h-[78vh] max-w-[90vw] object-contain shadow-2xl"
              />
              <figcaption className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-cream/80 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent">{current.category}</span>
                <span className="font-display text-lg">{current.caption}</span>
                <time dateTime={current.date} className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                  {formatGalleryDate(current.date)}
                </time>
                <span className="text-[10px] uppercase tracking-[0.28em] text-cream/40">
                  {(index ?? 0) + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
