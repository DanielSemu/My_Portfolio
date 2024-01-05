
import "./HeroImage.css"
import code2 from "../Assets/code2.jpg"
import React from 'react'
import { Link } from "react-router-dom"
const HeroImage = () => {
  return (
    <div className="hero">
        
    <div className="mask">
        <img className="into-img" src={code2} alt="" />
    </div>
    <div className="content">
        <p>HI, I'M A Developer</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
    </div>
    </div>
  )
}

export default HeroImage
