import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './styles/global.css'
import './styles/homepage.css'
import './styles/video-form.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/video-react/dist/video-react.css'
import Home from './components/Homepage/Home'
import VideoForm from './components/Upload/videoForm'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-video" element={<VideoForm />} />
        </Routes>
    )
}

export default App
