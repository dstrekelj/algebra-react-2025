import { useContext, useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Header } from "../components/Header";
import { AppContext } from "../contexts/AppContext.jsx";
import { Entry } from "../domain/Entry";

export function DashboardPage({ onSignOut, user }) {
  const appContext = useContext(AppContext);

  console.log(appContext);

  const [entries, setEntries] = useState([]);

  const handleCreate = (title, note) => {
    const entry = new Entry(title, note);
    setEntries([entry, ...entries]);
  };

  return (
    <>
      <Header onSignOut={onSignOut} user={user} />
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
