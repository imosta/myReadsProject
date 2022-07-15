import PropTypes from "prop-types";

import ShelfSelector from "./shelfSelector";

const Book = ({ book, onMoveBook }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          ></div>
          <ShelfSelector onMoveBook={onMoveBook} book={book}></ShelfSelector>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book?.authors}</div>
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired,
};
export default Book;
