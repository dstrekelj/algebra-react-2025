import { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { EntryFilterForm } from "../components/EntryFilterForm";
import { Header } from "../components/Header";
import { Entry } from "../domain/Entry";

export function DashboardPage() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState({});

  const handleCreate = (title, note) => {
    const entry = new Entry(title, note);
    setEntries([entry, ...entries]);
  };

  const handleFilter = (title) => {
    setFilter({ title });
  };

  const filteredEntries = entries.filter((entry) => {
    if (filter.title) {
      return entry.title
        .toLocaleUpperCase()
        .includes(filter.title.toLocaleUpperCase());
    }

    return true;
  });

  return (
    <>
      <Header />
      <EntryForm onCreate={handleCreate} />
      <EntryFilterForm onFilter={handleFilter} />
      {filteredEntries.map((entry) => (
        <div key={entry.id}>
          <div>{entry.title}</div>
          <div>{entry.getFormattedDate()}</div>
          <div>{entry.note}</div>
        </div>
      ))}
    </>
  );
}
