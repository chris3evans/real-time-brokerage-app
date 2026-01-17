// import { useEffect, useState } from "react";
import { Dashboard } from "@dashboard/Dashboard";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

function App() {
  // const [message, setMessage] = useState("Loading...");

  // useEffect(() => {
  //   fetch(API_URL + "/profile")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.username);
  //     })
  //     .catch(() => setMessage("API is not responding"));
  // }, []);

  return (
    <div className="container">
      {/* <p>API Status: <strong>{message}</strong></p> */}
      <Dashboard />
    </div>
  );
}

export default App;
