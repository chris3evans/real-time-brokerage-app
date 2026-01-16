import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioOverview.module.scss";

export const DashboardPortfolioOverview = () => {
  return (
    <Card
      className={styles["dashboard-portfolio-overview"]}
      cardTitle="Portfolio Performance"
    >
      <div></div>
    </Card>
  );
};
