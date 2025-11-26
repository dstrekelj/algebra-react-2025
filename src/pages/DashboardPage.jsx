import { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { EntryFilterForm } from "../components/EntryFilterForm";
import { EntrySortForm } from "../components/EntrySortForm";
import { Header } from "../components/Header";
import { Entry } from "../domain/Entry";

export function DashboardPage() {
  const [entries, setEntries] = useState([]);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("ID (ASC)");

  const handleCreate = (title, note) => {
    const entry = new Entry(title, note);
    setEntries([entry, ...entries]);
  };

  const handleFilter = (title) => {
    setFilter({ title });
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const filteredEntries = entries
    .filter((entry) => {
      if (filter.title) {
        return entry.title
          .toLocaleUpperCase()
          .includes(filter.title.toLocaleUpperCase());
      }

      return true;
    })
    .sort((a, b) => {
      switch (sort) {
        case "ID (ASC)":
          return a.id.localeCompare(b.id);
        case "ID (DESC)":
          return b.id.localeCompare(a.id);
        case "Title (ASC)":
          return a.title.localeCompare(b.title);
        case "Title (DESC)":
          return b.title.localeCompare(a.title);
        case "Date (ASC)":
          return a.createdAt - b.createdAt;
        case "Date (DESC)":
          return b.createdAt - a.createdAt;
        default:
          return 0;
      }
    });

  return (
    <>
      <Header />
      <EntryForm onCreate={handleCreate} />
      <EntryFilterForm onFilter={handleFilter} />
      <EntrySortForm onSortChange={handleSortChange} />
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
