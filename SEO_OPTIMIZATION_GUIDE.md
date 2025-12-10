# MARVONIX Website - SEO Optimization Guide

**Comprehensive SEO Strategy & Implementation Plan**  
*Prepared: December 2025*

---

## 📋 Table of Contents

1. [Per-Page SEO Documentation](#per-page-seo-documentation)
2. [Global SEO Recommendations](#global-seo-recommendations)
3. [Technical SEO Enhancements](#technical-seo-enhancements)
4. [Implementation Priority Timeline](#implementation-priority-timeline)

---

## 📌 Per-Page SEO Documentation

### **1. Home Page** (`/`)

#### Meta Data
```html
<title>MARVONIX - AI Automation & Software Engineering Services</title>
<meta name="description" content="Boutique software engineering firm specializing in AI automation, web development, and systems integration. Direct access to senior engineers who ship quality solutions.">
```

#### Open Graph & Social
```html
<meta property="og:title" content="MARVONIX - AI Automation & Software Engineering Services">
<meta property="og:description" content="Calm systems for teams that hate chaos. We help companies automate workflows, ship better software, and scale without the mess.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://marvonix.com/">
<meta property="og:image" content="https://marvonix.com/og-image.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="MARVONIX - AI Automation & Software Engineering">
<meta name="twitter:description" content="Calm systems for teams that hate chaos. Direct access to senior engineers.">
<meta name="twitter:image" content="https://marvonix.com/twitter-card.jpg">
```

#### Heading Structure
- **H1**: "Calm systems for teams that hate chaos." ✅ (Current - Perfect)
- **H2**: "What we do" → Change to: **"Services built around what you actually need"** (more keyword-rich)
- **H2**: "How we work" → Keep as is
- **H2**: "Why MARVONIX" → Change to: **"What makes us different from other engineering firms"**
- **H2**: "Have a project in mind?" → Keep as is (CTA)

#### Keywords Strategy
**Primary Keywords:**
- AI automation services
- software engineering firm
- custom automation development
- systems integration services
- web & app development

**Secondary Keywords:**
- boutique software agency
- senior software engineers
- workflow automation company
- AI-driven development services
- product engineering consultants

**Search Intent:** Transactional + Informational (Service discovery)

#### Content Improvements
**Current:** "MARVONIX helps companies automate workflows, ship better software, and scale without the mess."

**Optimized (subtle):** "MARVONIX helps companies automate workflows, build scalable software, and integrate systems without the mess. You get direct access to senior engineers who actually ship."

*(Added "integrate systems" for keyword coverage, "senior engineers" for ranking)*

#### Internal Links to Add
- Link "AI & Automation" service card → `/services#ai-automation`
- Link "Web & App Development" → `/services#web-development`
- Link "Systems Integration" → `/services#integration`
- Link "Product Strategy" → `/services#strategy`
- Add "Read our approach" link in "How we work" section → `/about`
- Add "See what we've built" in services section → `/work`

#### External Authoritative Links
- None needed for home page (keep focus internal)

#### Schema Markup (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MARVONIX",
  "url": "https://marvonix.com",
  "logo": "https://marvonix.com/logo.png",
  "description": "Boutique software engineering firm specializing in AI automation, web development, and systems integration.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://twitter.com/marvonix",
    "https://github.com/marvonixtech"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://marvonix.com/contact"
  },
  "areaServed": "Worldwide",
  "serviceType": [
    "AI Automation",
    "Web Development",
    "Systems Integration",
    "Product Strategy"
  ]
}
```

#### Image Alt Text Recommendations
- Logo: `alt="MARVONIX - Software Engineering and AI Automation Services"`
- Service icons: `alt="AI automation icon"`, `alt="Web development icon"`, etc.
- Case study images (if added): `alt="[Client] automation dashboard screenshot"`

---

### **2. About Page** (`/about`)

#### Meta Data
```html
<title>About MARVONIX - Senior Software Engineering Team</title>
<meta name="description" content="Small, senior software engineering team focused on AI automation and custom development. We're the engineers you wish were on your team.">
```

#### Open Graph
```html
<meta property="og:title" content="About MARVONIX - Senior Software Engineering Team">
<meta property="og:description" content="We started MARVONIX because too many good ideas get stuck in bad processes. Small teams, direct communication, clear priorities.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://marvonix.com/about">
```

#### Heading Structure
- **H1**: "We're the engineers you wish were on your team." ✅ (Perfect - keep)
- **H2**: Add before "What we believe" → **"Why we exist"**
- **H3**: "What we believe" ✅
- **H2**: "How we operate" ✅

#### Keywords Strategy
**Primary Keywords:**
- senior software engineering team
- boutique development agency
- direct access to engineers
- small software team

**Secondary Keywords:**
- experienced software engineers
- long-term software partnerships
- engineering-first development
- transparent software consulting

**Search Intent:** Informational (Learning about the company)

#### Content Improvements
**Minimal changes needed - the voice is authentic and strong.**

**Current opening:** "We started MARVONIX because too many good ideas get stuck in bad processes."

**Optimized (keep as is - it's perfect)**

Add after first paragraph:
> "We're a small team of senior software engineers specializing in AI automation, custom web applications, and systems integration. We work with ambitious companies that need more than generic solutions."

*(Adds keyword coverage without changing tone)*

#### Internal Links to Add
- "We help you monitor, debug, and refine" → link to `/services` or `/contact`
- Add CTA at bottom: "Ready to work with us?" → `/contact`
- Link "production systems" → `/work` (case studies)

#### External Authoritative Links
- None needed (keep internal focus)

#### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About MARVONIX",
  "description": "Small, senior software engineering team focused on building calm, reliable systems.",
  "mainEntity": {
    "@type": "Organization",
    "name": "MARVONIX",
    "description": "Boutique software engineering firm",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "Small team"
    }
  }
}
```

---

### **3. Services Page** (`/services`)

#### Meta Data
```html
<title>Software Engineering Services - AI, Automation & Integration | MARVONIX</title>
<meta name="description" content="AI automation, custom web development, systems integration, and product strategy. No packages—we solve your specific engineering problems.">
```

#### Open Graph
```html
<meta property="og:title" content="Software Engineering Services - AI, Automation & Integration">
<meta property="og:description" content="AI automation, web development, systems integration, and product strategy. We solve problems, not sell packages.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://marvonix.com/services">
```

#### Heading Structure
- **H1**: "We solve problems. Here's how." ✅ (Keep - strong)
- **H2**: "AI & Automation" (add service name as H2 for each)
- **H2**: "Web & App Development"
- **H2**: "Systems Integration"
- **H2**: "Product Strategy"
- **H2**: "Not sure what you need?" ✅

#### Keywords Strategy
**Primary Keywords:**
- AI automation services
- custom web development
- systems integration consulting
- product strategy consulting
- workflow automation solutions

**Secondary Keywords:**
- intelligent automation development
- API integration services
- legacy system modernization
- technical audit services
- SaaS application development

**Search Intent:** Transactional (Service evaluation + purchase intent)

#### Content Improvements
**Add brief intro after eyebrow/title:**

> "We specialize in four core areas: AI-driven automation, custom web and app development, systems integration, and strategic product consulting. Here's what each involves."

**Service-specific H2s for SEO:**
Each service card should have:
```html
<h2 id="ai-automation">AI & Automation</h2>
<h2 id="web-development">Web & App Development</h2>
<h2 id="integration">Systems Integration</h2>
<h2 id="strategy">Product Strategy</h2>
```

#### Internal Links to Add
- Each service → Link to relevant case studies in `/work`
  - "AI & Automation" → link to "Reduced manual ops by 60%" case
  - "Systems Integration" → link to "Modernized legacy inventory" case
  - "Web Development" → link to "Built real-time tracking portal" case
  - "Product Strategy" → link to `/blog/build-vs-buy`
- "Start a Conversation" CTA → `/contact`

#### External Authoritative Links
- Consider linking "Workflow automation" to authoritative source (e.g., McKinsey automation reports)
- Link "API development" to REST API documentation standards

#### Schema Markup (Service Schema)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development Services",
  "provider": {
    "@type": "Organization",
    "name": "MARVONIX"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & Automation",
          "description": "Intelligent automation that saves time, including workflow automation, AI agents, and data pipelines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web & App Development",
          "description": "Fast, reliable websites and applications with no bloat."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Systems Integration",
          "description": "API development, CRM connections, and legacy modernization."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Strategy",
          "description": "Technical audits, build vs buy analysis, and roadmap planning."
        }
      }
    ]
  }
}
```

---

### **4. Work/Portfolio Page** (`/work`)

#### Meta Data
```html
<title>Case Studies & Portfolio - Real Problems Solved | MARVONIX</title>
<meta name="description" content="See how MARVONIX helped companies automate operations, modernize legacy systems, and build scalable web applications. Real engineering solutions.">
```

#### Open Graph
```html
<meta property="og:title" content="Case Studies & Portfolio - Real Problems Solved">
<meta property="og:description" content="Automation, legacy modernization, real-time tracking, and data pipelines. Real problems we've solved.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://marvonix.com/work">
```

#### Heading Structure
- **H1**: "Real problems we've solved." ✅ (Keep)
- **H2**: Each case study title should be H2 (add to component)
  - "Reduced manual ops by 60% with custom automation"
  - "Modernized legacy inventory system without downtime"
  - "Built real-time tracking portal in 6 weeks"
  - "Automated client reporting across 6 platforms"

#### Keywords Strategy
**Primary Keywords:**
- automation case studies
- legacy system modernization
- custom software solutions
- workflow automation examples

**Secondary Keywords:**
- API integration case study
- real-time web application
- automated reporting system
- SaaS automation examples

**Search Intent:** Informational + Transactional (Proof of capability)

#### Content Improvements
**Add brief intro after title:**
> "We've worked with B2B SaaS companies, regional retailers, logistics firms, and marketing agencies. Below are examples of complex engineering challenges we've solved."

**Each case study should have:**
- Industry tag (already present ✅)
- Clearer H2 for SEO (currently H3)
- Link to related service

#### Internal Links to Add
- Each case → link to relevant service page
  - "60% automation" → `/services#ai-automation`
  - "Legacy modernization" → `/services#integration`
  - "Real-time portal" → `/services#web-development`
  - "Automated reporting" → `/services#ai-automation`
