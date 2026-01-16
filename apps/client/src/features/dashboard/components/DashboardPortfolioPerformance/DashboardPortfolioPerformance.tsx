import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioPerformance.module.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AppColour } from "@/types/app.enums";
import { PORTFOLIO_PERFORMANCE_MOCKDATA } from "@/mock-data/portfolio-performance.mockdata";

export const DashboardPortfolioPerformance = () => {
  return (
    <Card className={styles["portfolio-performance"]}>
      <div className={styles["portfolio-performance-heading"]}>
        Portfolio Performance Bar will go here
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          style={{
            aspectRatio: "4 / 1",
            fontSize: "1rem",
          }}
          data={PORTFOLIO_PERFORMANCE_MOCKDATA}
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
            formatter={(v) => [`$${v}`, "Portfolio Value"]}
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
    </Card>
  );
};
