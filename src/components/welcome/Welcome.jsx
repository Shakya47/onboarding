import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <h1>Welcome! First things first...</h1>
      <p className='subtitle'>You can always change them later.</p>

      <div className='form-container'>
        <div>
          <div className='label'>Full Name</div>
          <input type='text' placeholder='Steve Jobs'/>
        </div>
        
        <div>
          <div className='label'>Display Name</div>
          <input type='text' placeholder='Steve'/>
        </div>
        
      </div>
    </div>
  )
}         

export default Welcome