import { useContext } from "react";
import { HomePage } from "./HomePage.jsx";
import { DashboardPage } from "./DashboardPage.jsx";
import { AppContext } from "../contexts/AppContext.jsx";

export function Router() {
  const appContext = useContext(AppContext);

  if (appContext.user) {
    return <DashboardPage />;
  }

  return <HomePage />;
}
