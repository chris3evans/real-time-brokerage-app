import { SideNavigation } from "@navigation-components/SideNavigation/SideNavigation";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function App() {
  return (
    <div className={styles["app-container"]}>
      <SideNavigation />
      {/* <Dashboard /> */}
      <Outlet />
    </div>
  );
}

export default App;
