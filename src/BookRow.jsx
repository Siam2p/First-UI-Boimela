import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

function BookRow({book, onFeatureBooks}) {
   // console.log(book);
  return (
   <div className="flex justify-between items-center p-6 rounded-md shadow mb-4">
      <BookDetails title={book.title} author={book.author}/>
      <FeatureBook book={book} onFeatureBooks={onFeatureBooks}/>
   </div>
  )
}

export default BookRow;
