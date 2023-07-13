import Track from './Track'

function TracksList({ tracks, search }) {
  const filteredList = tracks.filter(track => {
    return (
      track.title.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase())
    )
  })

  const tracksDisplay = filteredList.map(track => {
    return <Track 
      title={track.title}
      artist={track.artist}
      bpm={track.BPM}
      image={track.image}
      key={track.id}
    />
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
        {tracksDisplay}
      </tbody>
    </table>
  )
}

export default TracksList