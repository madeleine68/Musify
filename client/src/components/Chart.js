import { useState, useEffect } from "react"
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
					 <ApexChart2 stats={stats} />
					 <div>
					
					
					<p class="style">Guide to audio features</p>
                <br />
                <div class="definitions">
                    <p class="def"><strong>Energy: </strong>Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale.</p>
                    <p class="def"><strong>Danceability: </strong>Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.</p>
                    <p class="def"><strong>Liveness: </strong>Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.</p>
                    <p class="def"><strong>Acousticness: </strong>A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.</p>
                    <p class="def"><strong>Valence: </strong>A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
                    <p class="def"><strong>Speechiness: </strong>Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.</p>
										</div>
										<Fade delay={500}>
          <a class="look" href={URL} target="_blank">
                    <button class="next" id="enter">Click here to learn more about audio features</button>
                    </a>
            
          </Fade>
					</div>
        </div>
        
    )
} 