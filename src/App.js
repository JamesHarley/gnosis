import React, { Component } from 'react';
import logo from './triskal_white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-inner">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-1"> Gnosis Development</h1>
        </header>
       
        <div className="inner"> <p className="">Gnosis - The knowledge gained from experience, not theory or estimation</p></div>
        <div className="App-intro">
          This website is under construction. 
        </div>
        </div>
      </div>
    );
  }
}

export default App;
