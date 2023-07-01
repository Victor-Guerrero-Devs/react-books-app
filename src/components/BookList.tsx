import { Book } from "../App";
import BookShow from "./BookShow";

type BookListProps = {
  books: Book[];
  onDeleteBook: (bookId: string) => void;
  onEditBook: (bookId: string, newTitle: string) => void;
};

const BookList = ({ books, onDeleteBook, onEditBook }: BookListProps) => {
  const renderedBooks = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      onDeleteBook={onDeleteBook}
      onEditBook={onEditBook}
    />
  ));
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
