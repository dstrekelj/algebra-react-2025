import { useState } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { Header } from "./components/Header.jsx";
import "./App.css";

const allowedUsers = {
  pperic: "password123!",
  dvukovic: "lozinka456!",
  krade: "ovonitkonecepogoditi",
};

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSignIn = (username, password) => {
    const userPassword = allowedUsers[username];

    if (userPassword && userPassword === password) {
      setUser(username);
    } else {
      setError("Invalid username or password");

      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <>
      {error && <div className="toast">{error}</div>}
      <Header onSignIn={handleSignIn} onSignOut={handleSignOut} user={user} />
      {user ? <DashboardPage /> : <HomePage />}
    </>
  );
}

export default App;
