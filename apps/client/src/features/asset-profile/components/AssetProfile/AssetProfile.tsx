import { View } from "@/components/View/View";
import { useParams } from "react-router-dom";
import { AssetProfileHeader } from "../AssetProfileHeader/AssetProfileHeader";
import { useGetStock } from "@/hooks/search.hooks";
import { AssetDetails } from "@asset-profile-components/AssetDetails/AssetDetail";
import { AssetProfileActions } from "@asset-profile-components/AssetProfileActions/AssetProfileActions";
import { useEffect, useRef, useState } from "react";

export const AssetProfile = () => {
  const { ticker } = useParams<{ ticker: string }>();
  const { data: stock } = useGetStock(ticker ?? "");

  const [data, setData] = useState<{ price: number } | null>(null);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:3001");

    ws.current.onmessage = (event) => {
      const update = JSON.parse(event.data);
      setData(update);
      console.log(data);
    };
    return () => ws.current?.close();
  }, []);

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
      <div>{data?.price}</div>
      <AssetDetails assetTicker={stock?.ticker ?? ""} />
      <AssetProfileActions />
    </View>
  );
};
