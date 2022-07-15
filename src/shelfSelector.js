const ShelfSelector = ({ onMoveBook, book }) => {
  const optionHandler = (event) => {
    onMoveBook(book, event.target.value);
  };

  //Put the useEffect Update Function in here please.

  return (
    <div className="book-shelf-changer">
      <select onChange={optionHandler} defaultValue={book.shelf}>
        <option value="disabled" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSelector;
