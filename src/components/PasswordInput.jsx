import { useState } from "react";
import "./PasswordInput.css";

export function PasswordInput({ name, placeholder }) {
  const [type, setType] = useState("password");
  const buttonLabel = type === "password" ? "Show" : "Hide";

  const handleClick = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div>
      <input
        className="password-input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <button onClick={handleClick} type="button">
        {buttonLabel}
      </button>
    </div>
  );
}
