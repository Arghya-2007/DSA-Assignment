"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="p-8 flex flex-col gap-4 items-center justify-center min-h-screen bg-[--bg-base] text-[--text-primary]">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p className="text-[--text-secondary]">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-[--accent-primary] text-[--bg-base] rounded"
      >
        Try again
      </button>
    </div>
  );
}
