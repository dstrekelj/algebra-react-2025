import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";

export function EntryFilterForm({ onFilter }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    onFilter(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="title" type="text" placeholder="Title" maxLength={32} />
      <Button type="submit">Filter</Button>
    </form>
  );
}
