 
import "./WorkCard.css"
import code2 from "../Assets/code1webp.webp"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects.</h1>
      <div className="project-conatiner">
        <div className="project-card">
          <img src={code2} alt="image" />
          <h2 className="Project-title">Project Title</h2>
          <div className="pro-details">
            <p>This is Text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">View</NavLink>
              <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default WorkCard
