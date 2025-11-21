import { useState } from "react";
import "./Input.css";

export function Input({ type, name, placeholder, maxLength }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}
      />
      {maxLength && (
        <span>
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  );
}
