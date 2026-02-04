export type StockData = Record<
  string,
  { name: string; ticker: string; price: number }
>;

export interface StockItem {
  name: string;
  ticker: string;
  currentPrice: number;
  priceChange: number;
  priceChangePercentage: number;
}

export interface StockPositionItem extends StockItem {
  units?: number;
  positionPrincipal?: number;
  positionValue?: number;
}

export type AssetDetailsList = Record<string, AssetDetails>;

export interface AssetDetails {
  overview: string;
  marketCap: number;
  tradingVolume: number;
  peRatio: number;
  dividendYield: number;
  dividendAmount: number;
  revenuePerShare: number;
  netIncomePerShare: number;
  earningsPerShare: number;
  revenueGrowth: number;
  epsGrowth: number;
  grossProfitMargin: number;
  netProfitMargin: number;
}

export interface LineGraphPoint {
  time: string;
  value: number;
}

export type MarketIndicatorData = Record<
  string,
  { name: string; value: number }
>;

export interface MarketIndicator {
  name: string;
  currentValue: number;
  valueChange: number;
  valueChangePercentage: number;
}
