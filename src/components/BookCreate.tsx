import { useState, useContext } from "react";
import { BookContext } from "../context/booksContext";

const BookCreate = () => {
  const { handleCreateBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateBook(title);
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
