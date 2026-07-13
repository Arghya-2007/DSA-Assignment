"use client";

import { type HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type BadgeVariant = "accent" | "warm" | "muted";

interface BadgeProps extends HTMLMotionProps<"span"> {
  variant?: BadgeVariant;
  label?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  /** Mint — complexity/primary badge */
  accent: "bg-[--accent-primary]/10 text-[--accent-primary] border border-[--accent-primary]/25",
  /** Coral — secondary emphasis e.g. space complexity */
  warm:   "bg-[--accent-secondary]/10 text-[--accent-secondary] border border-[--accent-secondary]/25",
  /** Subdued — tags, categories */
  muted:  "bg-[--bg-raised] text-[--text-secondary] border border-[--accent-line]",
};

export function Badge({
  variant = "muted",
  label,
  className = "",
  children,
  ...rest
}: BadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={[
        "inline-flex items-center",
        "px-2 py-0.5",
        "rounded-sm",              /* small, not pill */
        "font-mono text-[--text-xs] font-medium",
        "tracking-wide uppercase",
        variantStyles[variant],
        className,
      ].join(" ")}
      {...rest}
    >
      {label ?? children}
    </motion.span>
  );
}
