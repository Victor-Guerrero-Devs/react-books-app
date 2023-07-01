import { useState } from "react";
import { Book } from "../App";

type BookEditProps = {
  book: Book;
  onEditSubmit: (bookId: string, newTitle: string) => void;
};

const BookEdit = ({ book, onEditSubmit }: BookEditProps) => {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditSubmit(book.id, title);
  };

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="input"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button className="button is-primary" type="submit">
          Edit Title
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
