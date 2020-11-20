import React, {useState, useCallback} from 'react'
import './App.css';
import ItemsList from './components/ItemsList';

function App() {
  const [count, setCount] = useState(1)
  const [color, setColor] = useState(false)

  const styles = {
    color: color ? 'green' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])
 
  return (
    <>
      <h1 style={styles}>Elements Quantity: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add 1</button>
      <button onClick={() => setColor(prev => !prev)}>Change Color</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  )
}

export default App;