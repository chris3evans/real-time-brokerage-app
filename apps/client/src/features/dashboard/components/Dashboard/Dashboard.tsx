import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import styles from "./Dashboard.module.scss";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardPortfolioPerformance } from "@dashboard-portfolio-performance/DashboardPortfolioPerformance";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";
import { useMarketIndicators } from "@/hooks/dashboard.hooks";

export const Dashboard = () => {
  const { data, isLoading, isError, error } = useMarketIndicators();

  if (isLoading) return <div>DATA IS LOADING PLEASE WAIT!!!!</div>;

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  console.log(data, "MOCK DATA");

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
