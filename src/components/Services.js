import React, { Component } from 'react';
import Icons from './Icons'

class Services extends Component {
    render() {
        return (
          <div id="Services">
            <h5><i class="fas fa-cloud"></i> Services</h5>
            <p> Fast agile device independent apps is the Gnosis Development specialization. 
            We can build your project to work anywhere and everywhere. 
            </p>
            <p>We know the latest products so you don't have to. Our apps are cloud hosted and scalable. 
            Providing secure, fast, and affordable applications for any business size. </p> 
            <p>We work with your current service providers or can assist in locating appropriate services based on your unique needs. </p>
            
           <div className="center-box">
                <div id="service-card">
                        <i class="fab fa-android  fa-3x"></i> 
                        <h5>Android development</h5>
                        <p>Native Android applications designed and developed in house</p>
                        <p><a href="https://play.google.com/store/apps/developer?id=Gnosis+Development"> A couple samples available in GooglePlay </a></p>
                </div>
                <div id="service-card">
                        <i class="fab fa-react fa-3x"></i> 
                        <h5>React development</h5>
                        <p> Reactjs and React Native applications developed according to your needs</p>
                        <p>This website is built using Reactjs</p>
                </div>
            </div>
            <div className="clr service-space"></div>
            <div className="center-box">
                <div id="service-card">
                    <i class="fab fa-html5 fa-3x"></i> 
                    <h5>Web development</h5>
                    <p> PHP, HTML5, CSS3, and Javascript. With a dash of SQL. </p>
                    <p>Combine them and build any website for any purpose. 
                    <br />Contact us for detailed quotes</p>
                </div>
                <div id="service-card">
                    <i class="fab fa-wordpress fa-3x"></i> 
                    <h5>Wordpress </h5>
                    <p> Custom wordpress themes, plugins, and maintenance</p>
                    <p>Wordpress is a great CMS framework to build a platform for sites needing frequent updates. </p>
                    <br />
                </div>
            </div>
            <div className="clr"></div>

            <p className="service-space">Services and products we work with:</p>
            <Icons />
        </div>
        );
    }
}
 
export default Services;
