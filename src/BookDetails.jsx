function BookDetails({title, author}) {
  return (
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-gray-600">{author}</p>
    </div>
  )
}

export default BookDetails
