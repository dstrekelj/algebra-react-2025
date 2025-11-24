import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext.jsx";

export function ThemeSwitcher() {
  const appContext = useContext(AppContext);

  useEffect(() => {
    return () => {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    };
  }, []);

  useEffect(() => {
    console.log("setting theme:", appContext.theme);
    document.body.classList.toggle("theme-dark", appContext.theme === "dark");
    document.body.classList.toggle("theme-light", appContext.theme === "light");
  }, [appContext.theme]);

  return (
    <button onClick={appContext.toggleTheme}>
      {appContext.theme === "light" ? "Dark" : "Light"} theme
    </button>
  );
}
