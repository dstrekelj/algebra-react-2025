import { useState } from "react";
import "./Input.css";

export function Input({ type, name, placeholder, maxLength, initialValue }) {
  const [value, setValue] = useState(initialValue || "");

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
        value={value}
      />
      {maxLength && (
        <span>
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  );
}
