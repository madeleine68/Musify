import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Home from "./Home"


const code = new URLSearchParams(window.location.search).get("code")

function App() {
  return (
   
    <div>
         {code ? <Home code={code} /> : <Login />}
    </div>

    )   
}

export default App
