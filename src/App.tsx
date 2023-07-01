import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState<object[]>([]);

  const handleCreateBook = (newBook: string) => {
    const newBookObj = {
      id: new Date().toISOString(),
      title: newBook,
    };
    const updatedBooks = [newBookObj, ...books];
    setBooks(updatedBooks);
    console.log(books);
  };

  return (
    <>
      <BookCreate onCreateBook={handleCreateBook} />
    </>
  );
};

export default App;
