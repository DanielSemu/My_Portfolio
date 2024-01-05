 
import "./WorkCard.css"
// import code2 from "../Assets/code1webp.webp"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="Project-title">{props.title }</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to={props.source} className="btn">Source</NavLink>
      </div>
    </div>
  </div>
  )
}

export default WorkCard
