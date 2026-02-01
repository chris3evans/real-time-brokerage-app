import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardPortfolioPerformance } from "@dashboard-portfolio-performance/DashboardPortfolioPerformance";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";
import { View } from "@components/View/View";

export const Dashboard = () => {
  return (
    <View>
      <DashboardBalance />
      <DashboardMarketOverview />
      <DashboardPortfolioPerformance />
      <DashboardPortfolioOverview />
      <DashboardWatchList />
    </View>
  );
};
