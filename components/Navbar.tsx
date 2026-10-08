import Logo from "./Logo";
import { nav } from "./data";

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-8 lg:px-12">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-2 text-[12px] text-ink/80 transition-colors hover:text-gold ${
                i === 0 ? "text-ink" : ""
              }`}
            >
              {item.label}
              {i === 0 && (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gold" />
              )}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gold px-6 py-2.5 text-[12px] font-medium text-white transition-colors hover:bg-gold-dark"
        >
          Contact Now
        </a>
      </div>
    </header>
  );
}
