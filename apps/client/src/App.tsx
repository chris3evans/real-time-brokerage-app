import { Dashboard } from "@dashboard/Dashboard";
import { SideNavigation } from "@navigation-components/SideNavigation/SideNavigation";
import styles from "./App.module.scss";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function App() {
  return (
    <div className={styles["app-container"]}>
      <SideNavigation />
      <Dashboard />
    </div>
  );
}

export default App;
