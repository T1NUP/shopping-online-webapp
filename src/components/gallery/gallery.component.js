import React, { Component } from 'react';
import { Modal, Carousel, Icon } from 'antd';

import './gallery.component.scss';

export class Gallery extends Component {
  clicked = false;

  constructor(props) {
    super(props);
    this.state = {
      currentImage: null,
      visible: false,
      backgroundImage: ``,
      transformOrigin: '0% 0%'
    }
    this.carousel = React.createRef();
  }
  next = () => {
    this.carousel.next();
  }
  previous = () => {
    this.carousel.prev();
  }

  showModal = (i) => {
    console.log(i);
    this.setState({
      visible: true,
      currentImage: i
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleMouseMove = e => {

    var divImgAvatar = document.querySelector('.img-avatar').getBoundingClientRect();
    const { left, top, width, height } = divImgAvatar;


    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top - 200) / height) * 100;

    this.setState({
      backgroundImage: `url('/assets/pages/img/products/${this.props.currentImage}.jpg')`,
      transformOrigin: `${x}% ${y}%`
    });
  };


  render() {
    var { images, currentImage } = this.props;
    const props = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <div className="img-avatar" onMouseMove={this.handleMouseMove}>
          <div
            className="figure"

            style={this.state}
          >
            <img src={`/assets/pages/img/products/${currentImage}.jpg`} />
          </div>
        </div>



        {/* thumbnail */}
        <div className="imgs-small">
          {!images ? '' : images.map(i =>
            <img src={`/assets/pages/img/products/${i}.jpg`} key={i.toString()} alt="" onClick={() => this.showModal(i)} />
          )}
          <div>
            <Modal
              className="gallery-modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div>
                <Icon type="left-circle" onClick={this.previous} />
                <Carousel ref={node => (this.carousel = node)} {...props}>
                  {!images ? '' : images.map(i =>
                    <div key={i.toString()}>
                      <img src={`/assets/pages/img/products/${i}.jpg`} alt="" />
                    </div>
                  )}
                </Carousel>
                <Icon type="right-circle" onClick={this.next} />
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}


export default Gallery;