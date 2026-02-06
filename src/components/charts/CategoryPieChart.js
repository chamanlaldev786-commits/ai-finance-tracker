"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

// ✅ Color palette for categories
const COLORS = ["#22c55e", "#facc15", "#3b82f6", "#ec4899", "#a855f7", "#f87171"];

export default function CategoryPieChart({ data }) {
  return (
    <div className="card h-72 p-4 rounded-2xl bg-white/10 backdrop-blur-sm shadow-md transition-transform hover:scale-[1.02]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={40}
            paddingAngle={4}
            stroke="none"
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="transition-transform duration-500 hover:scale-110"
              />
            ))}
          </Pie>

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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
