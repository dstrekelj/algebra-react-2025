import { Button } from "./Button";
import { useSignOut } from "../hooks/useSignOut";

export function SignOutButton() {
  const { signOut } = useSignOut();

  return (
    <Button type="button" onClick={signOut}>
      Sign out
    </Button>
  );
}
