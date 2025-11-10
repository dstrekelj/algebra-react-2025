import { useState } from "react";

export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
  const [count, setCount] = useState(initialValue);

  const handleDecrementClick = () => {
    setCount(count - decrement);
  };
  const handleIncrementClick = () => {
    setCount(count + increment);
  };

  return (
    <span>
      <button onClick={handleDecrementClick}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrementClick}>+</button>
    </span>
  );
}
