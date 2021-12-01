import React , { useState, useEffect } from "react"
import { LoadingSpinner, Stats } from '../utils'
import ApexChart from "./ApexChart"
import ApexChart2 from "./ApexChart2";
import Fade from "react-reveal/Fade";

export default function Chart ({ statTrack}) {
	

  const [stats, setStats] = useState(null)
	const [loading, setLoading] = useState(false)
	const URL ="https://www.theverge.com/tldr/2018/2/5/16974194/spotify-recommendation-algorithm-playlist-hack-nelson"
          
    useEffect(() => {
		const buildStats = () => {
			if (statTrack.length > 0) {
				const _stats = {
					acousticness: calcAverageStat('acousticness'),
					danceability: calcAverageStat('danceability'),
					energy: calcAverageStat('energy'),
					instrumentalness: calcAverageStat('instrumentalness'),
					valence: calcAverageStat('valence'),
				}

				setStats(_stats)
				setLoading(false)
			}
		}

		buildStats()
	}, [statTrack])

	const calcAverageStat = stat => {
		let statTotal = 0

		statTrack.forEach(track => {
			statTotal += track[stat]
		})

		return Math.round((statTotal / statTrack.length) * 1000) / 10
	}
    return (
      <div>
        {loading ? (
            <LoadingSpinner />
        ) : (
            <div>
				<h2 class="text">Your favorite audio features</h2>
				<h3 class="style">Based on data from your top tracks listened to on Spotify, you prefer these features in a song.</h3>
				
                {/* {stats !== null && Object.keys(stats).length > 0 ? ( */}
                    {/* // <Stats stats={stats} /> */}
                {/* // ) : null} */}
            </div>
        )}
           <ApexChart stats={stats} />
					 {/* <ApexChart2 stats={stats} /> */}
					 <div>
					 <Fade delay={500}>
          <a class="look" href={URL} target="_blank">
                    <button class="next" id="enter">Click here to learn about audio features</button>
                    </a>
            
          </Fade>
					</div>
        </div>
        
    )
} 