import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Dashboard } from "@dashboard/Dashboard";
import { Search } from "@search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
