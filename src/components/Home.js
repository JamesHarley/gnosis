import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
          <div >
            <div className="blockquote"><i class="fas fa-diagnoses"></i> Application Design and Developmnent </div>
            <p> Gnosis development provides affordable applications with modern technologies. We will work with you to create an application that fits your unique needs. You will work directly with the developer of your application from design to deployment giving you complete control over the process. </p>
            <p>Services and products we work with:</p>
           <p className="service-icons"><i class="fab fa-aws "></i> <i class="fab fa-android"></i> <i class="fab fa-bluetooth"></i> 
            <i class="fab fa-angular"></i> <i class="fab fa-chrome"></i> <i class="fab fa-js"></i> <i class="fab fa-java"></i> <i class="fab fa-php"></i>
                <i class="fab fa-cpanel"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-freebsd"></i> <i class="fab fa-python"></i>
                <i class="fab fa-wordpress"></i> <i class="fab fa-linux"></i>
            </p>    
          </div>
        );
    }
}

export default Home;
