import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState<string[]>([]);

  const handleCreateBook = (newBook: string) => {
    setBooks([...books, newBook]);
    console.log(books);
  };

  return (
    <>
      <BookCreate onCreateBook={handleCreateBook} />
    </>
  );
};

export default App;
