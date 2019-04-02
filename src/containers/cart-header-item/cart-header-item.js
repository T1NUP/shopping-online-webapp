import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CartHeaderItem extends Component {
  onDeleteCart = () => {
    if (window.confirm('Delete the item?')) {
      this.props.onDeleteCart(this.props.cart.id);
    }
  };
  render() {
    let { cart, index } = this.props;
    return (
      <li key={index}>
        <Link to="shop-item.html">
          <img
            src={`assets/pages/img/products/${cart.nameImage}.jpg`}
            width="37"
            height="34" alt=""
          />
        </Link>
        <span className="cart-content-count">x {cart.quantity} </span>
        <strong>
          <Link to="shop-item.html">{cart.productName}</Link>
        </strong>
        <em>${cart.cost} </em>
        <Link to="/" className="del-goods" onClick={this.onDeleteCart}>
          &nbsp;
        </Link>
      </li>
    );
  }
}

export default CartHeaderItem;
