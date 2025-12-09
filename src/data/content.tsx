
import { 
  Bot, Code2, Settings, Lightbulb
} from 'lucide-react';
import type { NavLink, ServiceData, CaseStudyData, BlogPostData } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', value: 'home' },
  { name: 'About', value: 'about' },
  { name: 'Services', value: 'services' },
  { name: 'Work', value: 'work' },
  { name: 'Blog', value: 'blog' },
  { name: 'Contact', value: 'contact' },
];

export const SERVICES: ServiceData[] = [
  {
    title: "AI & Automation",
    icon: <Bot className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Stop doing the same manual tasks over and over. We build intelligent automation that actually saves time.",
    capabilities: ["Workflow automation", "AI agents", "Data pipelines & ETL", "Intelligent dashboards", "Document processing"],
    target: "Ops teams, Agencies, SaaS companies"
  },
  {
    title: "Web & App Development",
    icon: <Code2 className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Fast, reliable websites and apps. No bloat, no month-long delays.",
    capabilities: ["Marketing websites", "Web applications (SaaS)", "Mobile-responsive design", "Performance optimization", "CMS integration"],
    target: "Startups, SMEs, Agencies"
  },
  {
    title: "Systems Integration",
    icon: <Settings className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Your tools should talk to each other. We make that happen without the mess.",
    capabilities: ["API development", "CRM/billing connections", "Third-party integrations", "Webhook setup", "Legacy modernization"],
    target: "SMEs, Enterprises, Tech teams"
  },
  {
    title: "Product Strategy",
    icon: <Lightbulb className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Not sure what to build, buy, or fix? We help you figure it out.",
    capabilities: ["Technical audits", "Build vs buy analysis", "Roadmap planning", "Tech stack evaluation", "Process optimization"],
    target: "Founders, CTOs, Product teams"
  }
];

