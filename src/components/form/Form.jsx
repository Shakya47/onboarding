import React, { useContext } from 'react'; 
import Welcome from '../welcome/Welcome';
import Workspace from '../workspace/Workspace';
import Planning from '../planning/Planning';
import Congratulations from '../congratulations/Congratulations'
import './form.css'
import PageContext from '../../context/page/PageContext';



const Form = () => {
    const { page } = useContext(PageContext);
    console.log("Current Page: "+page);

    const PageDisplay = () => {
        if(page === 0) return <Welcome />
        else if(page === 1) return <Workspace />
        else if(page === 2) return <Planning />
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