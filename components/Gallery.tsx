import Photo from "./Photo";
import { Button } from "./Buttons";
import { ArrowRight } from "./Icons";
import { Reveal } from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-12">
      <div className="mx-auto grid max-w-[1280px] items-center gap-4 px-8 md:grid-cols-[1.9fr_1fr_0.85fr_0.9fr] lg:px-12">
        {/* Large — Lake Sevan */}
        <Reveal delay={0.1} direction="up" className="group relative h-[270px] overflow-hidden rounded-xl md:h-[285px]">
          <Photo
            src="/images/gallery-sevan.jpg"
            alt="Lake Sevan, Armenia"
            sizes="(min-width: 768px) 38vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white pointer-events-none">
            <div className="leading-tight">
              <p className="display text-[14px]">Lake Sevan</p>
              <p className="text-[11px] text-white/85">Armenia</p>
            </div>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Reveal>

        {/* Two stacked */}
        <div className="grid h-[285px] grid-rows-2 gap-4">
          <Reveal delay={0.2} direction="up" className="group relative overflow-hidden rounded-xl h-full">
            <Photo
              src="/images/gallery-mountain.jpg"
              alt="Snow-capped mountain range"
              sizes="(min-width: 768px) 20vw, 50vw"
            />
          </Reveal>
          <Reveal delay={0.3} direction="up" className="group relative overflow-hidden rounded-xl h-full">
            <Photo
              src="/images/gallery-sunset.jpg"
              alt="Sunset over the river ghats"
              sizes="(min-width: 768px) 20vw, 50vw"
            />
          </Reveal>
        </div>

        {/* Arch */}
        <Reveal delay={0.4} direction="up" className="group relative h-[285px] overflow-hidden rounded-xl">
          <Photo
            src="/images/gallery-arch.jpg"
            alt="Ornate tiled archway"
            sizes="(min-width: 768px) 17vw, 50vw"
          />
        </Reveal>

        {/* Text */}
        <Reveal delay={0.5} direction="left">
          <div className="md:pl-4">
            <p className="eyebrow !text-muted">Visual Archive</p>
            <h2 className="display mt-3 text-[32px] leading-[1.1] text-ink">
              From Our
              <br />
              Memory
            </h2>
            <p className="mt-4 text-[12px] leading-relaxed text-muted">
              Untamed moments, atmospheric dawns, and quiet architectural
              encounters.
            </p>
            <Button href="#gallery" className="mt-6 !px-5 !py-2.5 !text-[12px]">
              View Full Gallery
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
