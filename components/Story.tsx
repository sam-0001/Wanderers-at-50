import Photo from "./Photo";
import { Button } from "./Buttons";
import { FootprintIcon, HeartHandsIcon, ColumnIcon } from "./Icons";
import { values } from "./data";
import { Reveal } from "./Reveal";

const icons = [FootprintIcon, HeartHandsIcon, ColumnIcon];

export default function Story() {
  return (
    <section id="story" className="bg-cream py-14 overflow-hidden">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-8 md:grid-cols-[1.1fr_1fr_0.55fr] lg:px-12">
        <Reveal direction="left">
          <div className="group relative h-[340px] overflow-hidden rounded-xl md:h-[360px]">
            <Photo
              src="/images/couple.jpg"
              alt="The two wanderers seated in a courtyard"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div>
            <p className="eyebrow !text-muted">Our Story</p>
            <h2 className="display mt-3 text-[34px] leading-[1.1] text-ink">
              Our Journey Began
              <br />
              at Fifty
            </h2>
            <p className="mt-5 max-w-[360px] text-[12.5px] leading-relaxed text-muted">
              When we turned fifty, we realized that the corporate rush and tourist
              shortcuts no longer spoke to us. We wanted to understand the dust on
              the caravan trails, the echoes of the prayer inside remote monasteries,
              and the direct gaze of the shopkeepers in distant bazaar towns.
            </p>
            <Button href="#story" className="mt-6">
              Read Our Story
            </Button>
          </div>
        </Reveal>

        <ul className="space-y-7 border-line md:border-l md:pl-8">
          {values.map((v, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={v.title} delay={0.3 + i * 0.1} direction="right">
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-paper text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[10px] text-gold">{v.n}</p>
                    <p className="mt-1 text-[12.5px] text-ink">{v.title}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
