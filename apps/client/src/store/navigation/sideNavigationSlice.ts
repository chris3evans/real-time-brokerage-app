import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SideNavigationState {
  sideNavigationOpen: boolean;
}

const initialState: SideNavigationState = {
  sideNavigationOpen: true,
};

export const sideNavigationSlice = createSlice({
  name: "sideNavigation",
  initialState,
  reducers: {
    setSideNavigationOpen: (state, action: PayloadAction<boolean>) => {
      state.sideNavigationOpen = action.payload;
    },
  },
});

export const { setSideNavigationOpen } = sideNavigationSlice.actions;
export default sideNavigationSlice.reducer;
