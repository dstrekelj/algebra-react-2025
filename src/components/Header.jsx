import { useContext } from "react";
import { Greeting } from "./Greeting.jsx";
import { AppContext } from "../contexts/AppContext.jsx";

export function Header() {
  const appContext = useContext(AppContext);

  const handleClick = () => {
    appContext.signOut();
  };

  return (
    <header>
      {appContext.user && (
        <Greeting
          morningMessage={`Dobro jutro ${appContext.user}!`}
          morningRange={[5, 10]}
          afternoonMessage={`Dobar dan ${appContext.user}!`}
          afternoonRange={[10, 17]}
          eveningMessage={`Dobra večer ${appContext.user}!`}
          eveningRange={[17, 21]}
          nightMessage={`Laku noć ${appContext.user}!`}
          nightRange={[21, 5]}
        />
      )}
      {appContext.user && (
        <button type="button" onClick={handleClick}>
          Sign out
        </button>
      )}
    </header>
  );
}
