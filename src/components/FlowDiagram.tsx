"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { id: "in", cx: 120, cy: 84, tag: "01 · DATA IN", title: "New enquiry" },
  { id: "decide", cx: 360, cy: 84, tag: "02 · DECISION", title: "AI qualifies it" },
  { id: "act", cx: 360, cy: 264, tag: "03 · EXECUTION", title: "Systems update" },
  { id: "out", cx: 120, cy: 264, tag: "04 · RESULT", title: "Logged. Handled." },
] as const;

const W = 176;
const H = 96;
const DURATION = 7;
const TIMES = [0, 0.3, 0.6, 0.9];

export function FlowDiagram({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const cx = NODES.map((n) => n.cx);
  const cy = NODES.map((n) => n.cy);

  return (
    <svg
      viewBox="0 0 480 348"
      role="img"
      aria-label="Automation flow: data comes in, AI decides, systems execute, the result is logged automatically"
      className={className}
    >
      {/* blueprint connectors */}
      <g className="stroke-border" strokeWidth="1.5" fill="none" strokeDasharray="4 5">
        <path d={`M${120 + W / 2} 84 H${360 - W / 2}`} />
        <path d={`M360 ${84 + H / 2} V${264 - H / 2}`} />
        <path d={`M${360 - W / 2} 264 H${120 + W / 2}`} />
      </g>

      {/* crosshair marks */}
      {[
        [240, 84],
        [360, 174],
        [240, 264],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} className="stroke-primary" strokeWidth="1.5">
          <path d={`M${x - 5} ${y}H${x + 5}M${x} ${y - 5}V${y + 5}`} />
        </g>
      ))}

      {NODES.map((n, i) => (
        <g key={n.id}>
          <rect
            x={n.cx - W / 2}
            y={n.cy - H / 2}
            width={W}
            height={H}
            rx="14"
            className="fill-card stroke-border"
            strokeWidth="1.5"
          />
          {/* active ring, lit when the signal arrives */}
          <motion.rect
            x={n.cx - W / 2}
            y={n.cy - H / 2}
            width={W}
            height={H}
            rx="14"
            fill="none"
            className="stroke-primary"
            strokeWidth="2"
            initial={{ opacity: reduce && i === 0 ? 1 : 0 }}
            animate={reduce ? undefined : { opacity: [0, 1, 0.9, 0, 0] }}
            transition={
              reduce
                ? undefined
                : {
                    duration: DURATION,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [Math.max(TIMES[i] - 0.06, 0), TIMES[i], TIMES[i] + 0.12, Math.min(TIMES[i] + 0.22, 1), 1],
                  }
            }
          />
          <text x={n.cx - W / 2 + 16} y={n.cy - 10} className="fill-primary" fontSize="10.5" letterSpacing="1.4" fontFamily="var(--font-geist-mono), monospace">
            {n.tag}
          </text>
          <text x={n.cx - W / 2 + 16} y={n.cy + 16} className="fill-foreground" fontSize="18" fontWeight="600" fontFamily="var(--font-outfit), sans-serif">
            {n.title}
          </text>
        </g>
      ))}

      {/* travelling signal */}
      {!reduce && (
        <motion.circle
          r="5"
          className="fill-primary"
          initial={{ cx: cx[0], cy: cy[0], opacity: 0 }}
          animate={{ cx, cy, opacity: 1 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "easeInOut", times: TIMES }}
        />
      )}
    </svg>
  );
}
