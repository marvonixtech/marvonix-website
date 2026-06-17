export interface LocationEntry {
  label: string;
  display: string;
}

function parseLocations(raw: string | undefined): LocationEntry[] {
  if (!raw) return [];
  return raw.split(",").flatMap((entry) => {
    const parts = entry.trim().split("|");
    if (parts.length < 2) return [];
    return [{ label: parts[0].trim(), display: parts[1].trim() }];
  });
}

export const siteConfig = {
  brand: process.env.NEXT_PUBLIC_BRAND_NAME ?? "Marvonix",

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@marvonix.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+44 7570 312715",
    phoneHref: `https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_HREF ?? "447570312715"}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? "Hi! I'd like to learn more about your services.")}`,
    emailHref: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@marvonix.com"}`,
  },

  locations: parseLocations(process.env.NEXT_PUBLIC_LOCATIONS) as LocationEntry[],

  social: {
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "https://linkedin.com",
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "https://instagram.com",
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER ?? "https://x.com",
    reddit: process.env.NEXT_PUBLIC_SOCIAL_REDDIT ?? "https://reddit.com",
  },
} as const;
