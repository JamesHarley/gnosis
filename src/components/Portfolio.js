import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Portfolio extends Component {
    render() {
        return (
            <div id="Portfolio">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Portfolio | Gnosis Development</title>
                </Helmet>
                <h5><i class="fas fa-briefcase"></i> Portfolio</h5>
                <p><a href="http://github.com/jamesharley">Github</a> --- 
                To protect clients code, most of the projects are private repositories.
                 Once contacted we can provide temporary access to serious clients. </p>
            </div>
        );
    }
}

export default Portfolio;
