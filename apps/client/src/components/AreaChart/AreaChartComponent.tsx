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

export const AreaChartComponent = ({
  chartData,
  tooltipLabel,
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
          interval={1}
          dataKey="time"
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
          formatter={(v) => [`$${v}`, tooltipLabel]}
          itemStyle={{
            color: AppColour.BLACK,
          }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={AppColour.PRIMARY}
          fill={AppColour.PRIMARY_LIGHT_1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
