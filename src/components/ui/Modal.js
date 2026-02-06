"use client";

import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) onClose?.();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          bg-gradient-to-tr from-[#111827]/90 to-[#1e293b]/90
          backdrop-blur-lg
          rounded-2xl
          shadow-2xl
          max-w-md w-full p-6
          animate-fadeIn
          border border-white/10
          transition-transform duration-300
          hover:scale-[1.02]
        "
      >
        {children}
      </div>
    </div>
  );
}
