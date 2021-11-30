/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Library from "./components/Library"
import Dashboard from "./Dashboard"
import Chart from "./components/Chart"
import { Tabs, Tab } from "react-bootstrap"
import Loading from "./components/Loading"
import SpotifyWebApi from "spotify-web-api-node";
import { useAuth } from "./useAuth"
import { useState, useEffect } from "react"
import axios from "axios"

const spotifyApi = new SpotifyWebApi({
    clientId: "debf6540ddc74edfabe88fa07b71ed37",
  })
  
  export default function Home ({ code }) {
    const [tracks, setTracks] = useState(null)
    const [recent, setRecent] = useState(null)
    const [trackIds, setTrackIds] = useState([])
    const [statTrack, setStatTrack] = useState([])

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
    useEffect (() => {
        axios.get('https://api.spotify.com/v1/me/player/recently-played', { headers })
        .then(res => setRecent(res.data.items))
        .catch((err) => console.log(err))
    }, [accessToken])
    useEffect (() => {
        axios.get("https://api.spotify.com/v1/me/top/tracks", {headers})
        .then(res => {
            let ids = []
            res.data.items.forEach(track => {
                ids.push(track.id)
            })
            setTrackIds(ids)
         })
        .catch((err) => console.log(err))
    },[accessToken])
    useEffect (() => {
        axios.get("https://api.spotify.com/v1/audio-features", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        params: {
          ids: trackIds.join(),
        },
      })  
        .then(res => setStatTrack(res.data.audio_features))
        .catch((err) => console.log(err))

    }, [trackIds])   

    return (
        <BrowserRouter >   
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="m-3" >
                
                <Tab eventKey="dashboard" title="Dashboard">
                    <Dashboard  accessToken={accessToken}/>
                </Tab>
                <Tab eventKey="library" title="Library">
                    <Library accessToken={accessToken} spotifyApi={spotifyApi} tracks={tracks} recent={recent}/>
                </Tab>
                
                <Tab eventKey="chart" title="Chart">
                    <Chart  accessToken={accessToken} statTrack={statTrack} />
                </Tab>
            </Tabs>

         <Routes>
            <Route  path="/library" element={<Library/>} />
            <Route  path="/dashboard" element={<Dashboard/>} />
            <Route  path="/chart" element={<Chart/>} />
         </Routes>
        </BrowserRouter>
    )
}
 