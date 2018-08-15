import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Naver extends Component {
  render() {
    return (
    
      <nav className="gnostic-menu  navbar-expand-custom bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-spacer"></li>
            <li className="nav-item">
              <Link 
              className="nav-link" 
              to="/">
                <i className="fas fa-circle-notch"></i><br />Gnosis Dev
              </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link portlink" 
              to="/portfolio">
                <i className="fab fa-github"></i> <br />Portfolio
              </Link>
            </li>
            <li className="nav-item cogitem">
              <Link className="nav-link cognav" 
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
        </div>
      </nav>
      

    );
  }
}

export default Naver;
