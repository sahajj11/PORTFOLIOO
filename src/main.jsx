import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />

    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
