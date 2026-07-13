"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  currentSlug?: string;
  assignments: { id: number; title: string; slug: string; }[];
}

export function Sidebar({ currentSlug, assignments }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navContent = (
    <nav className="flex flex-col gap-4 w-full shrink-0">
      <Link 
        href="/"
        className="flex items-center gap-2 text-[--text-secondary] hover:text-[--accent-primary] transition-colors px-3 py-2 text-[--text-sm] font-medium"
      >
        <motion.svg whileHover={{ x: -4 }} transition={{ type: "spring" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </motion.svg>
        Back to Home
      </Link>
      <h2 className="text-[--text-xs] uppercase tracking-wider text-[--text-secondary] font-semibold px-3 mt-2">
        Assignments
      </h2>
      <ul className="flex flex-col gap-1 pb-12">
        {assignments.map((assignment, i) => {
          const isActive = currentSlug === assignment.slug;
          return (
            <motion.li 
              key={assignment.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
            >
              <Link 
                href={`/question/${assignment.slug}`}
                onClick={() => setIsOpen(false)}
                className={[
                  "block px-3 py-2 text-[--text-sm] transition-colors duration-150 ease-[ease]",
                  isActive 
                    ? "text-[--accent-primary] border-l-2 border-l-[--accent-primary] font-medium bg-[--accent-primary]/5" 
                    : "text-[--text-secondary] border-l-2 border-l-transparent hover:text-[--text-primary]"
                ].join(" ")}
              >
                {assignment.title}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-40">
        <span className="font-display font-medium text-[--text-primary] tracking-tight">DSA Showcase</span>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 -mr-2 text-[--text-secondary] hover:text-[--text-primary] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-black/60 backdrop-blur-2xl border-r border-white/10 shadow-2xl p-6 z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-semibold tracking-tight text-[--text-primary]">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-[--text-secondary] hover:text-[--text-primary] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block lg:w-64 shrink-0 p-8 border-r border-white/5 bg-black/40 backdrop-blur-xl min-h-screen lg:sticky lg:top-0 overflow-y-auto">
        {navContent}
      </aside>
    </>
  );
}
