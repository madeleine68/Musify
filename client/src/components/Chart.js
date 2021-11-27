import { useState, useEffect } from "react"
import { LoadingSpinner, Stats } from '../utils'

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

		return Math.round((statTotal / statTrack.length) * 1000) / 100
	}
    return (
        <div>
        {loading ? (
            <LoadingSpinner />
        ) : (
            <>
                {stats !== null && Object.keys(stats).length > 0 ? (
                    <Stats stats={stats} />
                ) : null}
            </>
        )}
        </div>
    )
} 