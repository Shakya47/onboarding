import React from 'react'
import './workspace.css'

const Workspace = () => {
  return (
    <div className='workspace-container'>
      <h1>Let's set up a home for all your work</h1>
      <p className='subtitle'>You can always create another workspace later.</p>

      <div className='form-container'>
        <div>
          <div className='label'>Workspace Name</div>
          <input type='text' placeholder='Eden'/>
        </div>
        
        <div>
          <div className='label'>Workspace URL <span style={{color: '#b8c2d6'}}>(optional)</span></div>
          <div className='combo-label'>
            <span className='inputSpan'>www.eden.com/</span>
            <input type='text' placeholder='Steve'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Workspace