import Photo from "./Photo";
import { TextLink } from "./Buttons";
import { ArrowRight } from "./Icons";
import { journeys } from "./data";
import { Reveal } from "./Reveal";

export default function FeaturedJourneys() {
  return (
    <section id="journeys" className="bg-cream py-16">
      <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
        <Reveal direction="up">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow !text-muted">Featured Journeys</p>
              <h2 className="display mt-3 text-[40px] leading-tight text-ink">
                Journeys of a Lifetime
              </h2>
            </div>
            <TextLink href="#journeys">View all journeys</TextLink>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.6fr_1.15fr_1fr]">
          {journeys.map((j, idx) => (
            <Reveal key={j.n} delay={0.1 + idx * 0.1} direction="up" className="group relative h-[440px] overflow-hidden rounded-xl">
              <article className="h-full w-full">
              <Photo
                src={j.img}
                alt={j.title}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 p-5 text-white">
                <span className="display pb-1 text-[22px] text-white/80">
                  {j.n}
                </span>
                <div className="flex-1">
                  <h3 className="display text-[20px] leading-snug">{j.title}</h3>
                  <p className="mt-2 max-w-[260px] text-[11px] leading-relaxed text-white/80">
                    {j.text}
                  </p>
                </div>
                <a
                  href="#journeys"
                  aria-label={`Open ${j.title}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-gold hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
