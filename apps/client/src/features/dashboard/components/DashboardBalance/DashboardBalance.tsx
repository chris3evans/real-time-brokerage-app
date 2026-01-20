import styles from "./DashboardBalance.module.scss";
import { Card } from "@/components/Card/Card";
import { formatChangeColour } from "@/utlities/utilities.service";
import { ButtonSet } from "@/components/ButtonSet/ButtonSet";
import { useAppSelector } from "@/store/hooks";

export const DashboardBalance = () => {
  const balanceAmount = useAppSelector(
    (state) => state.dashboard.balanceAmount,
  );
  const balanceReturn = useAppSelector(
    (state) => state.dashboard.balanceReturn,
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
