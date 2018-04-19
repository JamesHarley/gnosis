import React, { Component } from 'react';
import reactor from '../logo.svg';

class TheFoot extends Component {
    render() {
        return (
            <div id="TheFoot">
                Gnosis - the knowledge gained from experience, <br /> not theory or estimation
               <p className="powered">  Powered with React <img src={reactor} className="reactor" />  </p>
            </div>

        );
    }
}

export default TheFoot;
