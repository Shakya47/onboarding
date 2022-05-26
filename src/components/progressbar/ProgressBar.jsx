import React from 'react'
import './progressBar.css'

const ProgressBar = (prop) => {
  console.log(prop.curStep);
  
  return (
    <div className='progressbar-container'>
      <ul id="progressbar">
          <li className="first" id="step1"></li>
          <li id="step2" className={(prop.curStep >=1 ? 'active' : '')}></li>
          <li id="step3" className={(prop.curStep >=2 ? 'active' : '')}></li>
          <li id="step4" className={(prop.curStep >=3 ? 'lastActive' : 'last')}></li>
      </ul>
    </div>
  )
}

export default ProgressBar