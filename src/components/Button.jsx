import "./Button.css";

export function Button({ onClick, children, type }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
