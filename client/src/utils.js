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

export const LoadingSpinner = () => {
	return (
		<div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75">
			<div className="absolute abs-center">
				<div className="loading-spinner border-4 w-24 h-24 border-green-400 rounded-full"></div>
			</div>
		</div>
	)
}

export const Stats = ({ stats }) => {
	return (
		<div className="mx-auto max-w-2xl">
			<h2 className="text-center font-bold uppercase italic tracking-wider text-xl mb-4">
				Your Spotify stats:
			</h2>
			<div className="p-4 border-white rounded-lg border">
				<StatBar name="Acousticness" stat={stats.acousticness} />
				<StatBar name="Danceability" stat={stats.danceability} />
				<StatBar name="Energy" stat={stats.energy} />
				<StatBar name="Instrumentalness" stat={stats.instrumentalness} />
				<StatBar name="Positivity" stat={stats.valence} />
			</div>
		</div>
	)
}

export const StatBar = ({ name, stat }) => {
	return (
		<div>
			<div className="flex items-end mb-8">
				<div className="font-bold italic tracking-wider text-center uppercase">
					0
				</div>
				<div className="flex-1 mx-4 relative">
					<h2 className="font-bold italic tracking-wider text-center uppercase mb-1">
						{name}
					</h2>
					<div
						className="bg-white h-6"
						style={{ width: `${stat * 10}%` }}
					></div>
					<span
						className="absolute top-full"
						style={{ left: `${stat * 10 - 2}%` }}
					>
						{stat}
					</span>
				</div>
				<div className="font-bold italic tracking-wider text-center uppercase">
					10
				</div>
			</div>
		</div>
	)
}
