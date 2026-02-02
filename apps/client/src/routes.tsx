import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Dashboard } from "@dashboard/Dashboard";
import { Search } from "@search/Search";
import { Portfolio } from "@portfolio/Portfolio";
import { Settings } from "@settings/Settings";
import { AssetProfile } from "./features/asset-profile/components/AssetProfile/AssetProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/search" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "asset-profile",
        element: <AssetProfile />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
