import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/Reveal";
import { FoodOrderCTA } from "@/components/site/FoodOrderCTA";
import { FAQ } from "@/components/site/FAQ";
import { siteConfig } from "@/lib/data/site";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Maya Devi Resort | Booking, Food Orders & Event Inquiries" },
      { name: "description", content: "Contact Maya Devi Resort for room booking, food orders, events, swimming pool, and general inquiries." },
      { property: "og:title", content: "Contact Maya Devi Resort" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const inquiryTypes = [
  "Room Booking",
  "Food Order",
  "Event Inquiry",
  "Pool Inquiry",
  "General Question",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  inquiryType: z.enum(inquiryTypes),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});
type Values = z.infer<typeof schema>;

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { inquiryType: "General Question" },
  });

  const onSubmit = async (values: Values) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent", {
      description: `Thanks ${values.name}, we'll respond shortly.`,
    });
    reset();
  };

  const cards = [
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}` },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Clock, label: "Hours", value: siteConfig.openingStatus },
    { icon: MapPin, label: "Address", value: siteConfig.address },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Get in <em className="text-accent">touch</em></>}
        description="For bookings, food orders, event inquiries or general questions — we're here."
        image={heroImg}
      />

      <section className="px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="border border-border/60 p-6 h-full bg-card/40">
                <c.icon size={20} className="text-accent" strokeWidth={1.4} />
                <p className="mt-4 eyebrow">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="mt-2 block font-display text-xl underline-grow break-words">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-2 font-display text-xl">{c.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="border border-border/60 p-6 bg-card/40">
            <p className="eyebrow">Food Order Numbers</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {siteConfig.foodOrderNumbers.map((n) => (
                <a key={n} href={`tel:${n}`} className="text-cream underline-grow font-display text-xl">
                  {n}
                </a>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{siteConfig.deliveryTime} · {siteConfig.deliveryNote}</p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <span className="eyebrow"><span className="rule" />Inquiry Form</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1] text-balance">
              Send us a <em className="text-accent">message</em>.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground max-w-md">
              Tell us how we can help — our team will get back to you on the phone number you share.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
              <Field label="Full name" error={errors.name?.message} className="col-span-2">
                <input {...register("name")} className={inputCls} placeholder="Your full name" />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone")} className={inputCls} placeholder="98XXXXXXXX" />
              </Field>
              <Field label="Inquiry type" error={errors.inquiryType?.message}>
                <select {...register("inquiryType")} className={inputCls}>
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t} className="bg-card">{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message" error={errors.message?.message} className="col-span-2">
                <textarea {...register("message")} rows={5} className={inputCls + " resize-none"} placeholder="How can we help?" />
              </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                className="col-span-2 mt-4 inline-flex items-center justify-center border border-accent px-6 py-5 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-accent hover:text-background transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="border border-border/60 bg-card/40 h-[320px] flex items-center justify-center text-muted-foreground">
          <span className="eyebrow">Map coming soon</span>
        </div>
      </section>

      <FoodOrderCTA />
      <FAQ />
    </SiteLayout>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-border pb-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-accent transition";

function Field({
  label,
  error,
  children,
  className = "col-span-1",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="text-[11px] text-destructive">{error}</span> : null}
    </label>
  );
}
