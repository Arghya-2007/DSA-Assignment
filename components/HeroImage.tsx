"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="relative group"
    >
      {/* Offset border accent */}
      <div className="absolute top-6 left-6 w-full h-full border border-[--accent-line] bg-[--bg-raised] -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-1"></div>
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-[--accent-line]">
        <Image
          src="/images/profile.jpg"
          alt="Arghya"
          fill
          className="object-cover hover:scale-105 hover:grayscale-0 transition-all duration-700 ease-out grayscale-[50%]"
          priority
        />
      </div>
    </motion.div>
  );
}
