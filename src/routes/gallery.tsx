import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { galleryCategories, galleryItems, type GalleryCategory, type GalleryItem } from "@/lib/data/gallery";
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
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const items = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

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
              onClick={() => setActive(c)}
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
              <button
                onClick={() => setLightbox(g)}
                className="group block w-full overflow-hidden bg-card"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-cream"
              onClick={() => setLightbox(null)}
            >
              <X size={28} strokeWidth={1.2} />
            </button>
            <motion.img
              key={lightbox.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
