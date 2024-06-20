import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import React from "react";
import { format } from "date-fns";
import { CustomTooltip } from "./custom-tooltip";

type Props = {
  data?: {
    data: string;
    income: number;
    expenses: number;
  }[];
};

export const BarVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
          <stop offset="2%" stopColor="#3d82f6" stopOpacity={0.8} />
          <stop offset="98%" stopColor="#3d82f6" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="expenses" x1="0" y1="0" x2="0" y2="1">
          <stop offset="2%" stopColor="#f43f5e" stopOpacity={0.8} />
          <stop offset="98%" stopColor="#f43f5e" stopOpacity={0} />
        </linearGradient>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="date"
          tickFormatter={(value) => format(value, "dd MMMM")}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="income" fill="#3b82f6" className="drop-shadow-sm" />
        <Bar dataKey="expenses" fill="#f43f5e" className="drop-shadow-sm" />
      </BarChart>
    </ResponsiveContainer>
  );
};
