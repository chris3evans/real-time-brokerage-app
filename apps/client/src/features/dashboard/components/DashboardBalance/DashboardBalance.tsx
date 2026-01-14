import type { DashboardBalanceProps } from "@dashboard-types/dashboard.interfaces";
import styles from "./DashboardBalance.module.scss";
import { Button } from "@/components/Button/Button";

export const DashboardBalance = ({
  balanceAmount,
  balanceReturn,
}: DashboardBalanceProps) => {
  let balanceStatus: string = "";
  if (balanceReturn > 0) balanceStatus = styles["positive"];
  if (balanceReturn < 0) balanceStatus = styles["negative"];

  return (
    <div className={styles["dashboard-balance"]}>
      <h4>Account Balance</h4>
      <div className={styles["balance"]}>
        <span className={styles["balance-amount"]}>£{balanceAmount}</span>
        <span className={balanceStatus}>
          {`${balanceReturn > 0 ? " +" : ""}${balanceReturn}`} (7.12%)
        </span>
      </div>
      <div className={styles["balance-buttons"]}>
        <Button label={"Deposit"} />
        <Button label={"Withdraw"} style={"outline"} />
      </div>
    </div>
  );
};
