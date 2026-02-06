"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-6xl font-extrabold gradient-text">404</h1>
      <p className="text-xl text-[var(--text-muted)] text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn-primary px-6 py-3 rounded-xl"
      >
        Go Back Home
      </Link>
    </div>
  );
}
