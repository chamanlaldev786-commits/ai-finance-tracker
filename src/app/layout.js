// ❌ DO NOT use "use client" here
import "./globals.css";

import { Providers } from "@/components/Providers";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "AI Finance Tracker",
  description:
    "Track expenses, manage investments, and get AI-powered financial insights.",
  authors: [{ name: "Chaman Lal" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
        <Providers>

          {/* Hidden checkbox for mobile toggle */}
          <input
            type="checkbox"
            id="sidebar-toggle"
            className="hidden"
          />

          {/* HEADER */}
          <Header />

          {/* MOBILE BURGER BUTTON */}
          <label
            htmlFor="sidebar-toggle"
            className="
              md:hidden
              fixed
              top-4
              left-4
              z-50
              bg-white
              shadow-lg
              rounded-lg
              px-3
              py-2
              cursor-pointer
              text-xl
            "
          >
            ☰
          </label>

          {/* OVERLAY (Mobile only) */}
          <label
            htmlFor="sidebar-toggle"
            className="
              fixed
              inset-0
              bg-black
              bg-opacity-40
              z-30
              hidden
              peer-checked:block
              md:hidden
            "
          ></label>

          {/* MAIN LAYOUT WRAPPER */}
          <div className="flex min-h-screen">

            {/* SIDEBAR */}
            <div
              className="
                fixed
                top-0
                left-0
                h-full
                w-72
                bg-white
                shadow-xl
                z-40
                transform
                -translate-x-full
                transition-transform
                duration-300
                ease-in-out
                
                md:translate-x-0
                md:static
                md:flex
              "
            >
              <Sidebar />
            </div>

            {/* MAIN CONTENT AREA */}
            <main
              className="
                flex-1
                md:ml-72
                p-4
                transition-all
                duration-300
              "
            >
              {children}
            </main>
          </div>

          {/* FOOTER */}
          <Footer />

          {/* FLOATING HOME BUTTON */}
          <div
            className="
              fixed
              bottom-6
              right-6
              bg-white
              bg-opacity-80
              backdrop-blur-md
              p-3
              rounded-full
              shadow-lg
              hover:bg-opacity-100
              transition
              duration-300
              cursor-pointer
            "
          >
            <Link href="/" className="text-indigo-600">
              Home
            </Link>
          </div>

          {/* PURE CSS TOGGLE CONTROL */}
          <style>
            {`
              #sidebar-toggle:checked ~ div .fixed {
                transform: translateX(0);
              }
            `}
          </style>

        </Providers>
      </body>
    </html>
  );
}
