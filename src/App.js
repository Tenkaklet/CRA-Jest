import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount ] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Counter initialCount={0} />
      </header>
    </div>
  );
}

export default App;
