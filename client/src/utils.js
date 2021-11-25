export const DoubleCard = ({ imageURL, subItem, itemName }) => 
{
	return (
			<div className="container">
				<div className='column' style={{width:"100%"}}>
					<img src={imageURL} alt="" className='img-thumbnail'/>   
					<p className="text-truncate text-body" style={{fontSize:"20px"}}>{itemName}</p>
					<div className='text-body' style={{fontSize:"15px"}}>
						{Array.isArray(subItem) ? 
							<p className='truncate'>{cleaner(subItem)}</p> 
							: 
							<p className='truncate'>{subItem}</p>}
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