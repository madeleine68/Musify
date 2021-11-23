import "bootstrap/dist/css/bootstrap.min.css"
import SpotifyWebApi from "spotify-web-api-node"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Home from "./Home"


const spotifyApi = new SpotifyWebApi({
  clientId: "debf6540ddc74edfabe88fa07b71ed37",
})

const code = new URLSearchParams(window.location.search).get("code")

function App() {
 
  return (
    <div>
         {code ? <Home code={code} /> : <Login />}
    </div>
    )   
}

export default App
