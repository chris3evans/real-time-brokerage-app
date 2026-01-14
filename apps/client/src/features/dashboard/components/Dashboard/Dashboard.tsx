import { DashboardBalance } from "@dashboard-balance/DashboardBalance";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { DashboardMarketBalance } from "@dashboard-market-balace/DashboardMarketBalance";

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
      <DashboardMarketBalance />
      {/* Overall Portfolio  Performance */}
    </div>
  );
};
