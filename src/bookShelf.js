import PropTypes from "prop-types";

import Book from "./book";
const BookShelf = ({ shelfTitle, shelfName, books, onMoveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books
              .filter((book) => book.shelf === shelfName)
              .map((book) => {
                return (
                  <Book
                    key={book.id}
                    onMoveBook={onMoveBook}
                    book={book}
                  ></Book>
                );
              })}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired,
};
export default BookShelf;
