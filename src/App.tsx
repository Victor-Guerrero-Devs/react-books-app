import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export type Book = {
  id: string;
  title: string;
};

const App = () => {
  const api_url = "http://localhost:3001/books";
  const [books, setBooks] = useState<Book[]>([]);

  // Fetch initial data on component mount
  useEffect(() => {
    axios.get(api_url).then((response) => {
      setBooks(response.data);
    });
  }, []);

  // Fetch data whenever the books state changes
  useEffect(() => {
    axios.get(api_url).then((response) => {
      setBooks(response.data);
    });
  }, [books]);

  const handleEditBook = (bookId: string, newTitle: string) => {
    const updatedBooks = books.map((book) =>
      book.id === bookId ? { ...book, title: newTitle } : book
    );
    setBooks(updatedBooks);
  };
  const handleDeleteBook = (bookId: string) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (newBook: string) => {
    const response = await axios.post(api_url, {
      title: newBook,
    });
    console.log(response);
    // const newBookObj = {
    //   id: Math.round(Math.random() * 9999).toString(),
    //   title: newBook,
    // };
    // const updatedBooks = [newBookObj, ...books];
    // setBooks(updatedBooks);
    // console.log(books);
  };

  return (
    <div className="app">
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onEditBook={handleEditBook}
      />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
};

export default App;
