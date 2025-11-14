import { useEffect, useState } from "react";
import "./Toast.css";

export function Toast({ message }) {
  const [toastMessage, setToastMessage] = useState(message);

  useEffect(() => {
    setToastMessage(message);

    const timeoutId = setTimeout(() => {
      setToastMessage(null);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      setToastMessage(null);
    };
  }, [message]);

  const className = toastMessage ? "toast show" : "toast hide";

  return <div className={className}>{toastMessage}</div>;
}
