"use client";

import { motion } from "framer-motion";

export function HeroTitle() {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-[5rem] leading-none font-display font-bold tracking-tighter text-[--text-primary] relative inline-block">
      Arghya Pal
      {/* Subtle continuous motion: a thin animated underline */}
      <motion.span 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        className="absolute -bottom-2 left-0 w-full h-[2px] bg-[--accent-primary] origin-left"
      ></motion.span>
    </h1>
  );
}
