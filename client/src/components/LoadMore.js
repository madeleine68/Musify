import React, {useState} from "react";


export default function LoadMore () {
   const [limit, setLimit] = useState (3)

    const loadMore = () => {
        setLimit(limit+3)
    }

    return (
        <>
         <button onClick={loadMore}> Load More </button>
        </>
    )
    
}
