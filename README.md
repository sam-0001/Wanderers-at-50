# Wanderers at 50

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 landing page.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Replacing the placeholder images

Every photo is a gradient placeholder in `public/images/*.svg`. To use a real photo,
drop it into `public/images/` (e.g. `hero.jpg`) and change the path in
`components/data.ts` (most sections) or directly in `components/Hero.tsx`,
`components/Story.tsx`, `components/Gallery.tsx` and `components/Contact.tsx`.

Run `npm run placeholders` to regenerate the placeholders.

## Theme

Colors and fonts are defined in `app/globals.css` under `@theme`
(cream, gold, ink; Newsreader for headings, DM Sans for body).
