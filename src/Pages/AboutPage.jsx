import React from 'react'
import Transition from '../../public/Transition'
import AboutHero from '../Components/AboutHero'
import MTeam from '../Components/MTeam'
import Principal from '../Components/Principal'
import Rules from '../Components/Rules'


const AboutPage = () => {
  return (
    <div className='display-1 fw-bolder mt-5 pt-5'>
      <AboutHero></AboutHero>
      <MTeam></MTeam>
      <Principal></Principal>
      <Rules></Rules>
      </div>
  )
}

export default Transition(AboutPage)