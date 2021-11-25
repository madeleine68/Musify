import Header from "./Header"
import { DoubleCard, TrackItem } from '../utils'
import { Link } from 'react-router-dom'


export default function Library({ accessToken, spotifyApi, tracks, convertMS, recent  }) {

    return(
        <div>
        <Header accessToken={accessToken} spotifyApi={spotifyApi}/>
        {/* favorite songs */}
        <div className='mt-12'>
            <h5 style={{padding:"40px"}}>Your favourite songs </h5> 
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5'>
                { tracks && tracks.map(track => 
                    <Link to={`/track/${track.id}`} key={track.id}>
                        <DoubleCard imageURL={track.album.images[2].url} itemName={track.name} subItem={track.artists}/>
                    </Link>      
                )}
            </div>
        </div>  

        {/* recently played */}
        <div>
						<h5 style={{padding:"40px"}} >Recently played tracks</h5>
						<div >
							<div>
								<div>
									{/* <div>TRACK</div>
									<div>ALBUM</div>
									<div>DURATION</div> */}
								</div>
								<span >
									{recent && recent.map(song => 
										<div  key={song.played_at}>
											<div >
												<Link to={`/track/${song.track.id}`}>
													<TrackItem songName={song.track.name} songArtists={song.track.artists} songAlbum={song.track.album.name} picURL={song.track.album.images[2].url}/>
												</Link>
											</div>
										</div>
									)}
								</span>
							</div>
						</div>
					</div>
      </div>
    )
}

