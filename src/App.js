import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Link, Route } from "react-router-dom";
import * as booksAPI from "./BooksAPI";
import BookShelf from "./bookShelf";
import SearchPage from "./searchPage";

function App() {
  const [books, setBooks] = useState([]);

  const moveBook = async (book, newShelf) => {
    const res = await booksAPI.update(book, newShelf);
    return res;
  };

  const moveResponse = moveBook;

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const getBooks = async () => {
        const res = await booksAPI.getAll();
        setBooks(res);
      };
      getBooks();
    }

    return () => {
      mounted = false;
    };
  }, [moveResponse]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf
                    shelfTitle="Currently Reading"
                    shelfName="currentlyReading"
                    books={books}
                    onMoveBook={moveBook}
                  ></BookShelf>
                  <BookShelf
                    shelfTitle="Want to Read"
                    shelfName="wantToRead"
                    books={books}
                    onMoveBook={moveBook}
                  ></BookShelf>
                  <BookShelf
                    shelfTitle="Read"
                    shelfName="read"
                    books={books}
                    onMoveBook={moveBook}
                  ></BookShelf>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          </div>
        }
      ></Route>

      <Route
        path="/search"
        element={<SearchPage books={books} onMoveBook={moveBook}></SearchPage>}
      ></Route>
    </Routes>
  );
}

export default App;