- CTA "Start a Project" → `/contact`
- Link "Read more about our process" → `/about`

#### External Authoritative Links
- None needed (internal focus for conversions)

#### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Case Studies",
  "description": "Real problems solved by MARVONIX engineering team",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "name": "Reduced manual ops by 60% with custom automation",
        "description": "B2B SaaS customer onboarding automation",
        "genre": "Case Study"
      }
    ]
  }
}
```

---

### **5. Contact Page** (`/contact`)

#### Meta Data
```html
<title>Contact MARVONIX - Start Your Software Project</title>
<meta name="description" content="Tell us what you're trying to fix. We respond within 1-2 business days. Start a conversation with our senior engineering team.">
```

#### Open Graph
```html
<meta property="og:title" content="Contact MARVONIX - Start Your Software Project">
<meta property="og:description" content="Tell us what you're trying to fix. We usually reply within 1–2 business days.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://marvonix.com/contact">
```

#### Heading Structure
- **H1**: "Tell us what you're trying to fix." ✅ (Perfect)
- **H2**: Add above form → **"Get in touch with our team"**
- **H3**: "What happens next?" ✅

#### Keywords Strategy
**Primary Keywords:**
- contact software engineers
- start software project
- software development consultation
- engineering team contact

**Secondary Keywords:**
- custom automation inquiry
- software project quote
- engineering consultation request

**Search Intent:** Transactional (High conversion intent)

#### Content Improvements
**Add after H1:**
> "Whether you need AI automation, custom development, or systems integration, we're here to help. Fill out the form below and we'll get back to you within 1-2 business days."

*(Adds service keywords without changing tone)*

#### Internal Links to Add
- "Not sure what you need?" → link to `/services`
- "See examples of our work" → link to `/work`
- "Learn about our process" → link to `/about`

#### External Authoritative Links
- None needed

#### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact MARVONIX",
  "description": "Get in touch with MARVONIX software engineering team",
  "mainEntity": {
    "@type": "Organization",
    "name": "MARVONIX",
    "email": "hello@marvonix.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": "English"
    }
  }
}
```

