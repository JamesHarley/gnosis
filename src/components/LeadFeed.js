import React from 'react';

import leadgig from './gig_results.json'
import leadremote from './remote_results.json'
export default class LeadFeed extends React.Component {
  state = {
    gigs: [],
    remote:[]
  }
  render() {
    return (
      <div className="leadsFeed">
        <ul className="leads">
          <h5>Gigs</h5>
          { leadgig.gigs.map(g =>
                <li>{g.date} - <a href={g.link}>{g.title}</a></li>
              )         
          
          }
        </ul>
        <ul className="leads">
          <h5>Leads</h5>
          { leadremote.remote.map(g =>
                <li>{g.date} - <a href={g.link}>{g.title}</a></li>
              )         
          
          }
        </ul>
      </div>
    )
  }
}