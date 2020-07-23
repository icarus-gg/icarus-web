import React from 'react';
import './App.css';

const pngLogo = process.env.PUBLIC_URL + '/icarus.gg-500x500.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pngLogo} className="App-logo" alt="logo" />
        <p>
          hello friend
        </p>
      </header>
    </div>
  );
} 

export default App;
