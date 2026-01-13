import styles from './DashboardBalance.module.scss';

export const DashboardBalance = () => {
  return (
    <div className={styles['dashboard-balance']}>
      <h3>Account Balance</h3>
      <div className={styles['balance']}>
        <span className={styles['balance-amount']}>£5,365</span>
        <span className={styles['balance-return']}>+£356 (7.12%)</span>
      </div>
      <div className={styles['balance-buttons']}>
        <button className={styles['cta-button']}>Deposit</button>
        <button className={styles['cta-button']}>Withdraw</button>
      </div>
    </div>
  )
}