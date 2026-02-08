# QuantumBridge Innovations Website

A polished marketing and job portal site for **QuantumBridge Innovations**, based on the HLD, LLD, and Architecture documents in the `design/` folder.

## What’s included

- **Homepage**: Hero, IT Services grid (5 categories), Talent Outsourcing, About snippet, Jobs CTA, Contact CTA
- **Services**: Managed IT, Cloud Solutions, Cybersecurity, IT Consulting, Software Development
- **Hire Talent**: Staff augmentation and dedicated teams
- **About**: Company story and approach
- **Contact**: Form and quick links
- **Jobs**: Listing and detail pages (mock data; ready to connect to API)

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom theme: brand teal, accent gold, cream/sand)
- **Fonts**: Outfit (body), Syne (display)

## Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Design alignment

- Responsive breakpoints: mobile (320–767px), tablet (768–1023px), desktop (1024px+)
- Clear hierarchy and WCAG-friendly contrast
- Smooth scroll, hover states, and light animations
- Ready to plug in REST API for jobs, applications, and auth per the HLD/LLD
