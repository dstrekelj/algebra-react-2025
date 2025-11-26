import { useEffect, useState } from "react";

export function EntrySortForm({ onSortChange }) {
  const [value, setValue] = useState("ID (ASC)");

  useEffect(() => {
    onSortChange(value);
  }, [value, onSortChange]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <label htmlFor="sort">Sort by:</label>
      <select name="sort" onChange={handleChange} value={value}>
        <option value="ID (ASC)">ID (ASC)</option>
        <option value="ID (DESC)">ID (DESC)</option>
      </select>
    </form>
  );
}
