export interface StockItemProps {
  name: string;
  ticker: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercentage: number;
}

export type MarketData = Record<
  string,
  { name: string; ticker: string; price: number }
>;

export interface StockPositionItem extends StockItemProps {
  units?: number;
  positionPrincipal?: number;
  positionValue?: number;
}

export interface LineGraphPoint {
  time: string;
  value: number;
}

export interface MarketIndicatorData {
  name: string;
  value: number;
  change: number;
}
