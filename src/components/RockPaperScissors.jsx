export function RockPaperScissors({ choiceList }) {
  const index = Math.floor(Math.random() * choiceList.length);

  return <p>{choiceList[index]}</p>;
}
