import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');

  const currentRender = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  useEffect(() => {
    currentRender.current++
  })

  useEffect(() => {
    prevValue.current = value;
  }, [value])

  const focus = () => {
    inputRef.current.focus();
  }

return (
  <>
    <h1>Renders Quantity: {currentRender.current}</h1>
    <h1>Current Value: {prevValue.current}</h1>
    <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
    <button onClick={focus}>Focus</button>
  </>
)
}

export default App;