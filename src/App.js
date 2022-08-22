import React from 'react'
import { Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home"
import Css from "./pages/space/Space"
import Projects from "./pages/projects/Projects"
function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default App