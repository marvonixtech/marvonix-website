import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/FooterSection";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { BlogCta } from "@/components/blog/BlogCta";
import { formatPostDate, getAllPosts, getPost, getRelatedPosts, slugifyHeading } from "@/lib/blog";

const BASE_URL = "https://marvonix.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.metaTitle} | Marvonix`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: "Marvonix",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Marvonix"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const headings = post.body.flatMap((b) => (b.type === "h2" ? [b.text] : []));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
    author: { "@type": "Organization", name: "Marvonix", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Marvonix",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/images/marvonix-symbol.svg` },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <div className="bg-background min-h-screen overflow-x-clip">
      {[articleSchema, faqSchema, breadcrumbSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main className="pt-[72px]">
        <article className="pt-16 md:pt-24 pb-24 md:pb-32">
          <div className="max-w-[760px] mx-auto px-5 md:px-10 font-[family-name:var(--font-outfit)]">
            <nav aria-label="Breadcrumb" className="text-[14px] text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            </nav>

            <p className="text-[12px] font-semibold tracking-[2px] uppercase text-primary mb-4">{post.category}</p>
            <h1 className="text-[34px] sm:text-[44px] md:text-[56px] font-semibold tracking-[-1.2px] md:tracking-[-2px] text-foreground leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-6 text-[14px] text-muted-foreground">
              By Marvonix ·{" "}
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              {" · "}
              {post.readingMinutes} min read
            </p>

            <p className="mt-8 text-[19px] md:text-[21px] text-foreground leading-[1.7]">{post.intro}</p>

            <nav aria-label="In this article" className="mt-10 rounded-[16px] border border-border bg-card p-5 md:p-6">
              <p className="text-[12px] font-semibold tracking-[2px] uppercase text-muted-foreground mb-3">In this article</p>
              <ol className="space-y-2 text-[15px]">
                {headings.map((h) => (
                  <li key={h}>
                    <a href={`#${slugifyHeading(h)}`} className="text-foreground hover:text-primary transition-colors">
                      {h}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="text-foreground hover:text-primary transition-colors">Frequently asked questions</a>
                </li>
              </ol>
            </nav>

            <ArticleBody blocks={post.body} />

            <section aria-labelledby="faq" className="mt-14">
              <h2 id="faq" className="scroll-mt-24 text-[26px] md:text-[32px] font-semibold tracking-[-0.8px] text-card-foreground mb-6">
                Frequently asked questions
              </h2>
              <dl className="space-y-6">
                {post.faqs.map((f) => (
                  <div key={f.question} className="border-t border-border pt-5">
                    <dt className="text-[18px] font-semibold text-card-foreground">{f.question}</dt>
                    <dd className="mt-2 text-[16px] text-foreground leading-[1.75]">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <BlogCta />

            {related.length > 0 && (
              <section aria-labelledby="related" className="mt-16">
                <h2 id="related" className="text-[22px] font-semibold text-card-foreground mb-4">Keep reading</h2>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="text-[17px] text-primary underline underline-offset-4 hover:opacity-80">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
}
