import { configureStore } from "@reduxjs/toolkit";
import dashboardBalanceReducer from "@store-dashboard/balanceSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardBalanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Store is currently setup for a single frontend app. Need to adjust to work better with a monorepo
