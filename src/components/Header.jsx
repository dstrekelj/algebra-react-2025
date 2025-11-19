import { Greeting } from "./Greeting.jsx";

export function Header({ onSignOut, user }) {
  const handleClick = () => {
    onSignOut();
  };

  return (
    <header>
      {user && (
        <Greeting
          morningMessage={`Dobro jutro ${user}!`}
          morningRange={[5, 10]}
          afternoonMessage={`Dobar dan ${user}!`}
          afternoonRange={[10, 17]}
          eveningMessage={`Dobra večer ${user}!`}
          eveningRange={[17, 21]}
          nightMessage={`Laku noć ${user}!`}
          nightRange={[21, 5]}
        />
      )}
      {user && (
        <button type="button" onClick={handleClick}>
          Sign out
        </button>
      )}
    </header>
  );
}
