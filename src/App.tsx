import { useContext, useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { BookContext } from "./context/booksContext";
import { BookContextProvider } from "./context/booksContext";

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
      <BookContextProvider>
        <BookList />
        <BookCreate />
      </BookContextProvider>
    </div>
  );
};

export default App;
