import { Greeting } from "./Greeting.jsx";

export function Header({ onSignIn, onSignOut, user }) {
  const handleClick = () => {
    onSignOut();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    onSignIn(username);
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
      {!user && (
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="Username" />
          <button type="submit">Sign in</button>
        </form>
      )}
      {user && (
        <button type="button" onClick={handleClick}>
          Sign out
        </button>
      )}
    </header>
  );
}
