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
          {/* Header (client component) */}
          <Header />

          {/* Layout wrapper: Sidebar + Main content */}
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar className="hidden md:flex" />

            {/* Main content */}
            <main className="flex-1 p-6 md:p-12 flex flex-col gap-12">
              {children}
            </main>
          </div>

          {/* Footer (client component) */}
          <Footer />

          {/* Floating Home Link */}
          <div className="fixed bottom-6 right-6 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/100 transition duration-300 cursor-pointer">
            <Link href="/" className="text-indigo-600 w-6 h-6">
              Home
            </Link>
          </div>
        </Providers>
      </body>
    </html>
  );
}
