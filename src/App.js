import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from './components/timeline/timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Components:
        <ul>
          <li>Timeline</li>
        </ul>
        <Timeline />
      </header>
    </div>
  );
}

export default App;
