import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Naver extends Component {
  render() {
    return (
      
      <nav className="gnostic-menu">
        <ul className="nav">
          <li className="nav-spacer"></li>
          <li className="nav-item">
            <Link 
            className="nav-link" 
            to="/">
              <i className="fas fa-circle-notch"></i> <br />Gnosis Dev
            </Link>
          </li>
          <li className="nav-item">
            <Link 
            className="nav-link" 
            to="/portfolio">
              <i className="fab fa-github"></i> <br />Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" 
              to="/services">
                <div className="cogger">
                  <i className="cog fas fa-cog "></i>
                  <i className="cog2 fas fa-cog "></i>
                </div>
                <br />Services        
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to="/contact">
              <i className="fas fa-envelope"></i><br />Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Naver;
