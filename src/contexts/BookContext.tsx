import React, { createContext, useState } from "react";

interface BookInterface {
  title: string;
  id: number;
}

interface BookContextInterface {
  books: BookInterface[];
  setBooks: React.Dispatch<React.SetStateAction<BookInterface[]>>;
}

export const BookContext = createContext<BookContextInterface | null>(null);

const BookContextProvider: React.FC = (props) => {
  const [books, setBooks] = useState<BookInterface[]>([
    { title: "name of the wind", id: 1 },
    { title: "the way of kings", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of ages", id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
