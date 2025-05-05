import BookRow from "./BookRow"


function BookList({searchTerm, books, onFeatureBooks}) {
  let rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      rows.push(<BookRow key={book.id} book={book} onFeatureBooks={onFeatureBooks}/>);
    }
  }); 
  return (
    <div className="mt-2">
      {rows}
    </div>
  )
}

export default BookList
