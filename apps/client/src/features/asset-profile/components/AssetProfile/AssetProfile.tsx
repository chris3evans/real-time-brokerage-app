import { View } from "@/components/View/View";
import { useParams } from "react-router-dom";
import { AssetProfileHeader } from "../AssetProfileHeader/AssetProfileHeader";

export const AssetProfile = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <View>
      <AssetProfileHeader
        assetName={name ?? ""}
        assetTicker="TCKR"
        currentPrice={100}
        change={1}
        changePercentage={1}
      />
      {/* Price history graph */}
      {/* LEFT (2/3) - Asset details */}
      {/* RIGHT (1/3) - Buy / Sell asset buttons */}
    </View>
  );
};
