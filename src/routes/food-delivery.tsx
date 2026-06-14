import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Clock, Truck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { FoodOrderCTA } from "@/components/site/FoodOrderCTA";
import { foodCategories, foodItems, type FoodCategory } from "@/lib/data/food-menu";
import { siteConfig } from "@/lib/data/site";
import diningImg from "@/assets/dining.jpg";

export const Route = createFileRoute("/food-delivery")({
  head: () => ({
    meta: [
      { title: "Food & Delivery | Maya Devi Resort" },
      { name: "description", content: "Order food from Maya Devi Resort. Free delivery available from 11 AM to 6 PM." },
      { property: "og:title", content: "Food & Delivery | Maya Devi Resort" },
      { property: "og:url", content: "/food-delivery" },
    ],
    links: [{ rel: "canonical", href: "/food-delivery" }],
  }),
  component: FoodPage,
});

function FoodPage() {
  const [active, setActive] = useState<FoodCategory | "All">("All");
  const filtered = active === "All" ? foodItems : foodItems.filter((i) => i.category === active);
  const callNumber = siteConfig.foodOrderNumbers[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Food & Delivery"
        title={<>Hot food, <em className="text-accent">free delivery</em></>}
        description={`Delivery ${siteConfig.deliveryTime} · ${siteConfig.deliveryNote}`}
        image={diningImg}
      />

      <section className="px-6 md:px-10 py-16 border-b border-border/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, label: "Delivery time", value: siteConfig.deliveryTime },
            { icon: Truck, label: "Delivery", value: siteConfig.deliveryNote },
            { icon: Phone, label: "Call to order", value: siteConfig.foodOrderNumbers.join(" · ") },
          ].map(({ icon: Icon, label, value }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="border border-border/60 p-6">
                <Icon size={20} className="text-accent" strokeWidth={1.4} />
                <p className="mt-4 eyebrow">{label}</p>
                <p className="mt-2 font-display text-2xl">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-16">
        <div className="flex flex-wrap gap-2 mb-12">
          {(["All", ...foodCategories] as const).map((c) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.05}>
              <article className="group flex flex-col h-full border border-border/60 bg-card/40">
                <div className="relative overflow-hidden h-[240px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-background/80 px-2 py-1 text-accent">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <span className="text-accent text-sm font-medium">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  <a
                    href={`tel:${callNumber}`}
                    className="mt-auto self-start inline-flex items-center gap-3 border border-accent px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-cream hover:bg-accent hover:text-background transition"
                  >
                    Order Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <FoodOrderCTA />
    </SiteLayout>
  );
}
