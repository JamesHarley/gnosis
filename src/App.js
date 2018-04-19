import React, { Component } from 'react';
import logo from './triskal_white.png';
import './App.css';
import { Route,  Switch} from 'react-router-dom'
import {Helmet} from "react-helmet";
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import TheFoot from './components/TheFoot'
import Naver from './components/Naver';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <h1 className=""> <p>Gnosis Development</p></h1>
        </header>
       
        <div className="App-intro">
        </div>
        <div className="boxed" >
        <Naver />
          <div className="boxed-inner">
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/services' component={Services}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
            
          </div>
        </div>
        <TheFoot />

      </div>
    );
  }
}

export default App;
