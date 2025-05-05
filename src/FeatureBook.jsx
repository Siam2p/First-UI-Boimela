import { Star } from "lucide-react";

function FeatureBook({ book, onFeatureBooks }) {
  return (
    <button
    onClick={() => onFeatureBooks(book.id)}
    className={`w-12 h-12 flex items-center justify-center cursor-pointer rounded-lg border border-gray-300 ${book.featured ? "bg-black" : "bg-white"}`}>
      <Star  className={book.featured? "w-6 h-6 text-white fill-white" : "w-6 h-6 text-black" }/>
    </button>
  )
}

export default FeatureBook
