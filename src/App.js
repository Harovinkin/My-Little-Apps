import React, {useState, useMemo} from 'react'

import './App.css';

const computeDelay = num => {
  let i = 0
  while (i < 1000000000) i += 1;

  return num;
}

function App() {
  const [number, setNumber] = useState(40);
  const [color, setColor] = useState(true)

  const computed = useMemo(() => {
    return computeDelay(number)
  }, [number]);

  const styles = {
    color: color ? 'black' : "blue"
  }

  return (
    <>
      <h1 style={styles}>Compute Result: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>+1</button>
      <button onClick={() => setNumber(prev => prev - 1)}>-1</button>
      <button onClick={() => setColor(prev => !prev)}>Change Title Color</button>
    </>
  )
}

export default App;