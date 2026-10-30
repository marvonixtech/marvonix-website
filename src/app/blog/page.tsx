import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | AI Automation Guides for UK & India Businesses | Marvonix",
  description:
    "Practical guides on business process automation, AI workflow examples and agency pricing, written for UK and Indian businesses by the Marvonix team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Marvonix Blog | AI Automation Guides",
    description:
      "Practical guides on business process automation, AI workflow examples and agency pricing.",
    url: "https://marvonix.com/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Marvonix Blog",
    url: "https://marvonix.com/blog",
    publisher: { "@type": "Organization", name: "Marvonix", url: "https://marvonix.com" },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://marvonix.com/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="pt-20 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10">
            <p className="text-[13px] font-semibold tracking-[2px] uppercase text-muted-foreground font-[family-name:var(--font-outfit)] mb-4">
              The Marvonix Blog
            </p>
            <h1 className="text-[44px] sm:text-[60px] md:text-[80px] font-semibold tracking-[-2px] md:tracking-[-3px] text-foreground leading-[1.05] font-[family-name:var(--font-outfit)]">
              AI automation, explained plainly
            </h1>
            <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-[640px] leading-7 mt-6 font-[family-name:var(--font-outfit)]">
              Guides on connecting your tools, what automation really costs, and examples you can copy. Written for businesses in the UK and India.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="max-w-[1200px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col rounded-[20px] border border-border bg-card p-6 md:p-8 transition-colors hover:bg-secondary font-[family-name:var(--font-outfit)]"
              >
                <p className="text-[12px] font-semibold tracking-[2px] uppercase text-primary">{post.category}</p>
                <h2 className="mt-4 text-[22px] md:text-[24px] font-semibold tracking-[-0.5px] text-card-foreground leading-[1.25]">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[15px] text-muted-foreground leading-[1.7] flex-1">{post.description}</p>
                <p className="mt-6 text-[13px] text-muted-foreground">
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  {" · "}
                  {post.readingMinutes} min read
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
