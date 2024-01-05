import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text"></input>
            <label htmlFor="">Email</label>
            <input type="email"></input>
            <label htmlFor="">Subject</label>
            <input type="text"></input>
            <label >Message</label>

            <textarea rows="6" placeholder="Type Your massage"></textarea>
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
