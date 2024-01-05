import { Link } from "react-router-dom"
import "./PricingCard.css"

import React from 'react'

const PrisingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <san className="bar"></san>
          <p className="btc"> $ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Desing -</p>
          <Link to="/contact" className="btn"> PURCHASE NOW</Link>
        </div>

        <div className="card">
          <h3>- Basic -</h3>
          <san className="bar"></san>
          <p className="btc"> $ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Desing -</p>
          <Link to="/contact" className="btn"> PURCHASE NOW</Link>
        </div>

        <div className="card">
          <h3>- Basic -</h3>
          <san className="bar"></san>
          <p className="btc"> $ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Desing -</p>
          <Link to="/contact" className="btn"> PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default PrisingCard
