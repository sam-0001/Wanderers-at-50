import Photo from "./Photo";
import { Button } from "./Buttons";
import { routeStops } from "./data";
import { Reveal } from "./Reveal";

const W = 540;
const H = 260;

export default function RouteSection() {
  return (
    <section className="relative overflow-hidden bg-cream-deep">
      {/* faint map texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 40%, rgba(168,118,44,0.10), transparent 55%), repeating-linear-gradient(115deg, rgba(168,118,44,0.05) 0 1px, transparent 1px 22px)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-8 py-16 md:grid-cols-[0.9fr_1.4fr] lg:px-12">
        <Reveal direction="right">
          <div>
            <p className="eyebrow">The Journey</p>
            <h2 className="display mt-4 text-[38px] leading-[1.1] text-ink">
              The Great Silk Route
              <br />
              &amp; Caucasus Odyssey
            </h2>
            <p className="mt-5 max-w-[360px] text-[13px] leading-relaxed text-muted">
              A 73-day overland journey across Kazakhstan, Uzbekistan, Armenia and
              Georgia — through ancient cities, caravan towns, mountain passes and
              timeless landscapes.
            </p>
            <Button href="#journeys" className="mt-7">
              Explore Full Route
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="left">
          <div
            className="relative mx-auto w-full max-w-[640px]"
            style={{ aspectRatio: `${W} / ${H}` }}
          >
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="absolute inset-0 h-full w-full"
              fill="none"
              aria-hidden
            >
              <path
                d="M10 150 C 40 120, 60 62, 95 62 S 150 150, 185 150 S 290 112, 335 112 S 420 118, 480 118 S 520 100, 535 90"
                stroke="#a8762c"
                strokeWidth="1.6"
                strokeDasharray="2 6"
                strokeLinecap="round"
              />
            </svg>

            {routeStops.map((s, idx) => (
              <div
                key={s.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(s.x / W) * 100}%`, top: `${(s.y / H) * 100}%` }}
              >
                <Reveal delay={0.4 + idx * 0.15} direction="up">
                  <div className="group relative h-[62px] w-[62px] overflow-hidden rounded-full border-[3px] border-white shadow-md ring-1 ring-gold/40">
                    <Photo src={s.img} alt={s.name} sizes="64px" />
                  </div>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center leading-tight ${
                      s.label === "top" ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
                    }`}
                  >
                    <p className="text-[11px] font-medium text-ink">{s.name}</p>
                    <p className="text-[10px] text-muted">{s.country}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
