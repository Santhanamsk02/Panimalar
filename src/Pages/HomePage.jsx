import React from 'react'
import Header from '../Components/Header'
import Logos from '../Components/Logos'
import Hero from '../Components/Hero'
import ColVideo from '../Components/ColVideo'
import Test from '../Components/Test'
import Companies from '../Components/Companies'
import Courses from '../Components/Courses'
import Awards from '../Components/Awards'
import Footer from '../Components/Footer'
import Transition from '../../public/Transition'

const HomePage = () => {
  return (
      <div>
          <Hero></Hero>
        <Logos></Logos>
        <ColVideo></ColVideo>
        <Test></Test>
        <Companies></Companies>
        <Courses></Courses>
        <Awards></Awards>
    </div>
  )
}

export default Transition(HomePage)