import React from 'react'

function Search({ searchInput, setSearchInput }) {
  function handleSearch(e) {
    setSearchInput(e.target.value)
  }

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={e => handleSearch(e)}
          value={searchInput}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search