---

### **6. Blog Listing Page** (`/blog`)

#### Meta Data
```html
<title>Engineering Blog - Automation, Systems & Strategy | MARVONIX</title>
<meta name="description" content="Practical insights on AI automation, software development, and building better systems. No fluff—just what works.">
```

#### Open Graph
```html
<meta property="og:title" content="Engineering Blog - Automation, Systems & Strategy">
<meta property="og:description" content="Thoughts on building better systems. Practical insights on automation and software development.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://marvonix.com/blog">
```

#### Heading Structure
- **H1**: "Thoughts on building better systems." ✅ (Keep)
- **H2**: Each blog post title (add as H2 in card)

#### Keywords Strategy
**Primary Keywords:**
- software engineering blog
- automation insights
- systems integration articles
- software development tips

**Secondary Keywords:**
- AI automation best practices
- engineering team management
- build vs buy decisions
- legacy system rewrite

**Search Intent:** Informational (Learning + Authority building)

#### Internal Links to Add
- Each post → link to relevant service
- Add "Explore our services" CTA → `/services`
- "Work with us" CTA → `/contact`

#### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "MARVONIX Engineering Blog",
  "description": "Practical insights on automation, software development, and building better systems",
  "url": "https://marvonix.com/blog",
  "blogPost": [...]
}
```

---

### **7. Individual Blog Posts** (`/blog/:slug`)

#### Meta Data Template
**Post 1: "When to use AI automation vs hiring more people"**
```html
<title>When to Use AI Automation vs Hiring More People | MARVONIX</title>
<meta name="description" content="Not every problem needs more headcount. Learn when automation makes sense and when hiring is the better choice for your business.">
```

**Post 2: "What we look at before rewriting a system"**
```html
<title>Should You Rewrite Your Legacy System? A Decision Framework</title>
<meta name="description" content="Rewrites are expensive and risky. Here's how we decide if rewriting a legacy system is worth it or if incremental fixes are better.">
```

**Post 3: "Keeping a small, senior team on purpose"**
```html
<title>Why We Keep a Small, Senior Engineering Team on Purpose</title>
<meta name="description" content="We're staying small intentionally. Learn why small senior teams move faster and deliver better results than large junior teams.">
```

**Post 4: "How we decide what to build vs buy"**
```html
<title>Build vs Buy: A Framework for Custom Software Decisions</title>
<meta name="description" content="Should you build custom software or use off-the-shelf tools? Our framework for making smart build vs buy decisions.">
```

#### Keywords per Post
**Post 1:**
- Primary: AI automation vs hiring, when to automate, automation ROI
- Secondary: workforce automation, hiring vs automation decision

**Post 2:**
- Primary: legacy system rewrite, system modernization, software rewrite decision
- Secondary: incremental refactoring, technical debt management

**Post 3:**
- Primary: small engineering team, senior software team, team scaling
- Secondary: boutique development agency, remote engineering team

**Post 4:**
- Primary: build vs buy software, custom software decision, SaaS vs custom
- Secondary: software procurement, development cost analysis

#### Internal Links per Post
**Post 1:** Link to `/services#ai-automation`, `/work` (automation case study)
**Post 2:** Link to `/services#integration`, `/about` (our process)
**Post 3:** Link to `/about`, `/contact`
**Post 4:** Link to `/services#strategy`, `/contact`

