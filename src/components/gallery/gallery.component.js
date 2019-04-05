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
      backgroundPosition: '-10% -10%',
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


  setStyleThumbnail = () => {
    return {
      width: '100%',
    }
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    // console.log(e.target.getBoundingClientRect());
    console.log(e.pageX, e.pageY, x, y);
    this.setState({
      backgroundImage: `url('/assets/pages/img/products/${this.props.currentImage}.jpg')`,
      backgroundPosition: `${x}% ${y}%`
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
        <div className="img-avatar">
          <figure onMouseMove={this.handleMouseMove} style={this.state}>
            <img src={`/assets/pages/img/products/${currentImage}.jpg`} />
          </figure>
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