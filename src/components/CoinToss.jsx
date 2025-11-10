export function CoinToss({ headsMessage, tailsMessage, headsChance }) {
  const isHeads = Math.random() < headsChance;

  const result = isHeads ? <p>{headsMessage}</p> : <p>{tailsMessage}</p>;

  return result;
}
