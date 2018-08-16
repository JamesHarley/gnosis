import React, { Component } from 'react';
import Icons from './Icons'
import Helmet from 'react-helmet';



class Services extends Component {

    render() {
        return (
          <div id="Services">
            <Helmet>
                <meta charSet="utf-8" />
                <title> Services | Gnosis Development</title>
            </Helmet>
            <h5><i className="fas fa-cloud"></i> Services</h5>
            <p> Fast agile device independent apps is the Gnosis Development specialization. 
            We can build your project to work anywhere and everywhere. 
            </p>
            <p>We know the latest products so you don't have to. Our apps are cloud hosted and scalable. 
            Providing secure, fast, and affordable applications for any business size. </p> 
            <p>We work with your current service providers or can assist in locating appropriate services based on your unique needs. </p>
            
           <div className= "center-box"  >
            <div class="container">
                    <div class="row">
                        <div id="service-card" className="col-sm">
                            <i className="fab fa-android  fa-3x"></i> 
                            <h5>Android development</h5>
                            <p>Native Android applications designed and developed in house</p>
                            <p><a href="https://play.google.com/store/apps/developer?id=Gnosis+Development"> Samples available in GooglePlay </a></p>
                        </div>
                        <div id="service-card" className="col-sm">
                            <i className="fab fa-react fa-3x"></i> 
                            <h5>React development</h5>
                            <p> Reactjs and React Native applications developed according to your needs</p>
                            <p>This website is built using Reactjs</p>

                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div id="service-card" className="col-md">
                            <i className="fab fa-wordpress fa-3x"></i> 
                            <h5>Wordpress</h5>
                            <p> Custom wordpress themes, plugins, and maintenance</p>
                            <p>Wordpress is a great CMS framework to build a platform for sites needing frequent updates. 
                            <br />Contact us for detailed quotes</p>
                        </div>
                        <div id="service-card" className="col-md">
                        <i className="fab fa-html5  fa-3x"></i> 
                            <h5>Web development</h5>
                            <p> PHP, HTML5, CSS3, and Javascript. With a dash of SQL. </p>
                            <p>Combine them and build any website for any purpose. 
                            <br />Contact us for detailed quotes</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="clr service-space">Services and products we work with:</p>
            <Icons />
        </div>
        );
    }
}
 
export default Services;
