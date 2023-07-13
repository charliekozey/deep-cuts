function Search({ search, setSearch }) {
  return (
    <div className="search">
        <input
          type="text"
          value={search}
          placeholder="Search your Tracks"
          onChange={e => setSearch(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search