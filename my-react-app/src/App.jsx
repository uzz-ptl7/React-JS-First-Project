import { useState } from "react";
import "./App.css";
import WelcomeMessage from "./day2.jsx";
import ProfileAndCounter from "./day3.jsx";
import InteractiveFeatures from "./day4.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Day 2: JSX and React Components</h1>
      <WelcomeMessage />

      <h1 className="title">Day 3: Props in React</h1>
      <ProfileAndCounter />

      <h1 className="title">Day 4: Event Handling & Dynamic State</h1>
      <InteractiveFeatures />
    </div>
  );
}

export default App;
