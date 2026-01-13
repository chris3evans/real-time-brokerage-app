import type { DashboardBalanceProps } from '../../types/dashboard.interfaces';
import styles from './DashboardBalance.module.scss';

export const DashboardBalance = ({ balanceAmount, balanceReturn  }:  DashboardBalanceProps) => {
  return (
    <div className={styles['dashboard-balance']}>
      <h3>Account Balance</h3>
      <div className={styles['balance']}>
        <span className={styles['balance-amount']}>£{balanceAmount}</span>
        <span className={styles['balance-return']}>+{balanceReturn} (7.12%)</span>
      </div>
      <div className={styles['balance-buttons']}>
        <button className={styles['cta-button']}>Deposit</button>
        <button className={styles['cta-button']}>Withdraw</button>
      </div>
    </div>
  )
}