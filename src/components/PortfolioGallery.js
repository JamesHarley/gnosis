import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: '/photos/dirocracy.png',
    width: 4,
    height: 3
  },
  {
    src: '/photos/arduinoBTWeatherStation.png',
    width: 4,
    height: 3
  },
  {
    src: '/photos/knowYourRights.png',
    width: 4,
    height: 3
  },
    {
      src: '/photos/gd1.png',
      width: 4,
      height: 3
    },
    {
      src: '/photos/gd2.png',
      width: 4,
      height: 3
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
