import React, {useContext} from 'react'
import './navigationControl.css'
import PageContext from '../../context/page/PageContext';

const NavigationControl = () => {

  const { page, setPage } = useContext(PageContext);


  return (
    <div className='button-container'>

        <button 
        disabled={page === 4}
        onClick={() => {setPage()}}
        >{(page >= 3 ? 'Launch Eden' : 'Create Workspace')}</button>
    </div>
  )
}

export default NavigationControl