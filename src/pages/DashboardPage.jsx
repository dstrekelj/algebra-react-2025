import { Counter } from "../components/Counter";
import { CoinToss } from "../components/CoinToss";
import { RockPaperScissors } from "../components/RockPaperScissors";
import { Header } from "../components/Header";

export function DashboardPage({ onSignOut, user }) {
  return (
    <>
      <Header onSignOut={onSignOut} user={user} />
      <Counter initialValue={0} increment={10} decrement={5} />
      <CoinToss
        headsMessage={"Glava!"}
        tailsMessage="Pismo!"
        headsChance={0.9}
      />
      <RockPaperScissors
        choiceList={[
          "You chose Rock!",
          "You chose Paper!",
          "You chose Scissors!",
          "You chose Spock!",
        ]}
      />
    </>
  );
}
