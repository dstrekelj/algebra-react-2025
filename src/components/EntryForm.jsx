import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";

export function EntryForm({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const note = formData.get("note");
    onCreate(title, note);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="title" type="text" placeholder="Title" maxLength={32} />
      <Input name="note" type="text" placeholder="Note" />
      <Button type="submit">Create</Button>
    </form>
  );
}
