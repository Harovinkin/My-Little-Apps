import React from 'react';
import {useAlert} from './AlertContext';

function Alert() {
  const {visible, hide, text} = useAlert()

  if (!visible) return null

  return ( 
    <div onClick={hide}>
      <b>WARNING!!! {text}</b>
    </div>
  );
}

export default Alert;