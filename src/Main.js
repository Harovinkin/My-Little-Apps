import React from 'react';
import { useAlert } from './alert/AlertContext';

function Main(props) {

  const {toggle} = useAlert()
  return (
    <div>
      <h1>Using of Context</h1>
      <button onClick={toggle}>Alert Toggle</button>
    </div>
  );
}

export default Main;