# Eco-Pathways

Website for **Eco-Pathways LLC** — composite docks, walkovers, and golf-cart bridges.

Built with [Next.js](https://nextjs.org) (App Router), React, TypeScript, and Tailwind CSS v4. Deployed on Vercel at **[eco-pathways.vercel.app](https://eco-pathways.vercel.app)**.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/` — pages (App Router)
- `components/` — shared UI (`Header`, `Footer`, `EstimateForm`, `LogoMark`, `ui.tsx`)
- `lib/` — site config (`site.ts`) and image map (`images.ts`)
- `public/images/` — locally hosted assets (no external CDN dependency)
- `app/globals.css` — Tailwind v4 theme tokens

## Contact form

The "Request an Estimate" form uses [Web3Forms](https://web3forms.com). Set the access key in `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-key-here
```

See `.env.local.example` for details. Without a key, the form falls back to a `mailto:` link.

## Deployment

Pushes to `main` deploy automatically to Vercel.
