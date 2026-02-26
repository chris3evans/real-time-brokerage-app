import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserSlice {
  balance: number;
}

const initialState: UserSlice = {
  balance: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
  },
});

export const { updateBalance } = userSlice.actions;
export default userSlice.reducer;
