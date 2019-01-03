import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  
  {
    src: 'https://github.com/JamesHarley/ourhometown-google-doc-wordpress-publisher/blob/master/screenshots/google_docs_wordpress_publisher.PNG?raw=true',
    width: 4,
    height: 3,
    caption: <a href="https://github.com/JamesHarley/ourhometown-google-doc-wordpress-publisher">Google Docs Addon built for client looking to publish to wordpress directly from Docs</a>
  },
  { 
    src: 'https://github.com/JamesHarley/ourhometown-gift-subscription/raw/master/screenshots/admin_area_example_setup.png?raw=true',
    width: 4,
    height: 3,
    caption: <a href="https://github.com/JamesHarley/ourhometown-gift-subscription">Wordpress plugin built for client looking to add ability for customers to purchase gift subscriptions</a>
  },

  {
    src: '/photos/arduinoBTWeatherStation.png',
    width: 4,
    height: 3,
    caption: <a href="https://play.google.com/store/apps/details?id=gnosisdevelopment.arduinobtweatherstation">Android application that communicates over bluetooth serial and displays graphed points over time</a>
  },
  {
    src: '/photos/knowYourRights.png',
    width: 4,
    height: 3,
    caption: <a href="https://play.google.com/store/apps/details?id=com.gnosisdevelopment.know_your_rights">First Android application released -- basic text rendering as developer skill building</a>
  },
  {
    src: '/photos/gd2.png',
    width: 4,
    height: 3,
    caption: 'Norwegian forest breeders site built with ReactJS '
  },
  {
    src: '/photos/dirocracy.png',
    width: 4,
    height: 3,
    caption: 'Testing site'
  },
];

class PortfolioGallery extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }

    render() {
        return (
            <div id="PortfolioGallery">
              <div className="center-box">
                <Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
                    <Lightbox images={PHOTO_SET}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                    
                />
              </div>
            </div>
        );
    }
}

export default PortfolioGallery;
