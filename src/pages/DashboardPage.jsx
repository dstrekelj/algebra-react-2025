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
  const [editingEntryId, setEditingEntryId] = useState(null);

  const handleCreate = (title, note) => {
    const entry = new Entry({ title, note });
    setEntries([entry, ...entries]);
  };

  const handleEntryEdit = (title, note) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === editingEntryId) {
        return new Entry({
          id: entry.id,
          title,
          note,
          createdAt: entry.createdAt,
        });
      }
      return entry;
    });
    setEntries(updatedEntries);
    setEditingEntryId(null);
  };

  const handleFilter = (title) => {
    setFilter({ title });
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
  };

  const handleEdit = (id) => {
    setEditingEntryId(id);
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
      <EntryForm onSubmit={handleCreate} />
      <EntryFilterForm onFilter={handleFilter} />
      <EntrySortForm onSortChange={handleSortChange} />
      {filteredEntries.map((entry) => (
        <div key={entry.id}>
          <div>{entry.title}</div>
          <div>{entry.getFormattedDate()}</div>
          <div>{entry.note}</div>
          <button onClick={() => handleDelete(entry.id)}>Delete</button>
          <button onClick={() => handleEdit(entry.id)}>Edit</button>
        </div>
      ))}
      {editingEntryId && (
        <EntryForm
          onSubmit={handleEntryEdit}
          entry={entries.find((entry) => entry.id === editingEntryId)}
        />
      )}
    </>
  );
}
