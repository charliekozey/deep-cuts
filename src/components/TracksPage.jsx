import { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
    .then(res => res.json())
    .then(data => setTracks(data))
  }, [])
    
  return (
    <div>
      <Search tracks={tracks} search={search} setSearch={setSearch} />
      <AddTrackForm tracks={tracks} setTracks={setTracks} />
      <TracksList tracks={tracks} search={search} />
    </div>
  )
}

export default TracksPage