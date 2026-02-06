import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 space-y-8 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl animate-fadeIn">

      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Privacy Policy
      </h1>

      {/* INFO TEXT */}
      <p className="text-gray-700 leading-relaxed">
        Your privacy is important to us. AI Finance Tracker collects minimal personal data to provide better services. All data is stored securely and never shared with third parties without consent.
      </p>

      <p className="text-gray-700 leading-relaxed">
        By using this platform, you agree to our collection and use of data as outlined in this policy.
      </p>

      {/* LOG / INFO BOX */}
      <div className="bg-indigo-50 p-4 rounded-xl shadow-inner border-l-4 border-indigo-400 text-indigo-700 animate-fadeInUp">
        <strong>Important:</strong> This platform stores all data locally in your browser for demo purposes only. No real backend storage is used.
      </div>

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
