import Track from './Track'

function TracksList({ tracklist, searchInput }) {
  console.log("tracklist here:", tracklist)

  // 1. tracklist.map() to return individual tracks: <Track title={title}... />
  // 2. pass title, artist, etc into track component
  // 3. save list of <Track /> components to a variable and insert into jsx

  const filteredTracklist = tracklist.filter(track => {
    // turn search input to lowercase
    // see if track title OR artist (to lowercase) includes search input

    return track.title.toLowerCase().includes(searchInput.toLowerCase()) || track.title.toLowerCase().includes(searchInput.toLowerCase())
  })

  const displayTracks = filteredTracklist.map(track => {
     return <Track title={track.title} artist={track.artist} image={track.image} bpm={track.BPM} key={track.id} />
  })

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {displayTracks}
      </tbody>
    </table>
  )
}

export default TracksList