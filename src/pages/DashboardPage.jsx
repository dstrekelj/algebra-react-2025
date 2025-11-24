import { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Header } from "../components/Header";
import { Entry } from "../domain/Entry";

export function DashboardPage() {
  const [entries, setEntries] = useState([]);

  const handleCreate = (title, note) => {
    const entry = new Entry(title, note);
    setEntries([entry, ...entries]);
  };

  return (
    <>
      <Header />
      <EntryForm onCreate={handleCreate} />
      {entries.map((entry) => (
        <div key={entry.id}>
          <div>{entry.title}</div>
          <div>{entry.getFormattedDate()}</div>
          <div>{entry.note}</div>
        </div>
      ))}
    </>
  );
}
