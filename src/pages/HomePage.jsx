import { SignInForm } from "../components/SignInForm";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home-page">
      <h1>CMS sign-in</h1>
      <SignInForm />
    </div>
  );
}
