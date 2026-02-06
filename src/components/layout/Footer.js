"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-gray-400 bg-white/5 backdrop-blur-xl animate-fadeInUp">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            AI Finance Tracker
          </h3>
          <p className="text-gray-300">
            Smart expense tracking, AI-powered insights, and better financial
            decisions — all in one secure platform.
          </p>
          <p className="text-xs text-gray-500">
            © 2026 AI Finance Tracker • Built with ❤️ by Chaman Lal
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy" className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* LOCATION */}
        <div className="space-y-2">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-gray-300">
            AI Finance Tracker Pvt Ltd<br />
            pakistan
          </p>
          {/* <p className="text-gray-300">
            Email: <a href="mailto:support@aifinancetracker.com" className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition">support@aifinancetracker.com</a>
          </p> */}
        </div>

      </div>
    </footer>
  );
}
