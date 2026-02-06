"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("dark");
  const [currency, setCurrency] = useState("INR");
  const [aiLevel, setAiLevel] = useState("Smart");
  const [success, setSuccess] = useState("");

  const handleSave = () => {
    setSuccess("Settings saved successfully!");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl animate-fadeIn">

      {/* HEADER */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Settings
        </h2>
        <p className="text-gray-600 text-sm opacity-90">
          Theme, preferences, and AI behavior settings.
        </p>
      </div>

      {/* THEME SELECTION */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-700">Theme</h3>
        <div className="flex gap-4">
          <button
            className={`flex-1 py-2 rounded-xl font-medium text-white shadow-lg transition-all transform hover:scale-105 ${theme === "dark"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500"
              : "bg-gray-300 text-gray-700 opacity-70"
              }`}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
          <button
            className={`flex-1 py-2 rounded-xl font-medium text-white shadow-lg transition-all transform hover:scale-105 ${theme === "light"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500"
              : "bg-gray-300 text-gray-700 opacity-70"
              }`}
            onClick={() => setTheme("light")}
          >
            Light
          </button>
        </div>
      </div>

      {/* CURRENCY */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-700">Currency</h3>
        <select
          className="w-full p-3 rounded-xl bg-white/30 backdrop-blur-md outline-none shadow-inner transition focus:ring-2 focus:ring-purple-300"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="INR">INR - ₹</option>
          <option value="USD">USD - $</option>
          <option value="EUR">EUR - €</option>
          <option value="GBP">GBP - £</option>
        </select>
      </div>

      {/* AI LEVEL */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-700">AI Assistance Level</h3>
        <select
          className="w-full p-3 rounded-xl bg-white/30 backdrop-blur-md outline-none shadow-inner transition focus:ring-2 focus:ring-purple-300"
          value={aiLevel}
          onChange={(e) => setAiLevel(e.target.value)}
        >
          <option value="Basic">Basic</option>
          <option value="Smart">Smart</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* SAVE BUTTON */}
      <div className="text-center">
        <button
          className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 shadow-lg transform hover:scale-105 transition-all"
          onClick={handleSave}
        >
          Save Settings
        </button>
        {success && (
          <p className="text-green-500 mt-2 text-sm animate-fadeInUp">{success}</p>
        )}
      </div>

      {/* INFO */}
      <p className="text-xs text-gray-500 opacity-80 text-center">
        Settings affect only frontend preferences. AI behavior is simulated.
      </p>
    </div>
  );
}
