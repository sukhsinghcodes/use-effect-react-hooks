import React, { useState, useEffect } from 'react';
import './App.css';

import subscribeEffect from './App.effect';

function App({ source }) {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);

  useEffect(subscribeEffect(source), [count]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello useEffect!</p>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="button" onClick={() => setCount(count + 1)}>
          {count}
        </button>
      </header>
    </div>
  );
}

export default App;
