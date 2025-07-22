import React from 'react'
import Transition from '../../public/Transition'
import ECHero from '../Components/ECHero'
import CollegeDay from '../Components/CollegeDay'
import NSS from '../Components/NSS'
import HostelDay from '../Components/HostelDay'
import YRC from '../Components/YRC'
import Sports from '../Components/Sports'

const ECPage = () => {
  return (
    <div className='pt-5 container-fluid p-0'>
      <ECHero></ECHero>
      <CollegeDay></CollegeDay>
      <NSS></NSS>
      <HostelDay></HostelDay>
      <YRC></YRC>
      <Sports></Sports>
    </div>
  )
}

export default Transition(ECPage)