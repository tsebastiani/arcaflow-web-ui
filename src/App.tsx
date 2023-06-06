import React from 'react';
import logo from './logo.svg';
import InputParser from './InputParser';
import DataSource from './DataSource';
import './App.css';

function App() {
  var source = new DataSource()
  var parser = new InputParser()

  var elements = parser.parseArcaInput(source.getArcaInput())
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
