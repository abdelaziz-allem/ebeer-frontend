"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface TopPerformersProps {
  farmers: Array<{ name: string; value: number }>;
  shops: Array<{ name: string; value: number }>;
}

export default function TopPerformers({ farmers, shops }: TopPerformersProps) {
  return (
    <div className="flex flex-col gap-2 md:flex-row justify-around">
      <ChartContainer
        config={{
          value: {
            label: "Revenue",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-[400px] w-full md:w-1/2 bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-center py-2 text-white">
          Top Farmers
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={farmers} layout="vertical" margin={{ left: 120 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff66" />
            <XAxis type="number" tick={{ fill: "white" }} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: "white" }}
              width={120}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="value" fill="#ffffff99" name="Revenue" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <ChartContainer
        config={{
          value: {
            label: "Revenue",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-[400px] w-full md:w-1/2 bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold text-center py-2 text-white">
          Top Shops
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={shops} layout="vertical" margin={{ left: 120 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff66" />
            <XAxis type="number" tick={{ fill: "white" }} />
            <YAxis
              dataKey="name"
              type="category"
              tick={{ fill: "white" }}
              width={120}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="value" fill="#ffffff99" name="Revenue" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
