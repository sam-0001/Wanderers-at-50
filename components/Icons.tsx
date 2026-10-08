import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

/* Story values */
export const FootprintIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 4c2 0 3 2 3 4.5S9.8 12 8 12 5 10.5 5 8s1-4 3-4Z" />
    <path d="M7 15h3v2.5a1.5 1.5 0 0 1-3 0V15Z" />
    <path d="M16 9c2 0 3 2 3 4.5S17.800 17 16 17s-3-1.500-3-4 1-4 3-4Z" />
    <path d="M15 20h3" />
  </svg>
);

export const HeartHandsIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20s-7-4.300-7-9.500A3.800 3.800 0 0 1 12 8a3.800 3.800 0 0 1 7 2.500C19 15.700 12 20 12 20Z" />
  </svg>
);

export const ColumnIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20h16M5 9h14M12 4 4 9M12 4l8 5M7 9v11M12 9v11M17 9v11" />
  </svg>
);

/* Travel tips */
export const PassportIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.500" />
    <path d="M12 4v4.500M12 15.500V20M4 12h4.500M15.500 12H20" />
  </svg>
);

export const TrainIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="6" y="3.500" width="12" height="13" rx="3" />
    <path d="M6 11h12M9 20l1.500-3.500M15 20l-1.500-3.500" />
    <circle cx="9.500" cy="14" r=".6" />
    <circle cx="14.500" cy="14" r=".6" />
  </svg>
);

export const CurrencyIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 5h4M5 19h4M15 5h4M15 19h4M5 5v4M5 19v-4M19 5v4M19 19v-4" />
    <path d="M12 8v8M9.800 10.200c.5-.8 1.300-1.200 2.200-1.200 1.400 0 2.200.8 2.200 1.700S13.400 12 12 12s-2.200.600-2.200 1.600.900 1.600 2.200 1.600c1 0 1.800-.5 2.200-1.200" />
  </svg>
);

export const CompassIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.500" />
    <path d="m15.500 8.500-2 5-5 2 2-5 5-2Z" />
  </svg>
);

export const ForkIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 3v8M5.500 3v5a2.500 2.500 0 0 0 5 0V3M8 11v10M17 3c-2 2-3 4.500-3 7.500h3V21" />
  </svg>
);

export const BagIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 8h10l1.500 12h-13L7 8Z" />
    <path d="M9 8V6.500a3 3 0 0 1 6 0V8M9 12.500h6" />
  </svg>
);
