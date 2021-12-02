import React from 'react'
import ReactDOM from 'react-dom'
import cassette from "./Assets/cassette.gif";

import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./Login"
import Home from "./Home"




const code = new URLSearchParams(window.location.search).get("code")

function App() {
 
  return (
    <div>
         {code ? <Home code={code} /> : <Login />}
         <div  className="container">
    </div>
    </div>
    )   
}

export default App
