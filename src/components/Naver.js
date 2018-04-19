import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Naver extends Component {
  render() {
    return (
      
      <nav className="gnostic-menu">
        <ul className="nav">
          <li className="nav-item">
            <Link 
            activeClassName="active"
            className="nav-link" 
            to="/">
              <i className="fas fa-circle-notch"></i> <br />Gnosis Dev
            </Link>
          </li>
          <li className="nav-item">
            <Link 
            className="nav-link" 
            activeClassName="active"
            to="/portfolio">
              <i className="fab fa-github"></i> <br />Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" 
              activeClassName="active"
              to="/services">
                <i className="fas fa-cogs"></i> <br />Services
              </Link>
          </li>
          <li className="nav-item">
            <Link 
              className="nav-link" 
              activeClassName="active"
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
