import { Book } from "../App";
import BookShow from "./BookShow";

type BookListProps = {
  books: Book[];
  onDeleteBook: (bookId: string) => void;
};

const BookList = ({ books, onDeleteBook }: BookListProps) => {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDeleteBook={onDeleteBook} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
