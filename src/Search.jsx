function Search({searchTerm, onSearchBook}) {
  return (
    <form action="">
      <input 
      type="text"
      value= {searchTerm}
      placeholder="Search books..."
      onChange={(event) => onSearchBook(event.target.value)}
      
      className="mb-4 border rounded-md p-1 w-full"   
    />
    </form>
  )
}

export default Search