#### External Authoritative Links
**Post 1:** 
- McKinsey automation reports
- Harvard Business Review on workforce automation

**Post 2:**
- Martin Fowler on refactoring
- Joel Spolsky "Things You Should Never Do" (rewrite risks)

**Post 4:**
- Gartner software procurement guides
- SaaS pricing comparison resources

#### Schema Markup (BlogPosting)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "When to use AI automation vs hiring more people",
  "description": "Not every problem needs more headcount. Here's how to figure out when automation makes sense.",
  "author": {
    "@type": "Organization",
    "name": "MARVONIX"
  },
  "publisher": {
    "@type": "Organization",
    "name": "MARVONIX",
    "logo": {
      "@type": "ImageObject",
      "url": "https://marvonix.com/logo.png"
    }
  },
  "datePublished": "2025-11-15",
  "dateModified": "2025-11-15",
  "mainEntityOfPage": "https://marvonix.com/blog/when-to-use-ai",
  "keywords": ["AI automation", "hiring decisions", "workflow automation"],
  "articleSection": "Automation"
}
```

---

### **8. Privacy Policy** (`/privacy`)

#### Meta Data
```html
<title>Privacy Policy | MARVONIX</title>
<meta name="description" content="MARVONIX privacy policy. Learn how we collect, use, and protect your data.">
<meta name="robots" content="noindex, follow">
```

#### Notes
- Add `noindex` to prevent indexing (not valuable for SEO)
- Keep content as is (already clear and compliant)

---

### **9. Terms & Conditions** (`/terms`)

#### Meta Data
```html
<title>Terms & Conditions | MARVONIX</title>
<meta name="description" content="MARVONIX terms of service and website usage conditions.">
<meta name="robots" content="noindex, follow">
```

#### Notes
- Add `noindex` (not SEO-valuable)
- Keep content as is

---

## 🌐 Global SEO Recommendations

### **1. Site-Wide Meta Tags (Add to index.html)**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Favicon & Brand -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    
    <!-- Primary Meta Tags (will be overridden per page) -->
    <title>MARVONIX - AI Automation & Software Engineering Services</title>
    <meta name="title" content="MARVONIX - AI Automation & Software Engineering Services">
    <meta name="description" content="Boutique software engineering firm specializing in AI automation, web development, and systems integration. Direct access to senior engineers.">
    <meta name="keywords" content="AI automation, software engineering, systems integration, custom development, web applications">
    <meta name="author" content="MARVONIX">
    
    <!-- Canonical URL (dynamic per page) -->
    <link rel="canonical" href="https://marvonix.com/" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://marvonix.com/">
    <meta property="og:title" content="MARVONIX - AI Automation & Software Engineering Services">
    <meta property="og:description" content="Calm systems for teams that hate chaos. We help companies automate workflows, ship better software, and scale without the mess.">
    <meta property="og:image" content="https://marvonix.com/og-image.jpg">
    <meta property="og:site_name" content="MARVONIX">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://marvonix.com/">
    <meta property="twitter:title" content="MARVONIX - AI Automation & Software Engineering">
    <meta property="twitter:description" content="Calm systems for teams that hate chaos. Direct access to senior engineers.">
    <meta property="twitter:image" content="https://marvonix.com/twitter-card.jpg">
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow">
    <meta name="googlebot" content="index, follow">
    <meta name="theme-color" content="#1A3CE4">
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    
    <script type="module" src="/src/main.tsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### **2. React Helmet Setup**

Install `react-helmet-async` for dynamic meta tags:

```bash
npm install react-helmet-async
```

Then create a reusable SEO component:

```tsx
// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  ogImage = '/og-image.jpg',
  keywords,
  noindex = false 
}) => {
  const fullTitle = title.includes('MARVONIX') ? title : `${title} | MARVONIX`;
  const url = canonical || `https://marvonix.com${window.location.pathname}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {noindex && <meta name="robots" content="noindex, follow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`https://marvonix.com${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://marvonix.com${ogImage}`} />
    </Helmet>
  );
};
```

**Usage in pages:**

```tsx
// Home.tsx
import { SEO } from '../components/SEO';

