import { createContext, useState } from "react";

export const AppContext = createContext({
  user: null,
  error: null,
  signIn: () => {},
  signOut: () => {},
});

const allowedUsers = {
  user: "pass",
};

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signIn = (username, password) => {
    const userPassword = allowedUsers[username];

    if (userPassword && userPassword === password) {
      setUser(username);
    } else {
      setError(`${new Date().toLocaleString()}: Invalid username or password`);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, error, signIn, signOut }}>
      {children}
    </AppContext.Provider>
  );
}
