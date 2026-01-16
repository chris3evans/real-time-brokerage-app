import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardPortfolioPerformance } from "@dashboard-portfolio-performance/DashboardPortfolioPerformance";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";

export const Dashboard = () => {
  const [balanceAmount, setBalanceAmount] = useState<number>(0);
  const [balanceReturn, setBalanceReturn] = useState<number>(0);

  useEffect(() => {
    setBalanceAmount(10000);
    setBalanceReturn(712);
  }, []);

  return (
    <div className={styles["dashboard"]}>
      <DashboardBalance
        balanceAmount={balanceAmount}
        balanceReturn={balanceReturn}
      />
      <DashboardMarketOverview />
      <DashboardPortfolioPerformance />
      <DashboardPortfolioOverview />
      <DashboardWatchList />
    </div>
  );
};
