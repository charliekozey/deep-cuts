import { useState } from 'react'

function AddTrackForm({ tracklist, setTracklist }) {
  const [newTrack, setNewTrack] = useState({
    title: "",
    artist: "",
    BPM: 0,
    image: ""
  })

  // 1. get user input: newTrack object in state, e.target.value, e.target.name
  // 2. submitNewTrack() contains setTrackList and POST

  function updateNewTrack(e) {
    setNewTrack({
      ...newTrack,
      [e.target.name]: e.target.value
    })
  }

  function submitNewTrack(e) {
    e.preventDefault()
    // POST
    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrack)
    })

    setTracklist(tracklist => [...tracklist, newTrack])

    e.target.reset()
  }

  return (
      <form onSubmit={e => submitNewTrack(e)}>
        <div>
          <input value={newTrack.image} type="text" name="image" placeholder="Image URL" onChange={e => updateNewTrack(e)} />
          <input value={newTrack.title} type="text" name="title" placeholder="title"  onChange={e => updateNewTrack(e)} />
          <input value={newTrack.artist} type="text" name="artist" placeholder="Artist" onChange={e => updateNewTrack(e)} />
          <input value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={e => updateNewTrack(e)} />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm