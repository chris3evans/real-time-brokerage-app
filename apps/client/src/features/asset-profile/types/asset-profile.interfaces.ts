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
