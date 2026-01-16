import type { DashboardBalanceProps } from "@dashboard-types/dashboard.interfaces";
import styles from "./DashboardBalance.module.scss";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { formatChangeColour } from "@/utlities/utilities.service";

export const DashboardBalance = ({
  balanceAmount,
  balanceReturn,
}: DashboardBalanceProps) => {
  return (
    <Card cardTitle="Account Balance" className={styles["dashboard-balance"]}>
      <div className={styles["balance"]}>
        <span className={styles["balance-amount"]}>£{balanceAmount}</span>
        <span className={formatChangeColour(balanceReturn)}>
          {`${balanceReturn > 0 ? " +" : ""}${balanceReturn}`} (7.12%)
        </span>
      </div>
      <div className={styles["balance-buttons"]}>
        <Button label={"Deposit"} />
        <Button label={"Withdraw"} style={"outline"} />
      </div>
    </Card>
  );
};
