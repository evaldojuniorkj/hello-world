import './App.css';
import {useState} from 'react'

function App() {
  //contador
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
