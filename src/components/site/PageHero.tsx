import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 pt-32">
        <Reveal>
          <span className="eyebrow"><span className="rule" />{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] text-cream text-balance italic max-w-5xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-sm md:text-base leading-relaxed text-cream/80">{description}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
