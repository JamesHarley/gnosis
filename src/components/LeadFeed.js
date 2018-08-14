import React from 'react';
import axios from 'axios';
export default class LeadFeed extends React.Component {
  
  state = {
    persons: [],
    leadgig: [],
    leadremote:[]
  }
  componentDidMount() {
    axios.get(`/json/gig_results.json`, { crossdomain: false })
      .then(res => {
        console.log('whoop');
        
        const leadgig= res.data.gigs;
        
        console.log(res.data.gigs);
        this.setState({  leadgig });
      })
      axios.get(`/json/remote_results.json`, { crossdomain: false })
      .then(res => {
        const leadremote = res.data.remote;
        this.setState({ leadremote });
      })
  }
  render() {
    return (
      <div className="leadsFeed">
        <ul className="leads">

          <h5>Gigs</h5>
          { this.state.leadgig.map(g =>
                <li>{g.date} - <a href={g.link}>{g.title}</a></li>
          )        
          
          }
        </ul>
        <ul className="leads">
          <h5>Remote Job Leads</h5>
          { this.state.leadremote.map(g =>
                <li>{g.date} - <a href={g.link}>{g.title}</a></li>
              )         
          
          }
        </ul>
      </div>
    )
  }
}