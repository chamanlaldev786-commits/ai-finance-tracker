"use client";

import Link from "next/link";
import { Home, Wallet, Bot, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const nav = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: Wallet },
  { name: "AI Assistant", href: "/ai/assistant", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#020617] border-r border-white/10 p-6 hidden md:flex flex-col transition-all duration-500">

      {/* Logo / Brand */}
      <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10 select-none animate-pulse">
        AI Finance
      </h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        {nav.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400
                hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-400 hover:to-purple-500
                hover:text-black transition-all duration-300
                ${isActive ? "bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-black font-semibold shadow-lg" : ""}
              `}
            >
              <item.icon
                size={18}
                className={`${isActive ? "text-black" : "text-gray-400"} transition-colors duration-300`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="mt-auto pt-6 border-t border-white/10 text-gray-400 text-sm select-none">
        &copy; 2026 AI Finance Tracker
      </div>
    </aside>
  );
}
