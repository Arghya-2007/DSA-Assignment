"use client";

import { motion } from "framer-motion";

export function ViewQuestionsButton() {
  return (
    <motion.a
      href="#questions"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("questions")?.scrollIntoView({ behavior: "smooth" });
      }}
      whileHover={{ scale: 1.05, backgroundColor: "var(--bg-hover)" }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-[--bg-raised] border border-[--accent-line] text-[--text-primary] hover:text-[--accent-primary] hover:border-[--accent-primary] transition-colors font-medium w-fit text-lg cursor-pointer"
    >
      View Questions
    </motion.a>
  );
}
