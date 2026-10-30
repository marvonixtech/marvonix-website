import type { BlogPost } from "./types";
import { businessProcessAutomationServices } from "./posts/business-process-automation-services";
import { aiAutomationAgencyPricingUkIndia } from "./posts/ai-automation-agency-pricing-uk-india";
import { customAiWorkflowAutomationExamplesSmallTeams } from "./posts/custom-ai-workflow-automation-examples-small-teams";

export type { BlogBlock, BlogFaq, BlogPost } from "./types";

const posts: BlogPost[] = [
  businessProcessAutomationServices,
  aiAutomationAgencyPricingUkIndia,
  customAiWorkflowAutomationExamplesSmallTeams,
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related.flatMap((slug) => {
    const found = getPost(slug);
    return found ? [found] : [];
  });
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
