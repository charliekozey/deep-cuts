import { useState } from "react"

function AddTrackForm({ tracks, setTracks }) {
  // post to back end
  // gather info from form inputs (useState)
  // build new track object
  // update list of tracks with new object (spread operator, setTracks())

  const [newTrack, setNewTrack] = useState({
    title: "",
    artist: "",
    image: "",
    BPM: 0
  })

  function updateNewTrack(e) {
    const {name, value} = e.target

    setNewTrack({
      ...newTrack,
      [name]: value
    })
  }

  function submitNewTrack(e) {
    e.preventDefault()

    setTracks(tracks => [...tracks, newTrack])

    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrack)
    })
  }

  return (
      <form onSubmit={e => submitNewTrack(e)}>
        <div>
          <input value={newTrack.image} type="text" name="image" placeholder="Image URL" onChange={e => updateNewTrack(e)} />
          <input value={newTrack.title} type="text" name="title" placeholder="title"  onChange={e => updateNewTrack(e)} />
          <input value={newTrack.artist} type="text" name="artist" placeholder="Artist"  onChange={e => updateNewTrack(e)} />
          <input value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00"  onChange={e => updateNewTrack(e)} />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm