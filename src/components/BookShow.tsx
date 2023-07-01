import { useState } from "react";
import { Book } from "../App";
import BookEdit from "./BookEdit";

type BookShowProps = {
  book: Book;
  onDeleteBook: (bookId: string) => void;
  onEditBook: (bookId: string, newTitle: string) => void;
};

const BookShow = ({ book, onDeleteBook, onEditBook }: BookShowProps) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleEditClick = () => {
    showEdit ? setShowEdit(false) : setShowEdit(true);
  };
  const handleDeleteClick = () => {
    onDeleteBook(book.id);
  };
  const handleEditSubmit = (id: string, newTitle: string) => {
    onEditBook(id, newTitle);
    handleEditClick();
  };

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}300/200`}
        alt="book image"
      />
      {showEdit ? (
        <BookEdit book={book} onEditSubmit={handleEditSubmit} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
