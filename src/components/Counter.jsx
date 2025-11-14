import { useEffect, useState } from "react";

export function Counter({ initialValue = 0, increment = 1, decrement = 1 }) {
  const [count, setCount] = useState(initialValue);

  console.log("Counter mounted (outside of useEffect)");

  useEffect(() => {
    console.log("Counter mounted");

    const timeoutId = setTimeout(() => {
      console.log("This is a delayed log after 10 seconds");
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      console.log("Counter unmounted");
    };
  }, []);

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
