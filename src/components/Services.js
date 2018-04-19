import React, { Component } from 'react';
import Icons from './Icons'

class Services extends Component {
    render() {
        return (
          <div>
            <h5><i class="fas fa-cloud"></i> Services</h5>
            <p> Fast agile device independent apps is the Gnosis Development specialization. We can build your project to work anywhere and everywhere. 
            </p>
            <p>We know the latest products so you don't have to. Our apps are cloud hosted and scalable. Providing secure, fast, and affordable applications for any business size.  We work with your current service providers or can assist in locating appropriate services based on your unique needs. </p>
            <p>Services and products we work with:</p>
           <Icons />
        </div>
        );
    }
}

export default Services;
