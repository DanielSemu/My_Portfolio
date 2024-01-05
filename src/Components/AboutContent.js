import { Link } from "react-router-dom"
import "./AboutContent.css"

import React from 'react'
import code1 from "../Assets/code1webp.webp"
import code2 from "../Assets/code2.jpg"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
            <h1>Who Am I?</h1>
            <p>React Portfolio Website Tutorial From Scratch | Responsive Portfolio Website Using React JS</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
      </div>
      <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={code1} alt=""
                    className="img" />
                </div>
                <div className="img-stack-bottom">
                    <img src={code2} alt=""
                    className="img" />
                </div>
            </div>
      </div>
    </div>
  )
}

export default AboutContent
