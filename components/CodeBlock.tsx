"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  // Override the default theme background
  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      background: "var(--code-bg)",
      margin: 0,
    },
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      background: "transparent",
    },
  };

  return (
    <div className="rounded border border-[--accent-line] overflow-hidden bg-[--code-bg]">
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        customStyle={{
          padding: "1.5rem",
          fontSize: "var(--text-sm)",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          lineHeight: "1.6",
          background: "transparent",
        }}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
        lineProps={(lineNumber) => {
          const delay = Math.min(lineNumber * 15, 300);
          return {
            style: {
              display: "block",
              animation: `fadeInLine 0.4s ease-out forwards`,
              animationDelay: `${delay}ms`,
              opacity: 0,
            },
            className: "motion-reduce:animate-none motion-reduce:opacity-100",
          };
        }}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: "var(--text-tertiary)",
          textAlign: "right",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
