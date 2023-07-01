import { useState } from "react";
import { Book } from "../App";

type BookEditProps = {
  book: Book;
  onEditSubmit: () => void;
  onEditBook: (bookId: string, newTitle: string) => void;
};

const BookEdit = ({ book, onEditSubmit, onEditBook }: BookEditProps) => {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditSubmit();
    onEditBook(book.id, title);
  };

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookEdit;
