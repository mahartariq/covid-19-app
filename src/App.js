import React from 'react';
import './App.css';
import Header from './Components/Header';
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid/>
        <p>
          Covid-19 App Coming Soon!
        </p>
        <a
          className="App-link"
          href="https://github.com/TariqSays"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet Developer
        </a>
      </div>
  );
}

export default App;
