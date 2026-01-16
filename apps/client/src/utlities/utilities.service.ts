import type { ValueChange } from "@/types/app.types";

export const formatChangeColour = (value: number): ValueChange => {
  let balanceStatus: ValueChange = "";
  if (value > 0) balanceStatus = "positive-change";
  if (value < 0) balanceStatus = "negative-change";
  return balanceStatus;
};
