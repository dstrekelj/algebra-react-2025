import { useContext } from "react";
import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";
import { PasswordInput } from "./PasswordInput.jsx";
import { AppContext } from "../contexts/AppContext.jsx";
import "./SignInForm.css";

export function SignInForm() {
  const appContext = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    appContext.signIn(username, password);
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <Input name="username" type="text" placeholder="Username" />
      <PasswordInput name="password" placeholder="Password" />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
