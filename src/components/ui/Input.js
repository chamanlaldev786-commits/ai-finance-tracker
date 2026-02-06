"use client";

export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`
        w-full p-4 rounded-2xl
        bg-white/10 backdrop-blur-sm
        text-[var(--foreground)] placeholder:text-[var(--text-muted)]
        border border-transparent
        focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-offset-2
        hover:bg-white/20 hover:shadow-inner
        transition-all duration-300
        outline-none
        ${className}
      `}
    />
  );
}
