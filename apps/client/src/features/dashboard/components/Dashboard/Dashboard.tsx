import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import styles from "./Dashboard.module.scss";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardPortfolioPerformance } from "@dashboard-portfolio-performance/DashboardPortfolioPerformance";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";
import { useEffect } from "react";

export const Dashboard = () => {
  useEffect(() => {
    testFetch();
    testMarketIndicatorFetch();
  }, []);

  const testFetch = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/stocks");

      if (!response.ok) {
        throw new Error(response.status + " test failed!");
      }

      const data = await response.json();
      console.log(data, "TEST FETCH RESULT");
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  const testMarketIndicatorFetch = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/market-indicators",
      );
      if (!response.ok) {
        throw new Error(response.status + " test failed!");
      }

      const result = await response.json();
      console.log(result, "MARKET INDICATOR SERVER RESPONSE");
    } catch (error) {
      console.log(error, "ERROR 2");
    }
  };

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
