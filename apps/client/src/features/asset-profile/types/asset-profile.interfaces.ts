import { StockItem } from "@project/shared-types";

export interface AssetProfileComponentProps {
  assetName: string;
  assetTicker?: string;
  currentPrice: number;
  change: number;
  changePercentage: number;
}

export interface AssetDetailsComponentProps {
  assetTicker: string;
}

export interface AssetProfileActionsComponentProps {
  stock: StockItem | undefined;
}
