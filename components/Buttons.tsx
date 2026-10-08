import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  arrow = true,
  className = "",
}: Props) {
  const styles =
    variant === "solid"
      ? "bg-gold text-white hover:bg-gold-dark"
      : "border border-gold/60 text-ink hover:bg-gold/10";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 rounded-full px-6 py-3 text-[13px] font-medium transition-colors ${styles} ${className}`}
    >
      {children}
      {arrow && <ArrowRight className="h-3.5 w-3.5" />}
    </a>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 text-[13px] text-gold transition-colors hover:text-gold-dark ${className}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}
