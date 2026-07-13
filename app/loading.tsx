"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] gap-6">
      <motion.div 
        className="flex gap-3"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        initial="initial"
        animate="animate"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-5 h-5 rounded-full bg-[--accent-primary]"
            variants={{
              initial: { y: 0, scale: 0.5, opacity: 0.3 },
              animate: { 
                y: [-20, 0, -20], 
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 1, 0.3] 
              }
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-[--text-secondary] font-mono text-sm tracking-widest uppercase"
      >
        Processing...
      </motion.p>
    </div>
  );
}
