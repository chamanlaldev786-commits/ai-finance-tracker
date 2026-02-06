import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 space-y-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl animate-fadeIn">

      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Support
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 leading-relaxed">
        Need help? Contact our support team at:
      </p>

      {/* CONTACT LIST */}
      <ul className="text-gray-700 list-disc list-inside space-y-2">
        <li>
          Email:{" "}
          <a
            href="mailto:support@aifinancetracker.com"
            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium hover:underline transition"
          >
            support@aifinancetracker.com
          </a>
        </li>
        <li>
          Phone:{" "}
          <a
            href="tel:+1234567890"
            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium hover:underline transition"
          >
            +1 234 567 890
          </a>
        </li>
        <li>Office Location: 123 AI Street, FinTech City, 45678</li>
      </ul>

      {/* RESPONSE TIME INFO */}
      <p className="text-gray-600 text-sm opacity-90">
        We aim to respond within 24 hours on business days.
      </p>

      {/* BACK BUTTON */}
      <div className="text-center">
        <Link href="/">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
