import {
  Area,
  Cell,
  Legend,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import React from "react";
import { format } from "date-fns";
import { CustomTooltip } from "./custom-tooltip";
import { formatPercentage } from "@/lib/utils";
import { CategoryTooltip } from "./category-tooltip";

const COLORS = ["#0062FF", "#12C6FF", "FF647F", "#FF9354"];

type Props = {
  data?: {
    data: string;
    value: number;
  }[];
};

export const RadarVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid />
        <PolarAngleAxis style={{ fontSize: "12px" }} dataKey="name" />
        <PolarRadiusAxis style={{ fontSize: "12px" }} />
        <Radar
          dataKey="value"
          stroke="3b82f6"
          fill="#3b82f6"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
