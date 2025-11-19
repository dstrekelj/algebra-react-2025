import { Button } from "./Button.jsx";
import { Input } from "./Input.jsx";

export function EntryForm({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    onCreate(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="title" type="text" placeholder="Title" />
      <Button type="submit">Create</Button>
    </form>
  );
}
