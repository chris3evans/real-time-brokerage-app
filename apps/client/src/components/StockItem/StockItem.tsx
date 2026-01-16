import type { StockItemProps } from "../types/components.interfaces";

export const StockItem = ({
  ticker,
  currentPrice,
  priceChange,
}: StockItemProps) => {
  return (
    <div>
      <span>{ticker}</span>
      <span>{currentPrice}</span>
      <span>{priceChange}</span>
    </div>
  );
};
