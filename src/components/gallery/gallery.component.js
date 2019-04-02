import React, { Component } from 'react';

export class Gallery extends Component {
  clicked = false;

  constructor(props) {
    super(props);
    this.state = {
      currentImage: null
    }
  }
  setStyle = () => {
    return {
      height: '350px'
    }
  }

  handleClick = (img) => {
    this.clicked = true;
    this.setState({
      currentImage: img
    })
  }

  render() {
    var { images, currentImage } = this.props;
    return (
      <>
        <div className="img-avatar">
          <img src={`/assets/pages/img/products/${(this.clicked ? this.state.currentImage : currentImage)}.jpg`} alt="" style={this.setStyle()} />
        </div>

        <div className="imgs-small">
          {!images ? '' : images.map(i =>
            <img src={`/assets/pages/img/products/${i}.jpg`} alt="" key={i.toString()} onClick={() => this.handleClick(i)} />
          )}
        </div>
      </>
    );
  }
}


export default Gallery;