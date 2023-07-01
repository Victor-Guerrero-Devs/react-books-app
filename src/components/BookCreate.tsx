import { useState } from "react";

type BookCreateProps = {
  onBookCreate: (newBook: string) => void;
};

const BookCreate = ({ onBookCreate }: BookCreateProps) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookCreate(title);
    setTitle("");
  };

  const handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleTitleChange}
            value={title || ""}
            type="text"
            id="title"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BookCreate;
