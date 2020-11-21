import React from 'react';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/AlertContext';
import './App.css';
import Main from './Main';


function App() {
    
  return (
    <AlertProvider>
      <Alert />
      <Main />
    </AlertProvider>
  )
}

export default App;