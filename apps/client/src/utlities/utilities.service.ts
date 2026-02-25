import type { ValueChange } from "@/types/app.types";
import { Duration } from "@project/shared-types";

export const formatChangeColour = (value: number): ValueChange => {
  let balanceStatus: ValueChange = "";
  if (value > 0) balanceStatus = "positive-change";
  if (value < 0) balanceStatus = "negative-change";
  return balanceStatus;
};

export const formatTimestampToDate = (
  timestamp: number,
  duration: Duration,
): string => {
  const date = new Date(timestamp);
  switch (duration) {
    case "second":
      // Formats as HH:mm:ss
      return date.toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    case "minute":
      // Formats as HH:mm
      return date.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    case "hour":
      // Formats as HH:00 (Hours only, minutes set to 00)
      return date.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    case "day":
    case "week":
      // Formats as "13 feb"
      return date.toLocaleDateString([], { day: "numeric", month: "short" });
    case "month":
      // Formats as "feb 26" (using the current year 2026 based on your prompt)
      return `${date.toLocaleDateString([], { month: "short" })} ${date.getFullYear().toString().slice(-2)}`;
    case "year":
      // Formats as "2026"
      return date.getFullYear().toString();
    default:
      return "";
  }
};
