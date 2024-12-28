import React from 'react'
import "./Navbar.css"
import myImage from "./pic 3.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='d-flex  justify-content-center'>
    <div className="navbar d-flex bg-white mt-4 justify-content-center hcc rounded-lg" style={{ boxShadow: '0px 4px 12px rgba(255, 255, 255, 0.5), 0px 0px 20px rgba(0, 123, 255, 0.2)' }}>
       
       <div className="nav-links-container fs-5 gap-5 d-flex">
         <Link to="/" className="nav-link">Home</Link>
         <Link to="/about" className="nav-link">About</Link> 
         <Link to="/projects" className="nav-link">Projects</Link>
         <Link to="/resume" className="nav-link">Resume</Link>
       </div>
       
     </div>

    
     </div>

    </>
  )
}

export default Navbar