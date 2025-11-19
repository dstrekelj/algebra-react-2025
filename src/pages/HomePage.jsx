import { SignInForm } from "../components/SignInForm";

export function HomePage({ onSignIn }) {
  return (
    <>
      <h1>CMS sign-in</h1>
      <SignInForm onSignIn={onSignIn} />
    </>
  );
}
