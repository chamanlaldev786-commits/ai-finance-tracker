"use client";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { mockExpenses } from "@/data/mockExpenses";
import { totalExpenses, expensesByCategory } from "@/utils/calculations";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  // FEATURES DATA
  const features = [
    {
      title: "Track Every Expense",
      desc: "Log daily expenses with smart categorization and real-time balance tracking.",
    },
    {
      title: "AI Spending Analysis",
      desc: "Understand where your money goes with AI-powered insights and patterns.",
    },
    {
      title: "Smart Budget Planning",
      desc: "Plan monthly budgets and let AI guide you to better financial decisions.",
    },
  ];

  // DYNAMIC STATS
  const total = totalExpenses(mockExpenses);
  const categoryData = expensesByCategory(mockExpenses);
  const topCategory =
    categoryData.length > 0
      ? categoryData.reduce((a, b) => (a.value > b.value ? a : b)).name
      : "None";

  const aiScore = Math.round(Math.min(100, Math.max(50, 100 - total / 500)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 p-6 md:p-12 flex flex-col gap-12 font-sans">

      {/* HERO SECTION */}
      <div className="text-center text-white space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          <Typewriter
            words={[
              "AI Finance Tracker",
              "Smart Expense Insights",
              "AI Budgeting Assistant",
              "Your Personal Finance Brain",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
          />
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          A next-generation fintech dashboard that helps you track expenses,
          analyze spending behavior, and receive AI-powered financial guidance — all in one clean and professional interface.
        </p>
      </div>

      {/* QUICK STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-purple-700">Monthly Expenses</h3>
          <p className="text-2xl font-bold mt-2 text-purple-900">{formatCurrency(total)}</p>
          <p className="text-sm text-purple-800/70 mt-1">Compared to last month</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-pink-600">Top Category</h3>
          <p className="text-2xl font-bold mt-2 text-pink-800">{topCategory}</p>
          <p className="text-sm text-pink-700/70 mt-1">Highest spending area</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-600">AI Health Score</h3>
          <p className="text-2xl font-bold mt-2 text-yellow-800">{aiScore} / 100</p>
          <p className="text-sm text-yellow-700/70 mt-1">Based on spending habits</p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow-md">Why Use This Platform?</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`px-6 py-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:scale-105 duration-300 font-semibold text-white ${activeFeature === index
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
                : "bg-white/30 backdrop-blur-md hover:bg-white/50"
                }`}
            >
              <h4>{feature.title}</h4>
            </button>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-3xl mx-auto mt-6 animate-fadeIn">
          <h3 className="text-2xl font-bold text-purple-900">{features[activeFeature].title}</h3>
          <p className="text-gray-700 mt-2">{features[activeFeature].desc}</p>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 p-8 rounded-xl shadow-xl text-center text-white space-y-4 transform hover:scale-105 transition duration-300">
        <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md">Start Managing Your Money Smarter</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
          Sign up today and let AI help you take control of your finances with clarity, confidence, and smarter decisions.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:scale-105 transform transition duration-300">
          <Link href="auth/login">Get Started</Link>
        </button>
      </div>
    </div>
  );
}
