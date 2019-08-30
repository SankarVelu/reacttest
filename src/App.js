import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.scss';

import Intro from './Components/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Intro />
    </div>
  );
}

export default App;
