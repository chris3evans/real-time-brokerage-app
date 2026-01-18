import type { DashboardBalanceProps } from "@dashboard-types/dashboard.interfaces";
import styles from "./DashboardBalance.module.scss";
import { Card } from "@/components/Card/Card";
import { formatChangeColour } from "@/utlities/utilities.service";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export const DashboardBalance = ({
  // balanceAmount,
  balanceReturn,
}: DashboardBalanceProps) => {
  const balanceAmount = useSelector(
    (state: RootState) => state.dashboard.balanceAmount,
  );

  return (
    <Card cardTitle="Account Balance" className={styles["dashboard-balance"]}>
      <div className={styles["balance"]}>
        <span className={styles["balance-amount"]}>£{balanceAmount}</span>
        <span className={formatChangeColour(balanceReturn)}>
          {`${balanceReturn > 0 ? " +" : ""}${balanceReturn}`} (7.12%)
        </span>
      </div>
      <ButtonSet
        buttons={[
          { label: "Deposit" },
          { label: "Withdraw", style: "outline" },
        ]}
      />
    </Card>
  );
};
