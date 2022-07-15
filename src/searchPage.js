import { useState, useEffect } from "react";
import * as booksAPI from "./BooksAPI";
import Book from "./book";
import SearchInput from "./searchInput";
const SearchPage = ({ books, onMoveBook }) => {
  const [query, setQuery] = useState("");
  const [serachResult, setSearchResult] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (mounted && query) {
      const getSearchResults = async () => {
        const res = await booksAPI.search(query);
        setSearchResult(res);
      };

      getSearchResults();
    }
    return () => {
      mounted = false;
    };
  }, [query]);

  const handleQuery = (event) => {
    setQuery(event.target.value);
    if (event.target.value.length === 0) {
      setSearchResult([]);
    }
  };

  return (
    <div className="search-books">
      <SearchInput query={query} handleQuery={handleQuery}></SearchInput>
      <div className="search-books-results">
        <ol className="books-grid">
          {serachResult.length > 0 &&
            serachResult.map((book) => {
              book.shelf = "none";
              for (const bookOfBooks of books) {
                if (bookOfBooks.id === book.id) {
                  book.shelf = bookOfBooks.shelf;
                }
              }
              return (
                <Book key={book.id} book={book} onMoveBook={onMoveBook}></Book>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
