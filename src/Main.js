import React from 'react';
import { useAlert } from './alert/AlertContext';

function Main() {

  const {show} = useAlert()
  return (
    <div>
      <h1>Using of Context</h1>
      <button onClick={() => show('This is text from Main')}>Alert Toggle</button>
    </div>
  );
}

export default Main;