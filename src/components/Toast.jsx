import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext.jsx";
import "./Toast.css";

export function Toast() {
  const appContext = useContext(AppContext);
  const [toastMessage, setToastMessage] = useState(appContext.error);

  useEffect(() => {
    setToastMessage(appContext.error);

    const timeoutId = setTimeout(() => {
      setToastMessage(null);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      setToastMessage(null);
    };
  }, [appContext.error]);

  const className = toastMessage ? "toast show" : "toast hide";

  return <div className={className}>{toastMessage}</div>;
}
