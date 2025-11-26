import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";

export function EntryForm({ onSubmit, entry }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const note = formData.get("note");
    onSubmit(title, note);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="title"
        type="text"
        placeholder="Title"
        maxLength={32}
        initialValue={entry?.title}
      />
      <Input
        name="note"
        type="text"
        placeholder="Note"
        initialValue={entry?.note}
      />
      <Button type="submit">{entry ? "Update" : "Create"}</Button>
    </form>
  );
}
