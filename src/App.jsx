import { Toast } from "./components/Toast.jsx";
import { AppContextProvider } from "./contexts/AppContext.jsx";
import { Router } from "./pages/Router.jsx";

import "the-new-css-reset/css/reset.css";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <Toast />
      <Router />
    </AppContextProvider>
  );
}

export default App;
