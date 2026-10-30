export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; text: string };

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** <title> tag, kept under ~60 characters */
  metaTitle: string;
  /** Meta description, kept under ~155 characters */
  description: string;
  category: string;
  keywords: string[];
  /** ISO date, YYYY-MM-DD */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  intro: string;
  body: BlogBlock[];
  faqs: BlogFaq[];
  /** Slugs of related posts */
  related: string[];
}
