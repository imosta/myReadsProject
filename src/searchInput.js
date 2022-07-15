import PropTypes from "prop-types";
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

SearchInput.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default SearchInput;
