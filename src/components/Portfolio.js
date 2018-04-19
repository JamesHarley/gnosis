import React, { Component } from 'react';
import Lightbox from 'react-images';

class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio">
                <h5><i class="fas fa-briefcase"></i> Portfolio</h5>
                <a href="http://github.com/jamesharley">Github</a> --- To protect clients code, most of the projects are private repositories. Once contacted we can provide temporary access to serious clients. 
            </div>
        );
    }
}

export default Portfolio;
