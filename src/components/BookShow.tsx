import { Book } from "../App";

type BookShowProps = {
  book: Book;
  onDeleteBook: (bookId: string) => void;
};

const BookShow = ({ book, onDeleteBook }: BookShowProps) => {
  return (
    <div className="book-show" onClick={() => onDeleteBook(book.id)}>
      {book.title}
    </div>
  );
};

export default BookShow;
