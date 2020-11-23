import { useEffect, useState } from 'react';
import './App.css';

function useLogger(value) {
  useEffect(() => {
    console.log('Logger', value)
  },[value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value )
  }

  return {
    bind: {
      value,
      onChange
    },
    value
  }
}

function App() {
  const input = useInput('');

  useLogger(input.value)

  return(
    <div>
      <input type='text' {...input.bind} />
      <h1>{input.value}</h1>
    </div>
  )
}

export default App;