export const CASE_STUDIES: CaseStudyData[] = [
  {
    title: "Reduced manual ops by 60% with custom automation",
    industry: "B2B SaaS",
    problem: "Customer onboarding required 10+ manual steps across 4 different tools.",
    solution: "Built a unified onboarding dashboard with automated workflows connecting Stripe, HubSpot, and internal systems.",
    outcome: "60% reduction in onboarding time, freed up 15 hours/week for the ops team.",
    tags: ["Automation", "API Integration", "Dashboard"]
  },
  {
    title: "Modernized legacy inventory system without downtime",
    industry: "Regional Grocery Chain",
    problem: "15-year-old inventory system couldn't scale, but they couldn't afford to shut down during migration.",
    solution: "Built a new API-first system that ran in parallel with the old one, gradually migrated data, trained staff in phases.",
    outcome: "Zero downtime migration, 40% faster stock updates, integrated with new suppliers.",
    tags: ["Systems Integration", "Legacy Modernization"]
  },
  {
    title: "Built real-time tracking portal in 6 weeks",
    industry: "Logistics & Delivery",
    problem: "Customers constantly calling for package status updates, support team overwhelmed.",
    solution: "Developed a customer-facing tracking portal with SMS notifications and API integration to their dispatch system.",
    outcome: "75% drop in support calls, customers can track shipments in real-time.",
    tags: ["Web App", "Real-time", "SMS Integration"]
  },
  {
    title: "Automated client reporting across 6 platforms",
    industry: "Marketing Agency",
    problem: "Team spent 20+ hours/month manually pulling data from Google Ads, Meta, Analytics, and other platforms.",
    solution: "Built an automated reporting system that pulls data from all platforms, generates custom reports, and sends them on schedule.",
    outcome: "Reporting time reduced from 20 hours to 2 hours/month, more consistent data.",
    tags: ["Automation", "Data Pipeline", "Reporting"]
  }
];

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: "when-to-use-ai",
    title: "When to use AI automation vs hiring more people",
    date: "November 15, 2025",
    tags: ["Automation", "Strategy", "AI"],
    description: "Not every problem needs more headcount. Here's how to figure out when automation makes sense and when it doesn't.",
    content: [
      { type: 'p', text: "The question comes up all the time: should we hire someone to do this, or should we automate it? The answer isn't always obvious. Hiring feels safer. Automation feels like a gamble." },
      { type: 'h3', text: "When automation makes sense" },
      { type: 'p', text: "Automation is a good fit when the task is repetitive and predictable. If you can document the steps clearly, you can probably automate it. It's perfect for high-volume, low-complexity tasks like moving data between tools." },
      { type: 'h3', text: "When hiring makes more sense" },
      { type: 'p', text: "Hiring is better when the task requires judgment. If every situation is different and needs human decision-making, automation won't cut it. Also, if the task involves relationships (Sales, Customer Success), you need humans." },
      { type: 'h3', text: "The hybrid approach" },
      { type: 'p', text: "Most of the time, the answer isn't 'automate everything' or 'hire a team.' It's a mix. Automate the data entry, hire someone to analyze the results." },
      { type: 'h3', text: "Our advice" },
      { type: 'p', text: "Start small. Pick one painful, repetitive task. Automate that. See if it works. If it saves time and doesn't create new headaches, do another one." }
    ]
  },
  {
    slug: "rewrite-system",
    title: "What we look at before rewriting a system",
    date: "October 22, 2025",
    tags: ["Engineering", "Strategy", "Systems"],
    description: "Rewrites are tempting. They're also risky and expensive. Here's how we decide if it's worth it.",
    content: [
      { type: 'p', text: "Every engineer has been there: you inherit a legacy system, look at the code, and think 'we should just rewrite this.' Sometimes that's true. Often it's not. Rewrites are expensive, slow, and risky." },
      { type: 'h3', text: "Questions we ask before recommending a rewrite" },
      { type: 'p', text: "1. What's actually broken? Be specific. 'The code is messy' isn't a good enough reason.\n2. Can we fix it incrementally? Most systems can be improved piece by piece.\n3. Do you understand why the old system is the way it is? Legacy code usually looks weird for a reason." },
      { type: 'h3', text: "When we do recommend a rewrite" },
      { type: 'p', text: "We'll recommend a rewrite when the system is genuinely holding you back, fixing it incrementally would cost more than starting over, and the team is committed." },
      { type: 'h3', text: "The alternative: strategic replacement" },
      { type: 'p', text: "Instead of a big-bang rewrite, we often recommend a strategic replacement. Build a new system alongside the old one. Migrate one feature at a time." }
    ]
  },
  {
    slug: "small-team",
    title: "Keeping a small, senior team on purpose",
    date: "September 10, 2025",
    tags: ["Team", "Philosophy", "Business"],
    description: "We're not trying to scale to 50 people. Here's why staying small is a feature, not a limitation.",
    content: [
      { type: 'p', text: "We get asked all the time: 'When are you going to scale up?' The answer is: we're not. We're staying small on purpose." },
      { type: 'h3', text: "Why small teams work better" },
      { type: 'p', text: "Big teams have overhead. Lots of it. You need managers to manage managers. Small teams move faster. Fewer people means less coordination, less miscommunication." },
      { type: 'h3', text: "Why we only hire senior people" },
      { type: 'p', text: "When you hire us, you're paying for experience. You're paying for people who've already made the mistakes and learned from them. You're not paying for us to train someone on your project." },
      { type: 'h3', text: "What this means for clients" },
      { type: 'p', text: "When you work with us, you get direct access to the people building your product and fast decision-making. You don't get unlimited capacity or rock-bottom pricing." }
    ]
  },
  {
    slug: "build-vs-buy",
    title: "How we decide what to build vs buy",
    date: "August 5, 2025",
    tags: ["Strategy", "Tools", "Decision-making"],
    description: "Should you build a custom solution or use an off-the-shelf tool? Here's our framework for making that call.",
    content: [
      { type: 'p', text: "One of the most common questions we get: 'Should we build this ourselves or just use [insert SaaS tool]?' The answer is almost always: it depends." },
      { type: 'h3', text: "When to buy" },
      { type: 'p', text: "Off-the-shelf tools are great when the problem is generic (email marketing, accounting) and speed matters more than customization." },
      { type: 'h3', text: "When to build" },
      { type: 'p', text: "Building makes sense when your workflow is unique, integration is critical, or you're doing something at scale where SaaS pricing becomes prohibitive." },
      { type: 'h3', text: "Our advice" },
      { type: 'p', text: "Default to buying. Most problems aren't unique enough to justify custom software. But if you're constantly fighting your tools, it might be time to build." }
    ]
  }
];
