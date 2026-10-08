import { TextLink } from "./Buttons";
import {
  PassportIcon,
  TrainIcon,
  CurrencyIcon,
  CompassIcon,
  ForkIcon,
  BagIcon,
} from "./Icons";
import { tips } from "./data";
import { Reveal } from "./Reveal";

const icons = [PassportIcon, TrainIcon, CurrencyIcon, CompassIcon, ForkIcon, BagIcon];

export default function TravelTips() {
  return (
    <section id="tips" className="bg-cream py-12">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-8 md:grid-cols-[0.8fr_2fr] lg:px-12">
        <Reveal direction="right">
          <div>
            <p className="eyebrow !text-muted">Practical Guide</p>
            <h2 className="display mt-3 text-[34px] leading-[1.1] text-ink">
              Field Notes
              <br />
              &amp; Travel Tips
            </h2>
            <p className="mt-4 max-w-[260px] text-[12.5px] leading-relaxed text-muted">
              Hard-won practicalities from overland routes, remote borders and high
              passes.
            </p>
            <TextLink href="#tips" className="mt-5">
              Explore all tips
            </TextLink>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={t.n} delay={0.1 + i * 0.1} direction="up" className="h-full w-full">
                <a
                  href="#tips"
                  className="flex h-full w-full items-center gap-4 rounded-xl border border-line/80 bg-paper px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-colors hover:border-gold/50"
                >
                  <Icon className="h-6 w-6 shrink-0 text-gold" />
                  <div className="leading-tight">
                    <p className="text-[10px] text-gold">{t.n}</p>
                    <p className="mt-1 text-[12.5px] text-ink">{t.title}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
