
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import PricingCard from '../Components/PricingCard'
import WorkCard from '../Components/WorkCard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works"/>
      <WorkCard/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
