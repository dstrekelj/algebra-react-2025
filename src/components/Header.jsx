import { Greeting } from "./Greeting.jsx";
import { SignInForm } from "./SignInForm.jsx";

export function Header({ onSignIn, onSignOut, user }) {
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
      {!user && <SignInForm onSignIn={onSignIn} />}
      {user && (
        <button type="button" onClick={handleClick}>
          Sign out
        </button>
      )}
    </header>
  );
}
