"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ErrorPage({ error: initialError }) {
  const [error, setError] = useState(initialError || "Something went wrong!");

  // Log error to console (or future AI logger)
  useEffect(() => {
    console.error("ErrorPage caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-5xl font-bold gradient-text">Error</h1>
      <p className="text-[var(--text-muted)] text-center">{error.toString()}</p>
      <Link
        href="/"
        className="btn-primary px-6 py-3 rounded-xl"
      >
        Go Back Home
      </Link>
    </div>
  );
}
