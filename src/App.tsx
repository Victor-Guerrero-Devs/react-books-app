import { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState<string[]>([]);

  const createBookHandler = (newBook: string) => {
    setBooks([...books, newBook]);
    console.log(books);
  };
  return (
    <>
      <h1>Hello world</h1>
      <BookCreate onBookCreate={createBookHandler} />
    </>
  );
};

export default App;
