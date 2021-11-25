import { Routes, Route, BrowserRouter } from "react-router-dom"
import Library from "./components/Library"
import Dashboard from "./Dashboard"
import { Tabs, Tab } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node";
import { useAuth } from "./useAuth"
import { useState, useEffect } from "react"
import axios from "axios"

const spotifyApi = new SpotifyWebApi({
    clientId: "debf6540ddc74edfabe88fa07b71ed37",
  })

  
  export default function Home ({ code }) {
    const [tracks, setTracks] = useState(null)  
    const accessToken = useAuth(code)
    const headers = { 
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
    }
    useEffect (() => {
        axios.get("https://api.spotify.com/v1/me/top/tracks", {headers})
        .then(res => setTracks(res.data.items))
        .catch((err) => console.log(err))
    
    }, [accessToken])

    return (

        <BrowserRouter>   
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="m-3" >
                <Tab eventKey="library" title="Library">
                    <Library accessToken={accessToken} spotifyApi={spotifyApi} tracks={tracks}/>
                </Tab>
                <Tab eventKey="dashboard" title="Dashboard">
                    <Dashboard  accessToken={accessToken}/>
                </Tab>
            </Tabs>

         <Routes>
            <Route  path="/library" element={<Library/>} />
            <Route  path="/Dashboard" element={<Dashboard/>} />
         </Routes>
        </BrowserRouter>
    )
}
 