import React, { Component } from 'react';
import logo from './triskal_white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-1"> Gnosis Development</h1>
        </header>
       
        <div className="inner"> <p className="">Gnosis - The knowledge gained from experience, not theory or estimation</p></div>
        <div className="App-intro">
          This website is under construction. 
        </div>
        <div className="boxed" >
          <div className="boxed-inner">
            <div className="blockquote">What is Lorem Ipsum?</div>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
       

      </div>
    );
  }
}

export default App;
