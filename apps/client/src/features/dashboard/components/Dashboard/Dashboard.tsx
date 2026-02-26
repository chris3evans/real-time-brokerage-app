import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import { DashboardMarketOverview } from "@/features/dashboard/components/DashboardMarketOverview/DashboardMarketOverview";
import { DashboardWatchList } from "@dashboard-watchlist/DashboardWatchList";
import { DashboardPortfolioOverview } from "@dashboard-portfolio-overview/DashboardPortfolioOverview";
import { View } from "@components/View/View";
import { PriceHistoryPerformance } from "@/components/PriceHistoryPerformance/PriceHistoryPerformance";
import { GeneralModal } from "@/components/modals/GeneralModal/GeneralModal";
import { useState } from "react";

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const closeModal = () => setOpenModal(!openModal);

  return (
    <View>
      <DashboardBalance />
      <DashboardMarketOverview />
      <PriceHistoryPerformance
        trend="up"
        tooltipLabel="Value"
        heading="Portfolio Performance"
        chartData={[]}
        handleDurationChange={() => () => {}}
      />
      <DashboardPortfolioOverview />
      <DashboardWatchList />
      <GeneralModal
        modalOpen={openModal}
        closeModal={closeModal}
        title="Custom Modal Title Works!"
      >
        <div>I AM THE MODALS CONTENT</div>
      </GeneralModal>
    </View>
  );
};
