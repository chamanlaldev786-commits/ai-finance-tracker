"use client";

import { useState } from "react";
import { askAI } from "@/ai/openai";
import { useExpenses } from "@/hooks/useExpenses";
import { Typewriter } from "react-simple-typewriter";

export default function AIAssistantPage() {
  const { expenses } = useExpenses();

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const quickPrompts = [
    "How can I reduce my monthly expenses?",
    "Which category am I overspending on?",
    "Give me a smart savings plan",
    "Analyze my spending behavior",
  ];

  const ask = async (question) => {
    const finalQuestion = question || input;
    if (!finalQuestion) return;

    setLoading(true);
    setInput("");

    const reply = await askAI(finalQuestion, expenses);

    setHistory((prev) => [
      ...prev,
      { question: finalQuestion, answer: reply },
    ]);

    setResponse(reply);
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6 md:p-10 font-sans">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl space-y-4 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
          <Typewriter
            words={[
              "AI Finance Assistant",
              "Smart Budget Advisor",
              "Your Personal Money Coach",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
          />
        </h2>

        <p className="text-md md:text-lg max-w-3xl mx-auto opacity-90 text-white/90">
          Ask intelligent questions about your expenses, savings, budgeting,
          and financial health. This AI analyzes your real spending data to
          give personalized guidance.
        </p>
      </div>

      {/* QUICK PROMPTS */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg space-y-4 animate-fadeIn">
        <h3 className="font-semibold text-lg text-indigo-700">Try asking one of these:</h3>

        <div className="flex flex-wrap gap-3">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => ask(prompt)}
              className="px-4 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium shadow transition duration-200 transform hover:-translate-y-1 hover:scale-105"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4 animate-fadeIn">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI anything about your finances..."
          className="w-full p-4 rounded-xl border-2 border-indigo-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all bg-white/20 text-gray-900 placeholder-gray-500 min-h-[120px]"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-sm text-gray-500">Connected with your expense data</p>

          <button
            onClick={() => ask()}
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "AI is thinking..." : "Ask AI"}
          </button>
        </div>
      </div>

      {/* RESPONSE */}
      {response && (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-2xl shadow-lg space-y-2 animate-fadeIn">
          <p className="font-semibold text-green-700 text-lg">Latest AI Insight</p>
          <p className="leading-relaxed whitespace-pre-line text-gray-800">{response}</p>
        </div>
      )}

      {/* HISTORY */}
      {history.length > 1 && (
        <div className="bg-purple-50 p-6 rounded-2xl shadow-lg space-y-4 animate-fadeInUp">
          <h3 className="text-xl font-bold text-purple-800">Conversation History</h3>

          <div className="space-y-4">
            {history.slice(0, -1).map((item, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-sm p-4 rounded-lg shadow-inner transform hover:scale-105 transition duration-300">
                <p className="font-semibold text-indigo-700">Q: {item.question}</p>
                <p className="text-gray-600 mt-2 whitespace-pre-line">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