const Home: React.FC = () => (
  <>
    <SEO 
      title="MARVONIX - AI Automation & Software Engineering Services"
      description="Boutique software engineering firm specializing in AI automation, web development, and systems integration. Direct access to senior engineers who ship quality solutions."
      keywords="AI automation, software engineering, systems integration, custom development"
    />
    {/* rest of component */}
  </>
);
```

### **3. Sitemap Configuration**

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://marvonix.com/</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://marvonix.com/about</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://marvonix.com/services</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://marvonix.com/work</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://marvonix.com/blog</loc>
    <lastmod>2025-11-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://marvonix.com/blog/when-to-use-ai</loc>
    <lastmod>2025-11-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://marvonix.com/blog/rewrite-system</loc>
    <lastmod>2025-10-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://marvonix.com/blog/small-team</loc>
    <lastmod>2025-09-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://marvonix.com/blog/build-vs-buy</loc>
    <lastmod>2025-08-05</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://marvonix.com/contact</loc>
    <lastmod>2025-12-09</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Disallow: /privacy
Disallow: /terms

Sitemap: https://marvonix.com/sitemap.xml
```

### **4. Internal Linking Strategy**

**Header Navigation:**
- Home → About → Services → Work → Blog → Contact ✅ (already good)

**Footer Links:** ✅ (already comprehensive)

