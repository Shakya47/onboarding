import Form from './components/form/Form';
import Logo from './components/logo/Logo';
import ProgressBar from './components/progressbar/ProgressBar';
import NavigationControl from './components/navigationcontrol/NavigationControl';
import React, {useState} from 'react';
import './app.css';

function App() {

  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <Logo /> 
      
      <ProgressBar curStep = {page}/>

      <Form curPage = {page}/>

      <NavigationControl page={page} onBtnClick = {setPage}/>

    </div>
  );
}

export default App;
