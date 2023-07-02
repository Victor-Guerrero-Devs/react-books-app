import { createContext, useContext, useState } from "react";
import axios from "axios";

type Book = {
  id: string;
  title: string;
};

type BookContextType = {
  books: Book[];
  fetchBooks: () => void;
  handleEditBook: (bookId: string, newTitle: string) => void;
  handleDeleteBook: (bookId: string) => void;
  handleCreateBook: (newBook: string) => void;
};

export const BookContext = createContext<BookContextType>({
  books: [],
  fetchBooks: () => {},
  handleEditBook: () => {},
  handleDeleteBook: () => {},
  handleCreateBook: () => {},
});

export const useBookContext = () => useContext(BookContext);

type BookContextProviderProps = {
  children: React.ReactNode;
};

export const BookContextProvider = ({ children }: BookContextProviderProps) => {
  const apiUrl = "http://localhost:3001/books";
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get(apiUrl);
    setBooks(response.data);
  };

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

  return (
    <BookContext.Provider
      value={{
        books,
        fetchBooks,
        handleEditBook,
        handleDeleteBook,
        handleCreateBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