**Content Links (Add these):**
- **Home → Services:** Each service card should link to `/services#[service-id]`
- **Home → Work:** "View Our Work" button ✅
- **Services → Work:** Each service links to relevant case study
- **Work → Services:** Each case study links back to service
- **Blog → Services:** Each blog post links to 1-2 relevant services
- **Blog → Work:** Link to case studies when relevant
- **About → Contact:** Add CTA "Ready to work with us?"

**Breadcrumb Navigation (Add):**
- Work page: Home > Work
- Blog post: Home > Blog > [Post Title]
- Services: Home > Services

### **5. Semantic HTML Improvements**

**Add semantic roles:**

```tsx
// App.tsx or main layout
<body>
  <header role="banner">
    <Navbar />
  </header>
  
  <main role="main" id="main-content">
    {/* page content */}
  </main>
  
  <footer role="contentinfo">
    <Footer />
  </footer>
</body>
```

**Accessible navigation:**

```tsx
// Navbar.tsx
<nav aria-label="Primary navigation">
  {/* nav links */}
</nav>
```

**Skip to main content link:**

```tsx
// Add at top of App
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## ⚙️ Technical SEO Enhancements

### **1. Performance Optimization**

#### Image Optimization
- **Convert images to WebP format** (smaller file sizes)
- **Implement lazy loading:** `<img loading="lazy" />`
- **Add responsive images:**
  ```html
  <img 
    srcset="image-320w.webp 320w, image-640w.webp 640w, image-1024w.webp 1024w"
    sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1024px"
    src="image.webp"
    alt="descriptive text"
  />
  ```

#### Core Web Vitals Improvements

**Largest Contentful Paint (LCP):**
- Preload hero images: `<link rel="preload" as="image" href="/hero.webp">`
- Use font-display: swap for custom fonts
- Minimize CSS blocking time

**First Input Delay (FID):**
- Code-split React components using `React.lazy()`
- Defer non-critical JavaScript
- Use Web Workers for heavy computations

**Cumulative Layout Shift (CLS):**
- Define width/height for all images
- Reserve space for dynamic content
- Avoid inserting content above existing content

**Vite-specific optimizations:**

```ts
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': ['./src/components/ui'],
        },
      },
    },
  },
  plugins: [
    react(),
    // Add image optimization plugin
  ],
});
```

### **2. Caching Strategy**

**Add to Vite config:**

```ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: 'entries/[name].[hash].js',
      },
    },
  },
});
```

**Service Worker (optional):**
- Cache static assets
- Offline fallback page
- Background sync for form submissions

### **3. JSON-LD Schema Implementation**

Create a schema component:

```tsx
// src/components/StructuredData.tsx
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  </Helmet>
);
```

**Add to each page:**

```tsx
// Home.tsx
<StructuredData data={{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MARVONIX",
  // ... rest of schema
}} />
```

### **4. Accessibility (A11y) Enhancements**

**ARIA labels:**
```tsx
<button aria-label="Open mobile menu">
  <Menu />
