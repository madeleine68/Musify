import React from "react";

import { useState, useEffect } from "react"
import { LoadingSpinner, Stats } from '../utils'
import ApexChart from "./ApexChart"
//import MainDisplay from "./MainDisplay";
import ApexChart2 from "./ApexChart2";
import Footer from "./Footer"
//import CardsWrapper from "./Graphs/cardWrapper";
export default function Chart ({ statTrack}) {

    const [stats, setStats] = useState(null)
	const [loading, setLoading] = useState(false)
          
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
				<h2>Your Vibe, Spotify Stats</h2>
                {/* {stats !== null && Object.keys(stats).length > 0 ? ( */}
                    {/* // <Stats stats={stats} /> */}
                {/* // ) : null} */}
            </div>
        )}
           <ApexChart stats={stats} />
					 <ApexChart2 stats={stats} />

					 <Footer/>
        </div>
        
    )
} 