import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";
import "./SignInForm.css";

export function SignInForm({ onSignIn }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    onSignIn(username, password);
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <Input name="username" type="text" placeholder="Username" />
      <Input name="password" type="password" placeholder="Password" />
      <Button type="submit">Sign in</Button>
    </form>
  );
}
