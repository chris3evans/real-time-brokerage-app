import { Card } from "@/components/Card/Card";
import styles from "./DashboardPortfolioPerformance.module.scss";

export const DashboardPortfolioPerformance = () => {
  return (
    <Card className={styles["portfolio-performance"]}>
      <div className={styles["portfolio-performance-heading"]}>
        Portfolio Performance Bar will go here
      </div>
    </Card>
  );
};
