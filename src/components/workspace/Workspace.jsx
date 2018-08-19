import React, { Component } from 'react';

import Helmet from 'react-helmet';
import NasaApi from './NasaApi';

class Workspace extends Component {
    render() {
        return (
            <div id="Workspace">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Workspace | Gnosis Development</title>
                </Helmet>
               <NasaApi />
            </div>
        );
    }
}

export default Workspace;
