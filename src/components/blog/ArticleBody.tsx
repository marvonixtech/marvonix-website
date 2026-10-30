import type { BlogBlock } from "@/lib/blog";
import { slugifyHeading } from "@/lib/blog";
import { InlineText } from "./InlineText";

const bodyFont = "font-[family-name:var(--font-outfit)]";

export function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className={bodyFont}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(block.text)}
                className="scroll-mt-24 text-[26px] md:text-[32px] font-semibold tracking-[-0.8px] text-card-foreground leading-[1.2] mt-14 mb-4"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-[20px] md:text-[22px] font-semibold text-card-foreground mt-8 mb-3">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[17px] text-foreground leading-[1.8] mb-5">
                <InlineText text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 mb-6 space-y-3 marker:text-primary">
                {block.items.map((item) => (
                  <li key={item} className="text-[17px] text-foreground leading-[1.75] pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 mb-6 space-y-3 marker:text-primary marker:font-semibold">
                {block.items.map((item) => (
                  <li key={item} className="text-[17px] text-foreground leading-[1.75] pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="mb-8 overflow-x-auto rounded-[16px] border border-border">
                <table className="w-full min-w-[520px] text-left text-[15px]">
                  <thead className="bg-muted">
                    <tr>
                      {block.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 font-semibold text-card-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]} className="border-t border-border align-top">
                        {row.map((cell, c) => (
                          <td key={c} className={c === 0 ? "px-4 py-3 font-medium text-card-foreground" : "px-4 py-3 text-foreground"}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside key={i} className="mb-8 rounded-[16px] border border-border bg-muted p-5 md:p-6 text-[16px] leading-[1.75] text-foreground">
                <InlineText text={block.text} />
              </aside>
            );
        }
      })}
    </div>
  );
}
