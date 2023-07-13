import { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracklist, setTracklist] = useState([])
  const [searchInput, setSearchInput] = useState("")

  // 1. useEffect --> fetch to back end
  // 2. set state with the received data
  // 3. pass data down as prop(s)

  useEffect(()=> {
    fetch("http://localhost:8001/tracks")
    .then(res => res.json())
    .then(data => setTracklist(data))
  }, [])
    
  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <AddTrackForm tracklist={tracklist} setTracklist={setTracklist} />
      <TracksList tracklist={tracklist} searchInput={searchInput} />
    </div>
  )
}

export default TracksPage