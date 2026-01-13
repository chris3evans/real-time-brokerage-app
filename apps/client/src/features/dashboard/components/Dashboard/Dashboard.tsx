import { DashboardBalance } from '@dashboard-balance/DashboardBalance';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
  const [balanceAmount, setBalanceAmount] = useState<number>(0);
  const [balanceReturn, setBalanceReturn] = useState<number>(0);

  useEffect(() => {
    setBalanceAmount(10000);
    setBalanceReturn(712);
  }, [])

  return (
    <>
    <DashboardBalance balanceAmount={balanceAmount} balanceReturn={balanceReturn} />
    </>
  )
}