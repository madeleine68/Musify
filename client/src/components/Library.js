import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import { DoubleCard, TrackItem } from '../utils'
import { Link } from 'react-router-dom'
import Footer from "./Footer"


export default function Library({ accessToken, spotifyApi, tracks, convertMS, recent  }) {

    return(
        <div>
        <Header accessToken={accessToken} spotifyApi={spotifyApi}/>
        {/* favorite songs */}
        <div>
            <h3 id="headerTitle">Your favourite songs </h3> 
            <div className="grid-container grid">
                { tracks && tracks.map(track => 
                    <Link to={`/track/${track.id}`} key={track.id}  className= "grid-item">
                        <DoubleCard imageURL={track.album.images[1].url} itemName={track.name} subItem={track.artists}/>
                    </Link>      
                )}
            </div>
        </div>  

        {/* recently played */}
        		<div>
						<h3 id="headerTitle" >Recently played tracks</h3>
						<div className="grid-container grid">
						
								{recent && recent.map(song => 
									<div  key={song.played_at}>
										<div >
											<Link to={`/track/${song.track.id}`} className= "grid-item">
												<TrackItem songName={song.track.name} songArtists={song.track.artists} songAlbum={song.track.album.name} picURL={song.track.album.images[1].url}/>
											</Link>
										</div>
									</div>
								)}
						
					    </div>
					</div>
			<Footer/>
      </div>
			
    )
}

