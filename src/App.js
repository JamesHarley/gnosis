import React, { Component } from 'react';
import logo from './triskal_white.png';
import './App.css';
import { Route,  Switch} from 'react-router-dom'
import {Helmet} from "react-helmet";
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

import Naver from './components/Naver';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className=""> Gnosis Development</h1>
        </header>
       
        <div className="inner"> <p className="">Gnosis - The knowledge gained from experience, not theory or estimation</p></div>
        <div className="App-intro">
          This website is under construction. 
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
            <div className="blockquote">Web and Mobile application design and developmnent</div>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
       

      </div>
    );
  }
}

export default App;
