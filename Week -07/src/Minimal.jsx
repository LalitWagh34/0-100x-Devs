import { useState } from 'react';

function MinimalComponent() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 m-0 p-0"
      style={{ backgroundColor: color }}
    >
      Minimal Component
    </div>
  );
}

export default MinimalComponent;
