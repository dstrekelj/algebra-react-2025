import { createContext, useState } from "react";

export const AppContext = createContext({
  user: null,
  error: null,
  signIn: () => {},
  signOut: () => {},
  theme: "light",
});

const allowedUsers = {
  user: "pass",
};

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light");

  const signIn = (username, password) => {
    const userPassword = allowedUsers[username];

    if (userPassword && userPassword === password) {
      setUser(username);
    } else {
      setError(`${new Date().toLocaleString()}: Invalid username or password`);
    }
  };

  const signOut = () => {
    setTheme("light");
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{ user, error, signIn, signOut, theme, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}
