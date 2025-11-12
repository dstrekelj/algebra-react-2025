import { nanoid } from "nanoid";
import { truncate, convertLineBreaks } from "./library/string";
import { CoinToss } from "./components/CoinToss.jsx";
import { RockPaperScissors } from "./components/RockPaperScissors.jsx";
import { Greeting } from "./components/Greeting.jsx";
import { Counter } from "./components/Counter.jsx";

/**
 * - Napravite komponentu HomePage.jsx i komponentu DashboardPage.jsx
 * - Stavite obje komponente u folder src/pages
 * - U komponenti HomePage prikažite poruku "Welcome to the Home Page!"
 * - U komponenti DashboardPage prikažite Counter, CoinToss i RockPaperScissors
 * komponente (ovakve kakve su u App.jsx) (Greeting ostaje u App.jsx)
 * - Stavite obje komponente (HomePage, DashboardPage) u App.jsx
 * - Dodajte dugme "Sign in" u App.jsx
 * - Kada korisnik stisne dugme, u state od App.jsx se zapamti da je prijavljen
 * - Kada je korisnik prijavljen, prikažite DashboardPage, inače prikažite HomePage
 * - Kada je korisnik prijavljen, dugme "Sign in" se mijenja u dugme "Sign out"
 * - Kada korisnik stisne dugme "Sign out", u state od App.jsx se zapamti da
 * nije prijavljen
 */

function App() {
  return (
    <>
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
