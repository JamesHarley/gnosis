import React, { Component } from 'react';
import Icons from './Icons';

class Home extends Component {
    render() {
        return (
          <div >
            <div className="blockquote"><i class="fas fa-diagnoses"></i> Application Design and Developmnent </div>
            <p> Gnosis development provides affordable applications with modern technologies. We will work with you to create an application that fits your unique needs. You will work directly with the developer of your application from design to deployment giving you complete control over the process. </p>
            <p>Services and products we work with:</p>
           <Icons />    
          </div>
        );
    }
}

export default Home;
