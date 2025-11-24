import { createContext } from "react";

export const AppContext = createContext({ user: null });

export function AppContextProvider({ children }) {
  return (
    <AppContext.Provider value={{ user: "domagoj" }}>
      {children}
    </AppContext.Provider>
  );
}
