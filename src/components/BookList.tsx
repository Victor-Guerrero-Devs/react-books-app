import { Book } from "../App";
import BookShow from "./BookShow";

type BookListProps = {
  books: Book[];
};

const BookList = ({ books }: BookListProps) => {
  return (
    <ul>
      {books.map((book) => (
        <BookShow key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;
