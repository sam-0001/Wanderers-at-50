// Generates neutral placeholder SVGs in /public/images.
// Replace any file with a real photo (same name, .jpg) and update the path in components/data.ts.
import { mkdirSync, writeFileSync } from "node:fs";

const items = [
  // name, width, height, c1, c2, label
  ["hero", 1200, 900, "#c9b79b", "#6f7f93", "Hero — couple at Khor Virap"],
  ["silk-route", 800, 1100, "#2f6f8f", "#c8a46a", "Silk Route"],
  ["whispers-india", 800, 1100, "#e49a4a", "#3c5a73", "Whispers of India"],
  ["indianization", 800, 1100, "#5f7f4a", "#9aa58a", "Indianization"],
  ["node-astana", 200, 200, "#7a9bb5", "#c9b79b", "Astana"],
  ["node-samarkand", 200, 200, "#3e8aa8", "#d1b27a", "Samarkand"],
  ["node-yerevan", 200, 200, "#b88a66", "#7f8fa0", "Yerevan"],
  ["node-tbilisi", 200, 200, "#6e8f5a", "#c1a77a", "Tbilisi"],
  ["couple", 900, 700, "#b4586b", "#5f7aa3", "Our story"],
  ["north-india", 600, 900, "#6f8fb0", "#4f7a4a", "North India"],
  ["south-india", 600, 900, "#4f9a8a", "#d1b27a", "South India"],
  ["west-india", 600, 900, "#d38a5a", "#8f6a8a", "West India"],
  ["east-india", 600, 900, "#6aa05a", "#9ab08a", "East India"],
  ["gallery-sevan", 1000, 700, "#4f86b8", "#9cb4c8", "Lake Sevan"],
  ["gallery-mountain", 800, 400, "#8fa5c0", "#d8dde6", "Mountains"],
  ["gallery-sunset", 800, 500, "#e08a4a", "#6a5a73", "Sunset"],
  ["gallery-arch", 600, 1000, "#2f7a9a", "#c8a46a", "Arch"],
  ["contact-banner", 900, 400, "#c9a06a", "#6f8399", "Contact banner"],
];

mkdirSync("public/images", { recursive: true });

for (const [name, w, h, c1, c2, label] of items) {
  const fs = Math.max(14, Math.round(Math.min(w, h) / 14));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
        font-family="system-ui, sans-serif" font-size="${fs}" fill="#ffffff" fill-opacity="0.75">${label}</text>
</svg>
`;
  writeFileSync(`public/images/${name}.svg`, svg);
}

console.log(`Wrote ${items.length} placeholders to public/images`);
