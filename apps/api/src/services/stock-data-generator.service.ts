import {
  AssetDetails,
  AssetDetailsList,
  Duration,
  LineGraphPoint,
  StockData,
  StockItem,
  Trend,
} from "@project/shared-types";
import stockData from "../data/stocks.json" with { type: "json" };
import stockDetails from "../data/stock-details.json" with { type: "json" };

const BASE_STOCK_DATA = stockData as StockData;
const BASE_STOCK_DETAILS_LIST = stockDetails as AssetDetailsList;

export const getStock = (ticker: string): StockItem => {
  const stock = BASE_STOCK_DATA[ticker.toLocaleUpperCase()];

  // if (!stock) return;

  const volatility = Math.random() * 0.01;
  const priceChange = +(stock.price * volatility).toFixed(2);
  const currentPrice = +(stock.price + priceChange).toFixed(2);
  const priceChangePercentage = +((priceChange / currentPrice) * 100).toFixed(
    2,
  );

  return {
    name: stock.name,
    ticker: stock.ticker,
    currentPrice,
    priceChange,
    priceChangePercentage,
  };
};

export const getAllStocks = (): (StockItem | undefined)[] => {
  return Object.keys(BASE_STOCK_DATA).map((ticker) => getStock(ticker));
};

export const getAllMatchingStocks = (searchInput: string): StockItem[] => {
  const uppercaseSearchInput = searchInput.toLocaleUpperCase();

  return Object.entries(BASE_STOCK_DATA)
    .filter(
      ([ticker, stock]) =>
        ticker.includes(uppercaseSearchInput) ||
        stock.name.toLocaleUpperCase().includes(uppercaseSearchInput),
    )
    .map(([ticker, _]) => getStock(ticker))
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const getStockDetails = (ticker: string): AssetDetails => {
  return BASE_STOCK_DETAILS_LIST[ticker.toLocaleUpperCase()];
};

export const generatePriceHistory = (
  stock: StockData,
  trend: Trend,
  duration: Duration,
): LineGraphPoint[] => {
  const [[ticker, stockInfo]] = Object.entries(stock);
  const priceNow = stockInfo.price;
  const timeStampNow = new Date();

  const historicalPriceData: LineGraphPoint[] = [];

  // will get 100 points of historical data
  for (let i = 0; i < 100; i++) {
    historicalPriceData.push({
      time: "",
      value: priceNow,
    });
  }

  // console.log(historicalPriceData, "historical price data");
  return historicalPriceData;
};
