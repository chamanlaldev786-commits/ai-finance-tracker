"use client";

import { useMemo, Suspense } from "react";
import { useExpenses } from "@/context/ExpenseContext";
import dynamic from "next/dynamic";

import StatCard from "@/components/cards/StatCard";
import { totalExpenses, expensesByCategory } from "@/utils/calculations";
import { formatCurrency } from "@/utils/formatCurrency";

// Charts (lazy load)
const ExpenseLineChart = dynamic(
  () => import("@/components/charts/ExpenseLineChart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 rounded-2xl bg-gradient-to-r from-indigo-100 to-purple-100 animate-pulse" />
    ),
  }
);

const CategoryPieChart = dynamic(
  () => import("@/components/charts/CategoryPieChart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 rounded-2xl bg-gradient-to-r from-pink-100 to-orange-100 animate-pulse" />
    ),
  }
);

const CashFlowBarChart = dynamic(
  () => import("@/components/charts/CashFlowBarChart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 rounded-2xl bg-gradient-to-r from-green-100 to-teal-100 animate-pulse" />
    ),
  }
);

export default function DashboardPage() {
  const { expenses } = useExpenses();

  const stats = useMemo(() => {
    const total = totalExpenses(expenses);
    const categories = expensesByCategory(expenses);
    const aiScore =
      expenses.length === 0
        ? 0
        : Math.min(100, Math.max(60, 100 - total / 500));

    return {
      total,
      categories,
      aiScore: Math.round(aiScore),
      transactions: expenses.length,
    };
  }, [expenses]);

  return (
    <div className="min-h-screen p-6 space-y-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

      {/* HEADER */}
      <div className="space-y-2 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          AI Finance Dashboard
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Real-time overview of your spending behavior, transactions, and AI-based
          financial health insights.
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard
          title="Total Spending"
          value={formatCurrency(stats.total)}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn"
        />
        <StatCard
          title="Total Transactions"
          value={stats.transactions}
          className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 text-white shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn delay-100"
        />
        <StatCard
          title="AI Financial Score"
          value={`${stats.aiScore}%`}
          className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white shadow-xl hover:scale-105 transition-all duration-300 animate-fadeIn delay-200"
        />
      </div>

      {/* ANALYTICS */}
      <div className="grid md:grid-cols-2 gap-8">
        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-2xl animate-pulse" />}>
          <div className="bg-white/30 backdrop-blur-xl p-6 rounded-3xl shadow-xl animate-fadeInUp">
            <h3 className="font-bold text-lg mb-2 text-indigo-700">
              Spending Over Time
            </h3>
            <ExpenseLineChart data={expenses} />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-2xl animate-pulse" />}>
          <div className="bg-white/30 backdrop-blur-xl p-6 rounded-3xl shadow-xl animate-fadeInUp delay-100">
            <h3 className="font-bold text-lg mb-2 text-pink-700">
              Category Distribution
            </h3>
            <CategoryPieChart data={stats.categories} />
          </div>
        </Suspense>
      </div>

      {/* CASH FLOW */}
      <div className="grid md:grid-cols-1 gap-8">
        <Suspense fallback={<div className="h-64 bg-gray-200 rounded-2xl animate-pulse" />}>
          <div className="bg-white/30 backdrop-blur-xl p-6 rounded-3xl shadow-xl animate-fadeInUp">
            <h3 className="font-bold text-lg mb-2 text-emerald-700">
              Cash Flow (Bar)
            </h3>
            <CashFlowBarChart data={expenses} />
          </div>
        </Suspense>
      </div>

      {/* AI INSIGHT */}
      <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-3xl shadow-xl animate-fadeInUp space-y-4">
        <h3 className="text-xl font-bold text-indigo-800">
          🤖 AI Spending Insight
        </h3>

        <p className="text-gray-700 leading-relaxed">
          {stats.aiScore > 80 &&
            "Excellent! Your spending habits are highly optimized. You’re maintaining a healthy balance between needs and savings."}
          {stats.aiScore <= 80 &&
            stats.aiScore > 60 &&
            "Your financial behavior is stable, but there’s room to optimize. Try cutting unnecessary recurring expenses."}
          {stats.aiScore <= 60 &&
            "Warning: Your expenses are higher than recommended. The AI suggests reviewing major spending categories urgently."}
        </p>

        <div className="grid sm:grid-cols-3 gap-4 pt-4 text-sm">
          <div className="bg-white/60 rounded-xl p-4 text-center shadow">
            📊 Data Source
            <div className="font-semibold text-indigo-700">Local Expenses</div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 text-center shadow">
            🔁 Updates
            <div className="font-semibold text-purple-700">Real-time</div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 text-center shadow">
            🧠 AI Engine
            <div className="font-semibold text-pink-700">Rule-Based Model</div>
          </div>
        </div>
      </div>

      {/* FOOTER INFO */}
      <div className="text-center text-xs text-gray-500 animate-fadeIn">
        Frontend-only demo • No backend • Data resets on refresh
      </div>
    </div>
  );
}
