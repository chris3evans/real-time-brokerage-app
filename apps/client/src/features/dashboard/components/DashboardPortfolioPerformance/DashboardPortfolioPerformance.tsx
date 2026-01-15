import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioPerformance.module.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { LineGraphPoint } from "@dashboard-types/dashboard.interfaces";

export const DashboardPortfolioPerformance = () => {
  const mockData: LineGraphPoint[] = [
    { time: "1", value: 1 },
    { time: "2", value: 2 },
    { time: "3", value: 3 },
    { time: "4", value: 3 },
    { time: "5", value: 2 },
    { time: "6", value: 5 },
    { time: "7", value: 4 },
    { time: "8", value: 5 },
    { time: "9", value: 5 },
    { time: "10", value: 7 },
    { time: "11", value: 6 },
    { time: "12", value: 6 },
    { time: "13", value: 5 },
    { time: "14", value: 8 },
    { time: "15", value: 9 },
    { time: "16", value: 8 },
    { time: "17", value: 10 },
  ];
  return (
    <Card className={styles["portfolio-performance"]}>
      <div className={styles["portfolio-performance-heading"]}>
        Portfolio Performance Bar will go here
      </div>
      <AreaChart
        style={{
          aspectRatio: "4 / 1",
          fontSize: "1rem",
        }}
        data={mockData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          label={{ value: "Time", position: "insideBottom", offset: 0 }}
        />
        <YAxis width="auto" label={{ value: "Value", angle: -90 }} />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </Card>
  );
};
