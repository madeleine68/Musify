import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom"
import Library from "./Library"
import Dashboard from "./Dashboard"
import { Tabs, Tab } from "react-bootstrap"
export default function Home ({ code }) {
    return (

        <BrowserRouter>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="library" title="Library">
                    <Library />
                </Tab>
                <Tab eventKey="dashboard" title="Dashboard">
                    <Dashboard  code={code}/>
                </Tab>
            </Tabs>

         <Routes>
            <Route  path="/library" element={<Library/>} />
            <Route  path="/Dashboard" element={<Dashboard/>} />
         </Routes>
        </BrowserRouter>
    )
}
 