import React, { Component } from 'react';
import Lightbox from 'react-images';


class PortfolioGallery extends Component {
    render() {
        return (
            <div id="PortfolioGallery">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Portfolio | Gnosis Development</title>
                </Helmet>
                <h5><i class="fas fa-briefcase"></i> Portfolio</h5>
                <a href="http://github.com/jamesharley">Github</a> --- To protect clients code, most of the projects are private repositories. Once contacted we can provide temporary access to serious clients. 
            </div>
        );
    }
}

export default PortfolioGallery;
