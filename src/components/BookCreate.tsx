import { useState } from "react";

type BookCreateProps = {
  onCreateBook: (newBook: string) => void;
};

const BookCreate = ({ onCreateBook }: BookCreateProps) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateBook(title);
    setTitle("");
  };

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleTitleChange}
            value={title || ""}
            type="text"
            id="title"
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
