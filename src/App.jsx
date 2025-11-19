import { useState } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { Header } from "./components/Header.jsx";
import "./App.css";
import { Toast } from "./components/Toast.jsx";

const allowedUsers = {
  user: "pass",
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
      setError(`${new Date().toLocaleString()}: Invalid username or password`);
    }
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <>
      <Toast message={error} />
      {user ? <DashboardPage /> : <HomePage onSignIn={handleSignIn} />}
    </>
  );
}

export default App;
