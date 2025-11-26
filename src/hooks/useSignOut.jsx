import { useContext } from "react";
import { AppContext } from "../contexts/AppContext.jsx";

export function useSignOut() {
  const appContext = useContext(AppContext);

  const signOut = () => {
    appContext.signOut();
  };

  return { signOut };
}
