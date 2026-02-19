import { AppColour } from "@/types/app.enums";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import type { AreaChartComponentProps } from "../types/components.interfaces";
import styles from "./AreaChartComponent.module.scss";

export const AreaChartComponent = ({
  chartData,
  tooltipLabel,
  trend,
}: AreaChartComponentProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        style={{
          aspectRatio: "4 / 1",
          fontSize: "1rem",
        }}
        data={chartData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          interval={3}
          dataKey="timeString"
          label={{ value: "Time", position: "insideBottom", offset: 0 }}
        />
        <YAxis
          width="auto"
          label={{
            value: "Value",
            angle: -90,
            position: "insideLeft",
            offset: 0,
          }}
        />
        <Tooltip
          labelFormatter={(label) => `Time: ${label}`}
          formatter={(v) => [`${tooltipLabel}: $${v} `]}
          wrapperClassName={styles["custom-tooltip"]}
          itemStyle={{
            color: AppColour.BLACK,
          }}
        />
        <Area
          isAnimationActive={false}
          type="monotone"
          dataKey="value"
          stroke={
            trend === "up"
              ? AppColour.PROFIT_GREEN_DARK
              : AppColour.LOSS_RED_DARK
          }
          fill={trend === "up" ? AppColour.PROFIT_GREEN : AppColour.LOSS_RED}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
