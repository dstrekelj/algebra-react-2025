import { useContext } from "react";
import { Greeting } from "./Greeting.jsx";
import { AppContext } from "../contexts/AppContext.jsx";
import { ThemeSwitcher } from "./ThemeSwitcher.jsx";
import { SignOutButton } from "./SignOutButton.jsx";
import { Button } from "./Button.jsx";

export function Header() {
  const appContext = useContext(AppContext);

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
      <SignOutButton />
      <ThemeSwitcher />
    </header>
  );
}
