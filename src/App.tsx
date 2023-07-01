import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export type Book = {
  id: string;
  title: string;
};

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const handleDeleteBook = (bookId: string) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleCreateBook = (newBook: string) => {
    const newBookObj = {
      id: Math.round(Math.random() * 9999).toString(),
      title: newBook,
    };
    const updatedBooks = [newBookObj, ...books];
    setBooks(updatedBooks);
    console.log(books);
  };

  return (
    <div className="app">
      <BookList books={books} onDeleteBook={handleDeleteBook} />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
};

export default App;
