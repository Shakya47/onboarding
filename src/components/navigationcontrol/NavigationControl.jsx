import React, {useCallback} from 'react'
import './navigationControl.css'

const NavigationControl = ({page, onBtnClick}) => {

  const incrementBtnClick = useCallback(() => {onBtnClick((currPage) => currPage + 1)}, [onBtnClick])


  return (
    <div className='button-container'>

        <button 
        disabled={page === 4}
        onClick={incrementBtnClick}
        >{(page >= 3 ? 'Launch Eden' : 'Create Workspace')}</button>
    </div>
  )
}

export default NavigationControl