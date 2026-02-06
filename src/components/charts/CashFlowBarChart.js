"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function CashFlowBarChart({ data }) {
  return (
    <div className="card h-72 p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md transition-transform hover:scale-[1.02]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
        >
          {/* GRID */}
          <CartesianGrid strokeDasharray="3 3" stroke="#a1a1aa" opacity={0.3} />

          {/* AXES */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#a1a1aa" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#a1a1aa" }}
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

          {/* BAR */}
          <Bar
            dataKey="amount"
            fill="url(#barGradient)"
            radius={[6, 6, 0, 0]}
            animationDuration={800}
          />

          {/* GRADIENT DEFINITION */}
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#16a34a" stopOpacity={0.8} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
