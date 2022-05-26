import React from 'react'
import './logo.css'
import LOGO from '../../assets/eden-logo.png'

const Logo = () => {
  return (
    <div className='logo-container'>
        <img src={LOGO} alt='Eden Logo'/>
    </div>
  )
}

export default Logo