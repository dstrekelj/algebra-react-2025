import { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Header } from "../components/Header";
import { Entry } from "../domain/Entry";

export function DashboardPage({ onSignOut, user }) {
  const [entries, setEntries] = useState([]);

  const handleCreate = (title) => {
    const entry = new Entry(title);
    setEntries([entry, ...entries]);
  };

  return (
    <>
      <Header onSignOut={onSignOut} user={user} />
      <EntryForm onCreate={handleCreate} />
      {entries.map((entry) => (
        <p key={entry.id}>{entry.title}</p>
      ))}
    </>
  );
}
