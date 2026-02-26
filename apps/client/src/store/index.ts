import { configureStore } from "@reduxjs/toolkit";
import dashboardBalanceReducer from "@store-dashboard/balanceSlice";
import sideNavigationReducer from "@store-navigation/sideNavigationSlice";
import userReducer from "@store-user/userSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardBalanceReducer,
    navigation: sideNavigationReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
