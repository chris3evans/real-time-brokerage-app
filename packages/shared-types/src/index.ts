export interface StockItemProps {
  name: string;
  ticker: string;
  currentPrice: number;
  priceChange: number;
}

export interface StockPositionItem extends StockItemProps {
  units?: number;
  positionPrincipal?: number;
  positionValue?: number;
}

export interface LineGraphPoint {
  time: string;
  value: number;
}
