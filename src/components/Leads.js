import React, { Component } from 'react';

import Helmet from 'react-helmet';
import LeadFeed from './LeadFeed';

class Leads extends Component {
    render() {
        return (
            <div id="Leads">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Leads | Gnosis Development</title>
                </Helmet>
               <LeadFeed />
            </div>
        );
    }
}

export default Leads;
