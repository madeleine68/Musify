import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import { DoubleCard, TrackItem } from '../utils'
import { Link } from 'react-router-dom'


export default function Library({ accessToken, spotifyApi, tracks, recent  }) {

	const [limitTop, setLimitTop] = useState(3)
    const [limitRecent, setLimitRecent] = useState(3)
    const loadMore = () => {
        setLimitTop(limitTop+3)
    }
    const loadMoreR = () => {
        setLimitRecent(limitRecent+3)
    }
    return(
        <div>
        <Header accessToken={accessToken} spotifyApi={spotifyApi}/>
        {/* favorite songs */}
        <div>
            <h3 id="headerTitle">Your favourite songs </h3> 
            <div className="grid-container grid">
                { tracks && tracks.slice(0,limitTop ? limitTop:limitTop.length).map(track => 
                    <Link to={`/track/${track.id}`} key={track.id}  className= "grid-item">
                        <DoubleCard imageURL={track.album.images[1].url} itemName={track.name} subItem={track.artists}/>
                    </Link>      
                )}
			<button class="next" style={{height: "55px"}} onClick={loadMore}> Load More </button>
            </div>
        </div>  

        {/* recently played */}
        		<div>
						<h3 id="headerTitle" >Recently played tracks</h3>
						<div className="grid-container grid">
								{recent && recent.slice(0,limitRecent ? limitRecent:limitRecent.length).map(song => 
									<div  key={song.played_at}>
										<div >
											<Link to={`/track/${song.track.id}`} className= "grid-item">
												<TrackItem songName={song.track.name} songArtists={song.track.artists} songAlbum={song.track.album.name} picURL={song.track.album.images[1].url}/>
											</Link>		
										</div>		
									</div>
								)}
							<button class="next" style={{height: "55px"}} onClick={loadMoreR}> Load More </button>
					    </div>
					</div>
			
      </div>
			
    )
}

