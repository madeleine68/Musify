import Header from "./Header"
import { DoubleCard } from '../utils'
import { Link } from 'react-router-dom'


export default function Library({ accessToken, spotifyApi, tracks }) {

    return(
        <div>
        <Header accessToken={accessToken} spotifyApi={spotifyApi}/>
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
      </div>
    )
}

