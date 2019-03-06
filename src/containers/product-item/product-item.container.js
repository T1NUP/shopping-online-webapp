import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    // this.setState.
  }
  render() {
    let typeProduct = '';
    switch (this.props.inforItem.type) {
    case 'sale':
      typeProduct = <div className="sticker sticker-sale"></div>;
      break;
    case 'new':
      typeProduct = <div className="sticker sticker-new"></div>;
      break;
    default:
      typeProduct = '';
      break;
    }

    return (
      <div>
        <div className="product-item">
          <div className="pi-img-wrapper">
            <img src={`assets/pages/img/products/${this.props.inforItem.nameImage}.jpg`} className="img-responsive" alt={this.props.inforItem.productName} />
            <div>
              <a href={`assets/pages/img/products/${this.props.inforItem.nameImage}.jpg`} className="btn btn-default fancybox-button">Zoom</a>
              <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
            </div>
          </div>
          <h3><a href="shop-item.html">{this.props.inforItem.productName}</a></h3>
          <div className="pi-price">{this.props.inforItem.unitPrice}</div>
          <Link to="javascript:void(0);" className="btn btn-default add2cart" onClick={this.addToCart}>Add to cart</Link>
          {typeProduct}
        </div>
      </div>
    );
  }
}
