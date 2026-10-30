import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

/** Renders **bold**, *italic* and [text](/internal-link) inside blog copy. */
export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = text.split(TOKEN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-card-foreground">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={i} href={link[2]} className="text-primary underline underline-offset-4 hover:opacity-80">
          {link[1]}
        </Link>
      );
    }
    return part;
  });
  return <>{nodes}</>;
}
