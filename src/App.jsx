import { useState } from "react";
import { Greeting } from "./components/Greeting.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClick = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <>
      <div>
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
        <button onClick={handleClick}>Sign {isSignedIn ? "out" : "in"}</button>
      </div>
      {isSignedIn ? <DashboardPage /> : <HomePage />}
    </>
  );
}

export default App;
