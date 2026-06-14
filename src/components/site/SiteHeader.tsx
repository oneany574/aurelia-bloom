import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks, siteConfig } from "@/lib/data/site";
import { openBookingModal } from "@/lib/booking-modal";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/40"
            : "bg-transparent",
        )}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5 text-cream">
          <Link to="/" className="font-display text-xl tracking-wider">
            Maya Devi<span className="text-accent">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.28em]">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="underline-grow"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-cream/80 hover:text-accent transition"
            >
              <Phone size={14} strokeWidth={1.4} />
              {siteConfig.phone}
            </a>
            <button
              onClick={() => openBookingModal()}
              className="hidden md:inline-flex items-center gap-3 border border-accent/60 px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
            >
              Book Now
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden text-cream"
            >
              <Menu size={22} strokeWidth={1.2} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
              <Link to="/" className="font-display text-xl tracking-wider text-cream">
                Maya Devi<span className="text-accent">.</span>
              </Link>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-cream">
                <X size={22} strokeWidth={1.2} />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col px-6 py-10 gap-6"
            >
              {navLinks.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link
                    to={l.to}
                    className="font-display text-4xl text-cream"
                    activeProps={{ className: "font-display text-4xl text-accent italic" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="mt-8 flex flex-col gap-4"
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    openBookingModal();
                  }}
                  className="border border-accent px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition"
                >
                  Book Now
                </button>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cream/80"
                >
                  <Phone size={14} strokeWidth={1.4} /> {siteConfig.phone}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
