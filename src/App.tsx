import React from "react";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";

import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar></Navbar>
          <BookContextProvider>
            <BookList></BookList>
          </BookContextProvider>
          <ThemeToggle></ThemeToggle>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
