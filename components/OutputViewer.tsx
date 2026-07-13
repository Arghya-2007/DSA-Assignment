"use client";

import { useState } from "react";

interface OutputViewerProps {
  imagePath: string;
  altText: string;
}

export function OutputViewer({ imagePath, altText }: OutputViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="cursor-pointer overflow-hidden rounded border border-[--accent-line] transition-opacity hover:opacity-80"
        onClick={() => setIsOpen(true)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imagePath} alt={altText} className="w-full h-auto block" />
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-[--bg-base]/80 backdrop-blur-sm" />
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-250 ease-out rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={imagePath} 
              alt={altText} 
              className="w-full h-auto object-contain rounded border border-[--accent-line] shadow-2xl" 
            />
            <button 
              className="absolute top-4 right-4 text-[--text-secondary] hover:text-[--text-primary] transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
