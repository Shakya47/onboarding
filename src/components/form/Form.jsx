import React from 'react'
import Welcome from '../welcome/Welcome';
import Workspace from '../workspace/Workspace';
import Planning from '../planning/Planning';
import Congratulations from '../congratulations/Congratulations'
import './form.css'


const Form = (prop) => {


    const PageDisplay = () => {
        if(prop.curPage === 0) return <Welcome />
        else if(prop.curPage === 1) return <Workspace />
        else if(prop.curPage === 2) return <Planning />
        else return <Congratulations />
    }

  return (
    <div className='form'>
        <div className='body'>
            {PageDisplay()}
        </div>

    </div>
  )
}

export default Form