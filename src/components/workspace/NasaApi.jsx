import React from 'react';
import axios from 'axios';
const manifest_curiosity = "https://mars-photos.herokuapp.com/api/v1/manifests/Curiosity"
const keyed_api = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=4K0TaYlQrvzDCDgzMfahyU204KuKjdEkpr6yJ7LB"
//const api = "https://mars-photos.herokuapp.com/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=4K0TaYlQrvzDCDgzMfahyU204KuKjdEkpr6yJ7LB"


export default class NASA_Api extends React.Component {
    
  state = {
    photos: [],
    manifest:[]
  }
  componentDidMount() {
    axios.get(keyed_api)
      .then(res => {
        console.log('mars photo api');
        
        const photos= res.data.photos;
        
        console.log( res.data.photos);
        this.setState({  photos });
      })
      axios.get(manifest_curiosity)
      .then(res => {
        console.log('manifest request');
        
        const manifest= res.data.photo_manifest;
        
        console.log( res.data.photo_manifest);
        this.setState({  manifest });
      })
      
  }
  render() {

    return (
      <div className="MARS ROVER Photos">
        <ul className="leads">
          <h5>NASA API Test</h5>
          { this.state.photos.map(g =>
            <a href={g.img_src}>
              <li>  
                <img src={g.img_src} alt={g.id} className="nasa_img" /><br />
                {g.id}<br /> {g.sol}
              </li>
            </a>
              )         
          
          }
        </ul>
      </div>
    )
  }
}

