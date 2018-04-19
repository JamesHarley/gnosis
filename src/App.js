import React, { Component } from 'react';
import logo from './triskal_white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <h3>Welcome to </h3> <h1 className="display-1"> Gnosis Development</h1>
        </header>
        <div className="App-intro">
          This website is under construction. 
        </div>
      </div>
    );
  }
}

export default App;
