import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export type Book = {
  id: string;
  title: string;
};

const App = () => {
  const apiUrl = "http://localhost:3001/books";
  const [books, setBooks] = useState<Book[]>([]);

  const handleEditBook = async (bookId: string, newTitle: string) => {
    try {
      const response = await axios.put(`${apiUrl}/${bookId}`, {
        title: newTitle,
      });
      const updatedBooks = books.map((book) => {
        if (book.id === bookId) {
          // if any other properties are changed, add those as well
          return { ...book, ...response.data };
        }

        return book;
      });
      setBooks(updatedBooks);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const handleDeleteBook = async (bookId: string) => {
    try {
      await axios.delete(`${apiUrl}/${bookId}`);
      const updatedBooks = books.filter((book) => book.id !== bookId);
      setBooks(updatedBooks);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  const handleCreateBook = async (newBook: string) => {
    try {
      const response = await axios.post(apiUrl, {
        title: newBook,
      });
      const updatedBooks = [response.data, ...books];
      setBooks(updatedBooks);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBooks(response.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

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
