import React from 'react'
import './planning.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiTeamFill} from 'react-icons/ri'

const Planning = () => {
  return (
    <div className='planning-container'>
      <h1>How are you planning to use Eden?</h1>
      <p className='subtitle'>We'll streamline your setup experience accordingly</p>

      <div className='options'>
        <div className='options-buttons'>
          <div className='icon'><BsFillPersonFill /></div>
          <p className='option-title'>For Myself</p>
          <p className='option-desc'>Write better. Think more clearly. Stay organised</p>
        </div>
        
        <div className='options-buttons'>
          <div className='icon'><RiTeamFill /></div>
          <p className='option-title'>With my team</p>
          <p className='option-desc'>Wikis, docs, tasks & projects, all in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default Planning