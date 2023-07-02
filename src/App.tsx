import { useContext, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { BookContext } from "./context/booksContext";

export type Book = {
  id: string;
  title: string;
};

const App = () => {
  const { fetchBooks } = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
