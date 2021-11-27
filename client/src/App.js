import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Home from "./Home"


const code = new URLSearchParams(window.location.search).get("code")

function App() {
 
  return (
    <div>
         {code ? <Home style={{background: 'blue'}} code={code} /> : <Login />}
    </div>
    )   
}

export default App
