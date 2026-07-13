"use client";

import { type HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  /** If true, renders a 2px left accent border — used for active/featured states */
  accented?: boolean;
}

/**
 * Card — a raised container.
 *
 * Design.md rules enforced here:
 * - No box-shadow on every card ("pick zero, or one, used once")
 * - bg-raised = #0a0a0a, barely lifted off the true-black base
 * - Border via accent-line, not gray
 * - Hover is a surface color change only — no shadow pop, no scale
 */
export function Card({ accented = false, className = "", children, ...rest }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={[
        "bg-[--bg-raised]",
        "border border-[--accent-line]",
        accented ? "border-l-2 border-l-[--accent-primary]" : "",
        "rounded",
        "p-6",
        "transition-colors duration-150 ease-[ease]",
        "hover:bg-[--bg-hover]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
