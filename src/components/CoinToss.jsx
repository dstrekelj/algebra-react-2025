import { useState } from "react";

export function CoinToss({ headsMessage, tailsMessage, headsChance }) {
  const [isHeads, setIsHeads] = useState(null);

  const handleClick = () => {
    setIsHeads(Math.random() < headsChance);
  };

  const message = isHeads ? headsMessage : tailsMessage;
  const showMessage = isHeads !== null;

  return (
    <div>
      <button onClick={handleClick}>Toss a coin!</button>
      {showMessage && <span>{message}</span>}
    </div>
  );
}
