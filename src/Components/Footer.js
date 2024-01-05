 import "./Footer.css"

 import React from 'react'
 
 import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

 const Footer = () => {
   return (
     <div className="footer">
       <div className="footer-container">
        <div className="left">
             <div className="location">
                <FaHome size={20} style={{color:"#fff",margin:"1rem",marginRight:"0.5rem"}}/>
                <div>
                    <p>123 Housing Society</p>
                    <p>Ethiopia</p>
                </div>
            </div>
            <div className="phone">
                 <h4><FaPhone size={15} style={{color:"#fff",margin:"0.1rem", marginRight:"0.5rem"}}/>1-2323-343-23</h4>
            </div>
            <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"0.7rem"}}/>danielsemu06@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>About the Company</h4>
            <p>
                This is me Daniel Semu. CEO & Founder of 
                Mejeng. I Enjoy discussing new projects and design 
                challenges
            </p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",margin:"1rem"}}/>
            <FaTwitter size={30} style={{color:"#fff",margin:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff",margin:"1rem"}}/>
            </div>
        </div>
       </div>
     </div>
   )
 }
 
 export default Footer
 

