import { View } from "@/components/View/View";
import { useParams } from "react-router-dom";
import { AssetProfileHeader } from "../AssetProfileHeader/AssetProfileHeader";
import { useGetAssetPriceHistory, useGetStock } from "@/hooks/search.hooks";
import { AssetDetails } from "@asset-profile-components/AssetDetails/AssetDetail";
import { AssetProfileActions } from "@asset-profile-components/AssetProfileActions/AssetProfileActions";
import { useEffect, useMemo, useRef, useState } from "react";
import { PriceHistoryPerformance } from "@components/PriceHistoryPerformance/PriceHistoryPerformance";
import { Duration } from "@project/shared-types";

export const AssetProfile = () => {
  const { ticker } = useParams<{ ticker: string }>();
  const { data: stock } = useGetStock(ticker ?? "");

  const [activeDuration, setActiveDuration] = useState<Duration>("second");

  const trend = useMemo(() => {
    return Math.random() > 0.5 ? "up" : "down";
  }, [ticker]);

  const { data: priceHistory } = useGetAssetPriceHistory(
    ticker ?? "",
    trend,
    activeDuration,
  );

  const [data, setData] = useState<{ price: number } | null>(null);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (ws.current) {
      ws.current.close();
    }

    ws.current = new WebSocket("ws://localhost:3001");

    ws.current.onopen = () => {
      console.log("Web Socket Connected");
      if (priceHistory) {
        ws.current?.send(
          JSON.stringify({
            type: "SUBSCRIBE",
            ticker: ticker,
            price: priceHistory[priceHistory.length - 1].value,
            trend: trend,
          }),
        );
      }
    };

    ws.current.onmessage = (event) => {
      try {
        console.log(event.data);
        const update = JSON.parse(event.data);
        setData(update);
        console.log(data, "WEBSOCKET DATA");
      } catch (error) {
        console.error("Error parsing incoming web socket data", error);
      }
    };

    ws.current.onerror = (error) => {
      console.error("Web socker error: ", error);
    };

    return () => {
      if (ws.current) {
        if (ws.current.readyState === WebSocket.OPEN) {
          ws.current.send(
            JSON.stringify({
              type: "UNSUBSCRIBE",
              ticker: ticker,
            }),
          );
        }
      }
      ws.current?.close();
    };
  }, [priceHistory /*, activeDuration*/, ticker]);

  return (
    <View>
      <AssetProfileHeader
        assetName={stock?.name ?? ""}
        assetTicker={stock?.ticker ?? ""}
        currentPrice={stock?.currentPrice ?? 0}
        change={stock?.priceChange ?? 0}
        changePercentage={stock?.priceChangePercentage ?? 0}
      />
      <PriceHistoryPerformance
        heading={`${stock?.ticker} History`}
        chartData={priceHistory ?? []}
        tooltipLabel="Price"
        trend={trend}
        handleDurationChange={setActiveDuration}
      />
      <AssetDetails assetTicker={stock?.ticker ?? ""} />
      <AssetProfileActions />
    </View>
  );
};
