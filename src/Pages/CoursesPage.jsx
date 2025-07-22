import React from 'react'
import Transition from '../../public/Transition'
import CourseHero from '../Components/CourseHero'
import AboutIT from '../Components/AboutIT'
import Vision from '../Components/Vision'
import ITHOD from '../Components/ITHOD'
import ITEvents from '../Components/ITEvents'
import Tree from '../Components/Tree'
import QuestionBankTable from '../Components/QuestionBankTable'


const CoursesPage = () => {
  return (
    <div className='display-1 fw-bolder mt-5'>
      <CourseHero></CourseHero>
      <AboutIT></AboutIT>
      <Vision></Vision>
      <ITHOD></ITHOD>
      <ITEvents></ITEvents>
      <Tree></Tree>
      <QuestionBankTable></QuestionBankTable>
    </div>
  )
}

export default Transition(CoursesPage)