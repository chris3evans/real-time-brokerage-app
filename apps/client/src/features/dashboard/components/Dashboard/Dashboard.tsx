import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import styles from "./Dashboard.module.scss";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardPortfolioPerformance } from "@dashboard-portfolio-performance/DashboardPortfolioPerformance";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";

export const Dashboard = () => {
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
