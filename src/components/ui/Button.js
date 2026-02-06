"use client";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`
        px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-300
        bg-gradient-to-r from-green-400 via-blue-400 to-purple-500
        text-black/90 hover:from-purple-500 hover:via-blue-400 hover:to-green-400
        hover:scale-[1.05] hover:shadow-lg active:scale-95
        backdrop-blur-sm bg-white/10
        focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
