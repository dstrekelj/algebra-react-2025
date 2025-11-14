import { useEffect, useState } from "react";
import "./Toast.css";

export function Toast({ message }) {
  const [toastMessage, setToastMessage] = useState(message);

  useEffect(() => {
    setToastMessage(message);

    console.log("Setting timeout for toast");
    const timeoutId = setTimeout(() => {
      console.log("Clearing toast message");
      setToastMessage(null);
    }, 5000);

    return () => {
      console.log("Clearing timeout for toast");
      clearTimeout(timeoutId);
      setToastMessage(null);
    };
  }, [message]);

  const className = toastMessage ? "toast show" : "toast hide";

  return <div className={className}>{toastMessage}</div>;
}
