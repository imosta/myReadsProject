import { Link } from "react-router-dom";
const SearchInput = ({ handleQuery, query }) => {
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={query}
          placeholder="Search by title, author, or ISBN"
          onChange={handleQuery}
        />
      </div>
    </div>
  );
};

export default SearchInput;
