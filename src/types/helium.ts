export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatarSrc?: string;
  cardStyle?: "photo" | "text-green" | "text-dark";
}

export interface ServiceCard {
  title: string;
  description: string;
  mockupType: "lead-gen" | "data" | "chatbot" | "workflow" | "integrations";
}

export interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  imageSrc: string;
  href: string;
  accentColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
