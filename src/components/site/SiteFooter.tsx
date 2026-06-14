import { Link } from "@tanstack/react-router";
import { navLinks, siteConfig } from "@/lib/data/site";

export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 pt-24 pb-10 border-t border-border/60">
      <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-display text-5xl md:text-7xl leading-[0.9] italic">
            Maya Devi<span className="text-accent">.</span>
          </h3>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="eyebrow">Explore</p>
          <ul className="mt-6 space-y-2 text-sm text-cream/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="underline-grow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow">Contact</p>
          <ul className="mt-6 space-y-2 text-sm text-cream/80">
            <li>
              <a href={`tel:${siteConfig.phoneRaw}`} className="underline-grow">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="underline-grow break-all">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.openingStatus}</li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2">
          <p className="eyebrow">Food Orders</p>
          <ul className="mt-6 space-y-2 text-sm text-cream/80">
            {siteConfig.foodOrderNumbers.map((n) => (
              <li key={n}>
                <a href={`tel:${n}`} className="underline-grow">
                  {n}
                </a>
              </li>
            ))}
            <li className="text-muted-foreground text-xs">{siteConfig.deliveryTime} · {siteConfig.deliveryNote}</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Maya Devi Resort</span>
        <span>Crafted with warmth.</span>
      </div>
    </footer>
  );
}
