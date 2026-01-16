import { Card } from "@/components/Card/Card";
import styles from "./DashboardWatchlist.module.scss";

export const DashboardWatchList = () => {
  return (
    <Card cardTitle="Watchlist" className={styles["dashboard-watchlist"]}>
      Dashboard Watchlist Component
    </Card>
  );
};
