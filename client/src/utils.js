export const DoubleCard = ({ imageURL, subItem, itemName }) => {
	return (
			<div className="container">
				<div className='column' style={{width:"100%"}}>
					<img src={imageURL} alt="" className='img-thumbnail'/>   
					<p className="text-truncate text-body" style={{fontSize:"20px"}}>{itemName}</p>
					<div className='text-body' style={{fontSize:"15px"}}>
						{Array.isArray(subItem) ? 
							<p className='text-truncate'>{cleaner(subItem)}</p> 
							: 
							<p className='text-truncate'>{subItem}</p>}
				    </div>
				</div>	
			</div>
	)
}

export const TrackItem = ({songName, songArtists, picURL}) => {
	return (
		<div className="container">
			<div className='column' style={{width:"100%"}}>
				<img src={picURL} alt="track" className='img-thumbnail'/>
				<p className="text-truncate text-body" style={{fontSize:"20px"}} >{songName}</p>
				<div className='text-body' style={{fontSize:"15px"}}>
				{Array.isArray(songArtists) && songArtists ?
					<p className='text-truncate' >{cleaner(songArtists)}</p>
					:
					<p className='text-truncate' >{songArtists}</p>
				}	
				</div>
			</div>	
		</div>
	)
}

export const cleaner = (arr) => 
{
	const array = arr.map(solo => solo.name)
	return array.join(', ')
}


