import { View } from "@/components/View/View";
import { useParams } from "react-router-dom";
import { AssetProfileHeader } from "../AssetProfileHeader/AssetProfileHeader";
import { useGetStock } from "@/hooks/search.hooks";
import { AssetDetails } from "@asset-profile-components/AssetDetails/AssetDetail";
import { AssetProfileActions } from "@asset-profile-components/AssetProfileActions/AssetProfileActions";

export const AssetProfile = () => {
  const { ticker } = useParams<{ ticker: string }>();
  const { data: stock } = useGetStock(ticker ?? "");

  return (
    <View>
      <AssetProfileHeader
        assetName={stock?.name ?? ""}
        assetTicker={stock?.ticker ?? ""}
        currentPrice={stock?.currentPrice ?? 0}
        change={stock?.priceChange ?? 0}
        changePercentage={stock?.priceChangePercentage ?? 0}
      />
      {/* Price history graph */}
      <AssetDetails assetTicker={stock?.ticker ?? ""} />
      <AssetProfileActions />
    </View>
  );
};
