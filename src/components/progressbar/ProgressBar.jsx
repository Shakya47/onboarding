import React, {useContext} from 'react'
import './progressBar.css'
import PageContext from '../../context/page/PageContext';

const ProgressBar = () => {

  const { page } = useContext(PageContext);
  return (
    <div className='progressbar-container'>
      <ul id="progressbar">
          <li className="first" id="step1"></li>
          <li id="step2" className={(page >=1 ? 'active' : '')}></li>
          <li id="step3" className={(page >=2 ? 'active' : '')}></li>
          <li id="step4" className={(page >=3 ? 'lastActive' : 'last')}></li>
      </ul>
    </div>
  )
}

export default ProgressBar