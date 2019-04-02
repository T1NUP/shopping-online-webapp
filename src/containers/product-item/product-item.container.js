import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textButton: 'ADD TO CARD',
      styleButton: {
        color: '#a8aeb3',
        border: '1px #ededed solid'
      }
    };
  }

  addToCart = () => {
    this.setState({
      textButton: 'ADDED',
      styleButton: {
        border: '1px #1aa71a solid',
        color: '#1aa71a'
      }
    });
    this.props.addToCart(this.props.inforItem.id);
  };
  render() {
    let typeProduct = '';
    switch (this.props.inforItem.type) {
      case 'sale':
        typeProduct = <div className="sticker sticker-sale" />;
        break;
      case 'new':
        typeProduct = <div className="sticker sticker-new" />;
        break;
      default:
        typeProduct = '';
        break;
    }
    const imgStyle = {
      width: this.props.styleWith,
      marginRight: '0px'
    };

    return (
      <div className="owl-item active" style={imgStyle}>
        <div>
          <div className="product-item">
            <div className="pi-img-wrapper">
              <img
                src={`/assets/pages/img/products/${
                  this.props.inforItem.nameImage
                  }.jpg`}
                className="img-responsive"
                alt={this.props.inforItem.productName}
              />
              <div>
                <a
                  href={`assets/pages/img/products/${
                    this.props.inforItem.nameImage
                    }.jpg`}
                  className="btn btn-default fancybox-button"
                >
                  Zoom
                </a>
                <Link
                  to={{ pathname: `product-detail/${this.props.inforItem.id}` }}
                  className="btn btn-default fancybox-fast-view"
                >
                  View
                </Link>

              </div>
            </div>
            <h3>
              <a href="shop-item.html">{this.props.inforItem.productName}</a>
            </h3>
            <div className="pi-price">${this.props.inforItem.cost}</div>
            <button
              className="btn btn-default add2cart"
              style={this.state.styleButton}
              onClick={this.addToCart}
            >
              {this.state.textButton}
            </button>
            {typeProduct}
          </div>
        </div>
      </div>
    );
  }
}
