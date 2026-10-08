import Photo from "./Photo";
import { TextLink } from "./Buttons";
import { ArrowRight } from "./Icons";
import { regions } from "./data";
import { Reveal } from "./Reveal";

export default function IndiaRegions() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-8 md:grid-cols-[0.8fr_2fr] lg:px-12">
        <Reveal direction="right">
          <div>
            <p className="eyebrow !text-muted">Whispers of India</p>
            <h2 className="display mt-3 text-[34px] leading-[1.1] text-ink">
              India in Many
              <br />
              Layers
            </h2>
            <p className="mt-4 max-w-[270px] text-[12.5px] leading-relaxed text-muted">
              Four regions, countless stories — from the Himalayas to the
              backwaters, from desert forts to eastern monasteries.
            </p>
            <TextLink href="#journeys" className="mt-5">
              Explore all regions
            </TextLink>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {regions.map((r, idx) => (
            <Reveal key={r.name} delay={0.2 + idx * 0.1} direction="up" className="h-[270px]">
              <a
                href="#journeys"
                className="group relative block h-full w-full overflow-hidden rounded-xl"
              >
                <Photo
                  src={r.img}
                  alt={r.name}
                  sizes="(min-width: 768px) 17vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3.5 text-white">
                  <span className="display text-[16px]">{r.name}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
