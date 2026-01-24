import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import styles from "./Dashboard.module.scss";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardPortfolioPerformance } from "@dashboard-portfolio-performance/DashboardPortfolioPerformance";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";
import { useGetMarketIndicators, useGetStocks } from "@/hooks/dashboard.hooks";

export const Dashboard = () => {
  const { data: stockData } = useGetStocks();
  const { data: marketIndicatorData } = useGetMarketIndicators();

  console.log(
    stockData,
    "STOCK data from tanstack query and fastify node server",
  );
  console.log(
    marketIndicatorData,
    "MARKET INDICATOR data from tanstack query and fastify node server",
  );

  return (
    <div className={styles["dashboard"]}>
      <DashboardBalance />
      <DashboardMarketOverview />
      <DashboardPortfolioPerformance />
      <DashboardPortfolioOverview />
      <DashboardWatchList />
    </div>
  );
};
