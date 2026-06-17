# Marvonix — AI Automation Agency Website

Official website for **Marvonix**, an AI automation agency that helps SMEs and growing businesses streamline operations, save time, and boost efficiency with custom-built AI workflows.

**Live site:** [marvonix.com](https://marvonix.com)

## About Marvonix

Marvonix builds custom AI automation systems tailored to your business — from lead generation pipelines and AI chatbots to CRM integrations and data processing workflows. We make your business smarter, faster, and leaner without adding headcount.

**Founded:** 2023  
**Founders:** Manish Vaghamshi & Meet Domadiya  
**Area served:** United Kingdom & India

## Pages

- `/` — Home (Hero, Process, Services, Case Studies, Testimonials, ROI Calculator, FAQ, Contact)
- `/about-us` — Team, values, story, and anti-beliefs
- `/legal-pages/privacy-policy` — Privacy Policy
- `/legal-pages/terms-and-conditions` — Terms & Conditions

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives + Tailwind CSS v4)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Icons:** Lucide React + custom SVG icons
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint check
npm run typecheck  # TypeScript check
npm run check      # Run lint + typecheck + build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Key variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email address |
| `NEXT_PUBLIC_CONTACT_PHONE` | Display phone number |
| `NEXT_PUBLIC_CONTACT_PHONE_HREF` | WhatsApp number (digits only) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_BRAND_NAME` | Brand name |
| `NEXT_PUBLIC_LOCATIONS` | Office locations (comma-separated `Label|Display` pairs) |
| `SMTP_USER` | Gmail address for contact form emails |
| `SMTP_PASSWORD` | Gmail App Password |

## Project Structure

```
src/
  app/                    # Next.js routes
  components/             # Page section components
    about/                # About page components
    ui/                   # shadcn/ui primitives
    icons.tsx             # Custom SVG icons
  lib/
    siteConfig.ts         # Brand, contact & social config
    utils.ts              # cn() utility
  context/                # React context (modal state)
  types/                  # TypeScript interfaces
public/
  images/                 # Brand and client images
  seo/                    # Favicon and OG assets
```

## Contact

- **Email:** support@marvonix.com
- **Phone / WhatsApp:** +44 7570 312715
- **LinkedIn:** [linkedin.com/company/marvonix](https://www.linkedin.com/company/marvonix)
- **Instagram:** [instagram.com/marvonix.tech](https://www.instagram.com/marvonix.tech)
- **X / Twitter:** [x.com/marvonix](https://x.com/marvonix)

## License

MIT
