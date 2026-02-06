"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-[#0f172a] via-[#020617] to-[#1e293b] backdrop-blur-md shadow-lg transition-all duration-500">

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl w-72 md:w-80 hover:bg-white/10 transition-colors duration-300">
        <Search size={18} className="text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search content..."
          className="bg-transparent outline-none text-sm text-gray-100 placeholder-gray-400 w-full transition-all duration-300"
        />
      </div>

      {/* Animated Title / Dashboard Info */}
      <div className="hidden md:flex items-center gap-6">
        <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <Typewriter
            words={["Welcome, User!", "Track Your Expenses", "AI Finance Assistant"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
          />
        </h1>
      </div>

      {/* User Avatar */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center font-bold text-black text-sm cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          U
        </div>
      </div>
    </header>
  );
}
