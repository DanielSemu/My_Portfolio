 import "./Footer.css"

 import React from 'react'
 
 import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa"

 const Footer = () => {
   return (
     <div className="footer">
       <div className="footer-container">
        <div className="left">
             <div className="location">
                <FaHome size={20} style={{color:"#fff",margin:"2rem"}}/>
                <div>
                    <p>123 Housing Society</p>
                    <p>Ethiopia</p>
                </div>
            </div>
            <div className="phone">
                 <h4><FaPhone size={20} style={{color:"#fff",margin:"2rem"}}/>1-2323-343-23</h4>
            </div>
            <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",margin:"2rem"}}/>danielsemu06@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            
        </div>
       </div>
     </div>
   )
 }
 
 export default Footer
 

