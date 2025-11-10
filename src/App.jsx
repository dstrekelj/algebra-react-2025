import { nanoid } from "nanoid";
import { truncate, convertLineBreaks } from "./library/string";
import { CoinToss } from "./components/CoinToss.jsx";
import { RockPaperScissors } from "./components/RockPaperScissors.jsx";
import { Greeting } from "./components/Greeting.jsx";

function App() {
  return (
    <>
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
      <Greeting
        morningMessage="Dobro jutro Domagoj!"
        morningRange={[5, 10]}
        afternoonMessage="Dobar dan Domagoj!"
        afternoonRange={[10, 17]}
        eveningMessage="Dobra večer Domagoj!"
        eveningRange={[17, 21]}
        nightMessage="Laku noć Domagoj!"
        nightRange={[21, 5]}
      />
    </>
  );
}

export default App;
