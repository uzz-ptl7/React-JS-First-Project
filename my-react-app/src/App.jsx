import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileCard from "./profileCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>Hello, Uzair! Warm Welcome to React.</h1>
      <ProfileCard />
    </div>
  );
}

export default App;