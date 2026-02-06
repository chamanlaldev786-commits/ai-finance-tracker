"use client";

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 space-y-6">

      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-t-green-400 border-b-blue-400 border-l-purple-400 border-r-pink-400 rounded-full animate-spin"></div>

      {/* Text */}
      <h1 className="text-2xl font-bold gradient-text animate-gradient">
        Loading AI Finance Tracker...
      </h1>
      <p className="text-[var(--text-muted)] text-center max-w-sm">
        Please wait while we prepare your dashboard and insights.
      </p>

    </div>
  );
}
