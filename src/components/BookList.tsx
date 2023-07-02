import BookShow from "./BookShow";
import { useContext } from "react";
import { BookContext } from "../context/booksContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
