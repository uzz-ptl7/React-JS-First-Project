import React, { useState } from "react";

// Interactive Input Component
const InteractiveInput = () => {
  const [name, setName] = useState("");

  return (
    <div className="box">
      <input
        type="text"
        placeholder="Enter your name"
        className="input"
        onChange={(e) => setName(e.target.value)}
      />
      <p className="subtitle">Hello, {name}</p>
    </div>
  );
};

// Two Counters with Different Increments
const IncrementalCounter = ({ increment }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h2 className="title">{count}</h2>
      <button className="button" onClick={() => setCount(count + increment)}>
        Increase by {increment}
      </button>
    </div>
  );
};

// Combining both features
const InteractiveFeatures = () => {
  return (
    <div>
      <InteractiveInput />
      <IncrementalCounter increment={1} />
      <IncrementalCounter increment={5} />
    </div>
  );
};

export default InteractiveFeatures;
