import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callAPI from '../../utils/apiCaller';
import CartItem from './cartItem';
import './cart.scss';
import TotalPriceCart from './totalPriceCart';
class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: []
    };
  }
  componentWillMount() {
    callAPI('carts', 'GET', null).then(res => {
      this.setState({
        carts: res.data
      });
    });
  }
  fillIndex = id => {
    var { carts } = this.state;
    var result = -1;
    carts.forEach((cart, index) => {
      if (cart.id === id) {
        result = index;
      }
    });
    return result;
  };
  increase = id => {
    var { carts } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      carts[index].quantity = carts[index].quantity + 1;
      this.setState({
        carts: carts
      });
      callAPI(`carts/${id}`, 'PUT', carts[index]).then(res => {});
    }
  };
  decrease = id => {
    var { carts } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      if (carts[index].quantity > 1) {
        carts[index].quantity = carts[index].quantity - 1;
        this.setState({
          carts: carts
        });
        callAPI(`carts/${id}`, 'PUT', carts[index]).then(res => {});
      }
      if (carts[index].quantity === 1) {
        carts[index].quantity = 1;
        this.setState({
          carts: carts
        });
        callAPI(`carts/${id}`, 'PUT', carts[index]).then(res => {});
      }
    }
  };
  onDeleteCart = id => {
    var { carts } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      carts.splice(index, 1);
      this.setState({
        carts: carts
      });
    }
    callAPI(`carts/${id}`, 'DELETE', carts[index]).then(res => {});
  };
  render() {
    var { carts } = this.state;
    console.log(carts.length);
    var cartItemE = carts.map((cart, index) => {
      return (
        <CartItem
          cart={cart}
          key={index}
          increase={this.increase}
          decrease={this.decrease}
          onDeleteCart={this.onDeleteCart}
        />
      );
    });
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div className={carts.length === 0 ? 'd-block text-empty' : 'd-none'}>
          Your shopping cart is empty!
        </div>
        <div className={carts.length > 0 ? 'cart px-2' : 'd-none'}>
          <div className="cart__shopping my-2">
            <table className="table ">
              <thead>
                <tr>
                  <th width="10%">IMAGE</th>
                  <th width="25%">DESCRIPTION</th>
                  <th width="13%">REF NO</th>
                  <th width="13%">QUANTITY</th>
                  <th width="13%">UNIT FRICE</th>
                  <th width="13%">TOTAL</th>
                  <th width="13%" />
                </tr>
              </thead>
              <tbody>{cartItemE}</tbody>
            </table>
            <TotalPriceCart carts={carts} />
          </div>
          <div className="cart__button d-flex ">
            <div className="btn-continue  flex-grow-1">
              <button className="btn ">
                <Link to="/" className="text-white">
                  CONTINUE SHOPPING <i className="fas fa-shopping-cart" />
                </Link>
              </button>
            </div>
            <div className="btn-checkout">
              <button className="btn ">
                <Link to="" className="text-white">
                  Checkout <i className="fas fa-check" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="popular-product" />
      </div>
    );
  }
}
export default ShoppingCart;
