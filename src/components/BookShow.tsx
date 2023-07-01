import { Book } from "../App";

type BookShowProps = {
  book: Book;
};

const BookShow = ({ book }: BookShowProps) => {
  return <li>{book.title}</li>;
};

export default BookShow;
