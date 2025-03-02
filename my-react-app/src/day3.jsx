import React, { useState } from "react";

// Profile Card Component
const ProfileCard = ({ name, role }) => {
  return (
    <div className="box">
      <h2 className="title">{name}</h2>
      <p className="subtitle">{role}</p>
    </div>
  );
};

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="box">
      <h2 className="title">{count}</h2>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

// Combining both
const ProfileAndCounter = () => {
  return (
    <div>
      <ProfileCard name="Uzair Patel" role="Frontend Developer" />
      <Counter />
    </div>
  );
};

export default ProfileAndCounter;
