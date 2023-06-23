import { useState } from 'react';

function Counter({initialCount}) {
  const [count, setCount ] = useState(initialCount);
  return (
    <div>
      <header>
        <h1>Counter</h1>
        <h3 data-testid="count">{count}</h3>
        <button onClick={() => setCount(count + 1)}>Add One</button>
        <button onClick={() => setCount(count - 1)}>Minus One</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </header>
    </div>
  );
}

export default Counter;
