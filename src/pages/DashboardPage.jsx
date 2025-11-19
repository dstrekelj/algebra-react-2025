import { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Header } from "../components/Header";

export function DashboardPage({ onSignOut, user }) {
  const [entry, setEntry] = useState(null);

  const handleCreate = (title) => {
    setEntry(title);
  };

  return (
    <>
      <Header onSignOut={onSignOut} user={user} />
      <EntryForm onCreate={handleCreate} />
      {entry && <p>{entry}</p>}
    </>
  );
}
