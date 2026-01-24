import { MarketIndicator, MarketIndicatorData } from "@project/shared-types";
import marketData from "../data/market-indicators.json" with { type: "json" };

const BASE_MARKET_DATA = marketData as MarketIndicatorData;

export const getMarketIndicator = (name: string): MarketIndicator | null => {
  const indicator = BASE_MARKET_DATA[name.toLocaleUpperCase()];

  if (!indicator) return null;

  const volatility = Math.random() * 0.01;
  const valueChange = +(indicator.value * volatility).toFixed(2);
  const currentValue = +(indicator.value + valueChange).toFixed(2);
  const valueChangePercentage = +((valueChange / currentValue) * 100).toFixed(
    2,
  );

  return {
    name: indicator.name,
    currentValue,
    valueChange,
    valueChangePercentage,
  };
};

export const getAllMarketIndicators = (): (MarketIndicator | null)[] => {
  return Object.keys(BASE_MARKET_DATA).map((indicatorName) =>
    getMarketIndicator(indicatorName),
  );
};
