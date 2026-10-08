import Photo from "./Photo";
import { Button } from "./Buttons";
import { PinIcon } from "./Icons";
import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative h-[640px] overflow-hidden bg-cream">
      {/* Photo on the right, fading into cream on the left */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[68%] group">
        <Photo
          src="/images/hero.jpg"
          alt="Two travellers looking out over Khor Virap Monastery, Armenia"
          sizes="(min-width: 768px) 68vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/50 to-transparent md:via-cream/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-8 pt-16 lg:px-12">
        <Reveal delay={0.1}>
          <p className="eyebrow !text-muted">Two Explorers · Countless Stories</p>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="display mt-6 text-[64px] leading-[1.02] text-ink md:text-[88px]">
            Wanderers
            <br />
            at <span className="text-gold">50</span>
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-[390px] text-[14px] leading-relaxed text-muted">
            We believe that a place is not a trophy to be collected, but a story to
            be lived slowly, thoughtfully and in depth.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#journeys">Explore the Journeys</Button>
            <Button href="#story" variant="outline" arrow={false}>
              Our Story
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.8} direction="up" className="absolute bottom-10 left-8 lg:left-12">
          <div className="flex items-center gap-3">
            <span className="h-10 w-px bg-gold/60" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-muted">
              Scroll
            </span>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex items-end gap-2 text-right text-[12px] leading-tight text-white drop-shadow lg:right-12">
        <div>
          <p>Khor Virap Monastery</p>
          <p className="text-white/90">Armenia</p>
        </div>
        <PinIcon className="mb-0.5 h-3.5 w-3.5" />
      </div>
    </section>
  );
}
