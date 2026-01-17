import type { StockPositionItem } from "@/components/types/components.interfaces";

export const MOCK_STOCK_PORTFOLIO_DATA: StockPositionItem[] = [
  {
    name: "Broadcom",
    ticker: "AVGO",
    currentPrice: 1245.6,
    priceChange: 2.15,
    units: 2,
    positionPrincipal: 2300.0,
    positionValue: 2491.2,
  },
  {
    name: "JPMorgan Chase",
    ticker: "JPM",
    currentPrice: 172.45,
    priceChange: 0.85,
    units: 20,
    positionPrincipal: 3200.0,
    positionValue: 3449.0,
  },
  {
    name: "Eli Lilly",
    ticker: "LLY",
    currentPrice: 752.1,
    priceChange: 1.42,
    units: 4,
    positionPrincipal: 2800.0,
    positionValue: 3008.4,
  },
  {
    name: "PepsiCo",
    ticker: "PEP",
    currentPrice: 168.9,
    priceChange: -0.35,
    units: 15,
    positionPrincipal: 2600.0,
    positionValue: 2533.5,
  },
];
