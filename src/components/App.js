import React, { Component } from 'react';
import logo from './triskal_white.png';
import './App.css';
import { Route,  Switch} from 'react-router-dom'
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';
import TheFoot from './TheFoot'
import Naver from './Naver';


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
          
          <Switch >
            

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