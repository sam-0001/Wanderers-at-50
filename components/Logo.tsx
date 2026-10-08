export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`block leading-none ${className}`}>
      <span className="display block text-[22px] text-ink">
        Wanderers <span className="text-[19px] text-muted">at 50</span>
      </span>
      <span className="mt-1 block text-[7.5px] uppercase tracking-[0.24em] text-muted">
        A Slow Travel Journal
      </span>
    </a>
  );
}
