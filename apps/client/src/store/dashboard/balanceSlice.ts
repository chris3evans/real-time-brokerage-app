import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface BalanceState {
  balanceAmount: number;
  balanceReturn: number;
}

const initialState: BalanceState = {
  balanceAmount: 950,
  balanceReturn: 100,
};

export const dashboardBalanceSlice = createSlice({
  name: "dashboardBalance",
  initialState,
  reducers: {
    setBalanceAmount: (state, action: PayloadAction<number>) => {
      state.balanceAmount = state.balanceAmount + action.payload;
    },
    setBalanceReturn: (state, action: PayloadAction<number>) => {
      state.balanceReturn = action.payload;
    },
  },
});

export const { setBalanceAmount } = dashboardBalanceSlice.actions;
export default dashboardBalanceSlice.reducer;
