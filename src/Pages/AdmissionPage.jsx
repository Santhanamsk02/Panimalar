import React from 'react'
import Transition from '../../public/Transition'
import AdHero from '../Components/AdHero'
import AdForm from '../Components/AdForm'
import Companies from '../Components/Companies'
import Gallery from '../Components/Gallery'
import Awards from '../Components/Awards'


const AdmissionPage = () => {
  return (
    <div className='display-1 fw-bolder mt-5'>
      <AdHero></AdHero>
      <AdForm></AdForm>
      <Companies></Companies>
      <Gallery></Gallery>
      <Awards></Awards>
    </div>
  )
}

export default Transition(AdmissionPage)