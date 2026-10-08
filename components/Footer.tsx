import Logo from "./Logo";
import { nav } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-5 px-8 py-5 md:flex-row lg:px-12">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-7">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] text-ink/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-[10px] text-muted">
          © 2026 Wanderers at 50. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
