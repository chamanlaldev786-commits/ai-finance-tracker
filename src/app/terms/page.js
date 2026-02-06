import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 space-y-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl animate-fadeIn">

      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Terms of Service
      </h1>

      {/* TERMS INFO */}
      <p className="text-gray-700 leading-relaxed">
        By accessing or using AI Finance Tracker, you agree to comply with these terms. Misuse of the platform, attempting to bypass security, or violating applicable laws may result in termination of access.
      </p>

      <p className="text-gray-700 leading-relaxed">
        We reserve the right to update the terms at any time. Continued use implies acceptance of the updated terms.
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
