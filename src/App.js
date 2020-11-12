import React, {useState, Fragment} from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(prev => prev + 1)
  }

  function dicrement() {
    setCounter(prev => prev - 1)
  }

  return(
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={dicrement}>-1</button>
    </>
  )
}

export default App;