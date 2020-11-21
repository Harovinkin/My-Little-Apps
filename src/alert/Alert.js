import React from 'react';
import {useAlert} from './AlertContext';

function Alert(props) {
  const {visible, toggle} = useAlert()

  if (!visible) return null

  return ( 
    <div onClick={toggle}>
      <b>WARNING!!!</b>
    </div>
  );
}

export default Alert;