"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ExpenseLineChart({ data }) {
  return (
    <div className="card h-72 p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md transition-transform hover:scale-[1.02]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          {/* GRID */}
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" opacity={0.3} />

          {/* AXES */}
          <XAxis
            dataKey="date"
            stroke="var(--muted)"
            tick={{ fontSize: 12, fill: "var(--muted)" }}
          />
          <YAxis
            stroke="var(--muted)"
            tick={{ fontSize: 12, fill: "var(--muted)" }}
          />

          {/* TOOLTIP */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "0.75rem",
              border: "none",
              padding: "0.5rem 1rem",
              backdropFilter: "blur(6px)",
            }}
            itemStyle={{ color: "#111827", fontWeight: 500 }}
          />

          {/* LINE */}
          <Line
            type="monotone"
            dataKey="amount"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            animationDuration={1000}
          />

          {/* LINE GRADIENT */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={1} />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.7} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
