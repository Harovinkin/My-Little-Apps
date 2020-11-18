import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
const [type, setType] = useState('albums');
const [data, setData] = useState([]);
const [pos, setPos] = useState({
  x: 0,
  y: 0
})

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
  .then(response => response.json())
  .then(json => setData(json))

  return () => {
    console.log('Clean Type')
  }
}, [type])

const moveMouseHandler = e => {
  setPos({
    x: e.clientX,
    y: e.clientY
  })
}

useEffect(() => {
  window.addEventListener('mousemove', moveMouseHandler)

  return () => {
    window.removeEventListener('mousemove', moveMouseHandler)
  }
}, [])

  return (
    <>
      <h1>Resources: {type}</h1>
      <button onClick={() => setType('albums')}>Albums</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('users')}>Users</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </>
  )
}

export default App;