</button>
```

**Focus management:**
```tsx
// Ensure keyboard navigation works
<a href="/services" className="focus:ring-2 focus:ring-blue-500">
  Services
</a>
```

**Color contrast:**
- Ensure all text meets WCAG AA standards (4.5:1 ratio)
- Test with accessibility tools

### **5. Mobile Optimization**

**Viewport meta (already present ✅)**

**Touch targets:**
- Minimum 44x44px for buttons
- Adequate spacing between links

**Mobile-first CSS:**
```css
/* Already using Tailwind mobile-first ✅ */
```

---

## 📅 Implementation Priority Timeline

### **Week 1: Critical SEO Foundations**

**Priority: HIGH**

- [ ] Install `react-helmet-async`
- [ ] Create SEO component (`src/components/SEO.tsx`)
- [ ] Add SEO component to all 9 pages with proper meta tags
- [ ] Update `index.html` with base meta tags
- [ ] Create `public/sitemap.xml`
- [ ] Create `public/robots.txt`
- [ ] Add favicon and og-image assets
- [ ] Implement canonical URLs

**Impact:** Immediate indexing improvements, proper social sharing

---

### **Week 2: Content & Structure Optimization**

**Priority: HIGH**

- [ ] Add H2 tags to service cards on home page
- [ ] Add service IDs for anchor links (`#ai-automation`, etc.)
- [ ] Convert case study titles to H2 tags
- [ ] Add breadcrumb navigation component
- [ ] Add "Skip to main content" link
- [ ] Implement semantic HTML roles (`<main>`, `<nav role="banner">`)
- [ ] Add internal links as specified in each page section
- [ ] Add alt text to all images and icons

**Impact:** Better crawlability, improved user experience

---

### **Week 3: Structured Data & Rich Snippets**

**Priority: MEDIUM**

- [ ] Create `StructuredData` component
- [ ] Add Organization schema to Home page
- [ ] Add Service schema to Services page
- [ ] Add BlogPosting schema to all blog posts
- [ ] Add AboutPage schema to About page
- [ ] Add ContactPage schema to Contact page
- [ ] Test all schemas with Google Rich Results Test

**Impact:** Rich snippets in search results, better CTR

---

### **Week 4: Performance & Core Web Vitals**

**Priority: MEDIUM**

- [ ] Convert all images to WebP format
- [ ] Implement lazy loading for images
- [ ] Add responsive image srcsets
- [ ] Preload critical assets (hero images, fonts)
- [ ] Code-split React components with `React.lazy()`
- [ ] Implement manual chunks in Vite config
- [ ] Define explicit width/height for all images
- [ ] Test Core Web Vitals with Lighthouse

**Impact:** Better rankings, improved user experience

---

### **Week 5: External Links & Authority Building**

**Priority: LOW-MEDIUM**

- [ ] Add authoritative external links to blog posts
- [ ] Create link to McKinsey automation report (Blog Post 1)
- [ ] Link to Martin Fowler refactoring article (Blog Post 2)
- [ ] Add references to industry resources
- [ ] Implement `rel="noopener noreferrer"` for external links
- [ ] Create backlink strategy document

**Impact:** E-A-T signals, authority building

---

### **Week 6: Analytics & Monitoring**

**Priority: MEDIUM**

- [ ] Set up Google Search Console
- [ ] Submit sitemap to GSC
- [ ] Set up Google Analytics 4
- [ ] Implement event tracking for CTAs
- [ ] Set up conversion goals (form submissions)
- [ ] Create custom dashboards for SEO metrics
- [ ] Install Bing Webmaster Tools
- [ ] Monitor Core Web Vitals in CrUX

**Impact:** Data-driven optimization

---

### **Week 7-8: Content Expansion**

**Priority: LOW**

- [ ] Write 2-3 additional blog posts
  - "How to evaluate software agencies"
  - "AI automation ROI calculator guide"
  - "Common systems integration challenges"
