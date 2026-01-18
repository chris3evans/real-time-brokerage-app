import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface BalanceState {
  balanceAmount: number;
  balanceReturn: number;
}

const initialState: BalanceState = {
  balanceAmount: 950,
  balanceReturn: 0,
};

export const dashboardBalanceSlice = createSlice({
  name: "dashboardBalance",
  initialState,
  reducers: {
    setBalanceAmount: (state, action: PayloadAction<number>) => {
      state.balanceAmount = action.payload;
    },
  },
});

export const { setBalanceAmount } = dashboardBalanceSlice.actions;
export default dashboardBalanceSlice.reducer;
