import { View } from "@/components/View/View";
import { useParams } from "react-router-dom";

export const AssetProfile = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <View>
      Asset Profile will be rendered here for {name}
      {/* Header - name, ticker, current price + price change */}
      {/* Price history graph */}
      {/* LEFT (2/3) - Asset details */}
      {/* RIGHT (1/3) - Buy / Sell asset buttons */}
    </View>
  );
};
