import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_CART, DELETE_CART_ITEM } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { http } from '../../services/http.service';
import CartHeaderItem from '../cart-header-item/cart-header-item';
class CartHeader extends Component {
  componentDidMount() {
    this.newCart();
  }
  newCart = () => {
    http.get('carts').then(res => {
      this.props.newCart(res.data);
    });
  };
  onDeleteCart = id => {
    this.props.deleteCart(id);
    http.delete(`carts/${id}`).then(res => { });
  };
  render() {
    let { carts } = this.props;
    let sumCart = 0;
    let sum = 0;
    let elementCartHeader = carts.map((cart, index) => {
      return (
        <CartHeaderItem
          cart={cart}
          key={index}
          onDeleteCart={this.onDeleteCart}
        />
      );
    });
    if (carts.length > 0) {
      for (let i = 0; i < carts.length; i++) {
        sumCart += carts[i].cost * carts[i].quantity;
      }
      sum += sumCart;
    }
    return (
      <div className="top-cart-block">
        <div className="top-cart-info">
          <Link to="cart" className="top-cart-info-count">
            {carts.length} items
          </Link>
          <Link to="cart" className="top-cart-info-value">
            ${sum}
          </Link>
        </div>
        <i className="fa fa-shopping-cart" />

        <div className="top-cart-content-wrapper">
          <div className="top-cart-content">
            <ul className="scroller" style={{ height: 250 }}>
              {elementCartHeader}
            </ul>
            <div className="text-right">
              <Link to="cart" className="btn btn-default">
                View Cart
              </Link>
              <Link to="shop-checkout.html" className="btn btn-primary">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    carts: state.carts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newCart: response =>
      dispatch({ type: GET_CART, payload: { carts: response } }),
    deleteCart: id =>
      dispatch({ type: DELETE_CART_ITEM, payload: { cartId: id } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartHeader);
