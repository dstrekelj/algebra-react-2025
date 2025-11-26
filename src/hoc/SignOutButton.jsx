import { useContext } from "react";
import { AppContext } from "../contexts/AppContext.jsx";

export function SignOutButtonHoc(component) {
  return function SignOutButton() {
    const appContext = useContext(AppContext);

    const handleClick = () => {
      appContext.signOut();
    };

    const Component = component || "button";

    return (
      appContext.user && (
        <Component type="button" onClick={handleClick}>
          Sign out
        </Component>
      )
    );
  };
}
