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
    { name: "1", uv: 10, pv: 20, amt: 10 },
    { name: "2", uv: 10, pv: 20, amt: 10 },
    { name: "3", uv: 10, pv: 20, amt: 10 },
    { name: "4", uv: 10, pv: 20, amt: 10 },
    { name: "5", uv: 10, pv: 20, amt: 10 },
    { name: "6", uv: 10, pv: 20, amt: 10 },
    { name: "7", uv: 10, pv: 20, amt: 10 },
    { name: "8", uv: 10, pv: 20, amt: 10 },
    { name: "9", uv: 10, pv: 20, amt: 10 },
    { name: "10", uv: 10, pv: 20, amt: 10 },
    { name: "11", uv: 10, pv: 20, amt: 10 },
    { name: "12", uv: 10, pv: 20, amt: 10 },
    { name: "13", uv: 10, pv: 20, amt: 10 },
    { name: "14", uv: 10, pv: 20, amt: 10 },
    { name: "15", uv: 10, pv: 20, amt: 10 },
    { name: "16", uv: 10, pv: 20, amt: 10 },
    { name: "17", uv: 10, pv: 20, amt: 10 },
  ];
  return (
    <Card className={styles["portfolio-performance"]}>
      <div className={styles["portfolio-performance-heading"]}>
        Portfolio Performance Bar will go here
      </div>
      <AreaChart width={500} height={400} data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </Card>
  );
};
