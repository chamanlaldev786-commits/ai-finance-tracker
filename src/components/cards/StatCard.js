"use client";

export default function StatCard({ title, value }) {
  return (
    <div className="card p-4 flex flex-col justify-between rounded-xl bg-white/10 backdrop-blur-sm shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
      {/* TITLE */}
      <p className="text-sm text-gray-400">{title}</p>

      {/* VALUE */}
      <h3 className="text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 animate-gradient">
        {value}
      </h3>

      {/* SUBTLE BAR INDICATOR */}
      <div className="h-1 mt-3 w-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 rounded-full opacity-40" />
    </div>
  );
}
