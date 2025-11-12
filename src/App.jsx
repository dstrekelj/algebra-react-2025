import { useState } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (username) => {
    setUser(username);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <>
      <Header onSignIn={handleSignIn} onSignOut={handleSignOut} user={user} />
      {user ? <DashboardPage /> : <HomePage />}
    </>
  );
}

export default App;
