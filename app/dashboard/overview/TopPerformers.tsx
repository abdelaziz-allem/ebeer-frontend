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
    <div className="space-y-4 flex">
      <ChartContainer
        config={{
          value: {
            label: "Revenue",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={farmers} layout="vertical" margin={{ left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="value" fill="var(--color-value)" name="Revenue" />
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
        className="h-[300px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={shops} layout="vertical" margin={{ left: 100 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar dataKey="value" fill="var(--color-value)" name="Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