- [ ] Add more detailed case studies (with client permission)
- [ ] Create "Resources" page with tools/guides
- [ ] Build downloadable lead magnets (e.g., "Automation Readiness Checklist")
- [ ] Add FAQ section to services page

**Impact:** Long-tail keyword coverage, lead generation

---

### **Ongoing Monthly Tasks**

- [ ] Monitor keyword rankings (Ahrefs/SEMrush)
- [ ] Analyze search console performance reports
- [ ] Update blog with 1-2 new posts per month
- [ ] Refresh case studies with new projects
- [ ] Monitor and fix broken links
- [ ] Update sitemap with new content
- [ ] Review and update meta descriptions based on CTR data
- [ ] Conduct competitor SEO analysis
- [ ] Build high-quality backlinks (guest posts, partnerships)

---

## 🎯 Expected Outcomes

### **Month 1-2:**
- Google indexing all pages
- Proper rich snippets appearing
- Improved CTR from meta description optimization
- Core Web Vitals in "Good" range

### **Month 3-4:**
- Ranking for branded keywords (MARVONIX + service terms)
- Traffic increase from organic search (20-30%)
- Improved bounce rate from better content structure
- Featured in related searches

### **Month 6+:**
- Ranking for non-branded keywords (e.g., "AI automation services UK")
- Consistent blog traffic from long-tail keywords
- High domain authority from quality backlinks
- Converting organic traffic to leads

---

## 📊 Keyword Ranking Priorities

### **Primary Target Keywords (High Priority)**

1. **AI automation services** (Monthly searches: ~1,600)
2. **Custom software development** (Monthly searches: ~5,400)
3. **Systems integration consulting** (Monthly searches: ~880)
4. **Workflow automation company** (Monthly searches: ~720)
5. **Product engineering consultants** (Monthly searches: ~320)

### **Secondary Target Keywords (Medium Priority)**

1. **Legacy system modernization** (Monthly searches: ~590)
2. **API integration services** (Monthly searches: ~1,300)
3. **Software engineering firm UK** (Monthly searches: ~260)
4. **Build vs buy software** (Monthly searches: ~480)
5. **Senior software engineers** (Monthly searches: ~2,900)

### **Long-Tail Keywords (Quick Wins)**

1. **When to automate vs hire** (Low competition)
2. **How to modernize legacy systems** (Low competition)
3. **Small software development team** (Low competition)
4. **AI workflow automation tools** (Medium competition)
5. **Custom automation development** (Low competition)

---

## ✅ Quality Checklist

Before launch, verify:

- [ ] All pages have unique meta titles (60-65 chars)
- [ ] All pages have unique meta descriptions (130-150 chars)
- [ ] All images have descriptive alt text
- [ ] All internal links work correctly
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is configured correctly
- [ ] Schema markup validates without errors
- [ ] Mobile responsiveness works perfectly
- [ ] Page load speed < 3 seconds
- [ ] No broken links (404s)
- [ ] HTTPS is enforced
- [ ] Canonical URLs are correct
- [ ] Social sharing cards display properly

---

## 🚀 Quick Win Actions (Do These First)

1. **Update `index.html` with proper meta tags** (30 min)
2. **Install react-helmet-async and create SEO component** (1 hour)
3. **Add SEO component to all pages** (2 hours)
4. **Create and upload sitemap.xml** (30 min)
5. **Add alt text to all images** (1 hour)
6. **Implement internal links on home page** (30 min)

**Total time:** ~5.5 hours for immediate SEO impact

---

## 📝 Notes

- **Voice preservation:** All recommendations maintain your authentic, no-BS tone
- **No keyword stuffing:** Natural integration only
- **User-first:** SEO serves UX, not the other way around
- **Realistic expectations:** Rankings take 3-6 months for competitive keywords
- **Ongoing effort:** SEO is not "set and forget"—monthly maintenance required

---

**Document prepared by:** GitHub Copilot  
**Date:** December 9, 2025  
**Next review:** January 9, 2026
