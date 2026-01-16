import type { StockItemProps } from "@/components/types/components.interfaces";

export const MOCK_STOCK_WATCHLIST_DATA: StockItemProps[] = [
  {
    currentPrice: 150.25,
    priceChange: 2.15,
    ticker: "AAPL",
    name: "Apple",
  },
  {
    currentPrice: 2800.5,
    priceChange: -15.3,
    ticker: "GOOGL",
    name: "Alphabet",
  },
  {
    currentPrice: 340.1,
    priceChange: 5.2,
    ticker: "MSFT",
    name: "Microsoft",
  },
  {
    currentPrice: 720.0,
    priceChange: 10.0,
    ticker: "AMZN",
    name: "Amazon",
  },
  {
    currentPrice: 250.75,
    priceChange: -3.45,
    ticker: "TSLA",
    name: "Tesla",
  },
  {
    currentPrice: 120.0,
    priceChange: 1.25,
    ticker: "NFLX",
    name: "Netflix",
  },
  {
    currentPrice: 45.6,
    priceChange: -0.75,
    ticker: "AMD",
    name: "Advanced Micro Devices",
  },
];
