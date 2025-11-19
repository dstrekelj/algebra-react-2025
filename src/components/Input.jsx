import "./Input.css";

export function Input({ type, name, placeholder }) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
