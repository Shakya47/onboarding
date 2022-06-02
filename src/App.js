import Form from './components/form/Form';
import Logo from './components/logo/Logo';
import ProgressBar from './components/progressbar/ProgressBar';
import NavigationControl from './components/navigationcontrol/NavigationControl';
import React from 'react';
import './index.css';
import PageState from './context/page/PageState';

function App() {

  return (
    
      <div className="App">

        <PageState>
          <Logo /> 
          
          <ProgressBar/>

          <Form/>

          <NavigationControl/>
        </PageState>

      </div>
    
  );
}

export default App;
