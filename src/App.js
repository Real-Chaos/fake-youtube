import React from 'react'
import { Routes, Route } from 'react-router-dom'


import './styles/global.css'
import './styles/homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Homepage/Home'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default App
