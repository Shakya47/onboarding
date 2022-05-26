import React from 'react'
import './congratulations.css'
import {MdOutlineDone} from 'react-icons/md'

const Congratulations = () => {
  return (
    <div className='congratulations-container'>
      <div className='done-icon'><MdOutlineDone /></div>
      <h1>Congratulations, Eren!</h1>
      <p className='subtitle'>You have completed onboarding, you can start using Eden!</p>
    </div>
  )
}

export default Congratulations