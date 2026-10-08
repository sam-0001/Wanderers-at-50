import { stats } from "./data";
import { Reveal } from "./Reveal";

export default function Stats() {
  return (
    <section className="border-y border-line/70 bg-cream">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-8 py-8 md:grid-cols-4 lg:px-12">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.1 + i * 0.15} direction="up" className={`flex flex-col items-center py-2 text-center ${
            i > 0 ? "md:border-l md:border-line" : ""
          }`}>
            <div>
              <div className="display text-[34px] leading-none text-ink text-center">
                {s.value}
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-[0.22em] text-muted text-center">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
