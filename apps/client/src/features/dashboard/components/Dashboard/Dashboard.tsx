import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";
import { View } from "@components/View/View";
import { PriceHistoryPerformance } from "@/components/PriceHistoryPerformance/PriceHistoryPerformance";

export const Dashboard = () => {
  return (
    <View>
      <DashboardBalance />
      <DashboardMarketOverview />
      <PriceHistoryPerformance
        trend="up"
        tooltipLabel="Value: "
        heading="Portfolio Performance"
        chartData={[]}
      />
      <DashboardPortfolioOverview />
      <DashboardWatchList />
    </View>
  );
};
