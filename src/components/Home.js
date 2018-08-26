import React, { Component } from 'react';
import Icons from './Icons';

import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
class Home extends Component {
    render() {
        return (
            <CSSTransition  classNames="fade" timeout={300}>
            <div id="Home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Application Development | Gnosis Development</title>
                </Helmet>
                
                <h5><i class="fas fa-diagnoses"></i> Application Design and Development </h5>
                <p> Gnosis development provides affordable applications with modern technologies. We will work with you to create an application that fits your unique needs. You will work directly with the developer of your application from design to deployment giving you complete control over the process. </p>
                <p>Some of the services and products we work with:</p>
                <Icons />   
              
                    <p className="card-body text-center">Wether you need a completely custom product,  or you need support for your current web and mobile products, Gnosis Development offers low prices with superior quality.</p>
                    <p className="form-group row">
                    <NavLink className="btn btn-block btn-primary" to="/services">Learn More</NavLink>
                    </p>

                
            </div>
            </CSSTransition>
        );
    }
}

export default Home;
