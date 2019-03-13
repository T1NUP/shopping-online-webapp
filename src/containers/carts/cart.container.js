import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { GET_CART, DELETE_CART_ITEM } from '../../actions/actions';
import CartItem from './cartItem';
import TotalPriceCart from './totalPriceCart';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PopularCart from '../popularCart/popularCart.container';
class Cartcontainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: []
    };
    // console.log(this.state.carts)
  }
  componentDidMount = () => {
    this.newCart();
  };
  newCart = () => {
    http.get('carts').then(res => {
      this.props.newCart(res.data);
      this.setState({
        carts: res.data
      });
    });
  };
  fillIndex = id => {
    var { carts } = this.props;
    var result = -1;
    carts.forEach((cart, index) => {
      if (cart.id === id) {
        result = index;
      }
    });
    return result;
  };
  //   ...
  increase = id => {
    var { carts } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      carts[index].quantity = carts[index].quantity + 1;
      this.setState({
        carts: carts
      });
      http.put(`carts/${id}`, carts[index]).then(res => {});
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
        http.put(`carts/${id}`, carts[index]).then(res => {});
      }
      if (carts[index].quantity === 1) {
        carts[index].quantity = 1;
        this.setState({
          carts: carts
        });
        http.put(`carts/${id}`, carts[index]).then(res => {});
      }
    }
  };
//   ..............deleteCartItem
  onDeleteCart = id => {
    this.props.deleteCart(id);
    http.delete(`carts/${id}`).then(res => {
    });
  };
  render() {
    var { carts } = this.props;
    var elementItem = carts.map((cart, index) => {
      return (
        <CartItem
          key={index}
          cart={cart}
          increase={this.increase}
          decrease={this.decrease}
          onDeleteCart={this.onDeleteCart}
        />
      );
    });

    return (
      <div>
        <div className={carts.length === 0 ? ' px-2' : 'd-none'}>
          <h1>Shopping Cart</h1>
          <h3>Your shopping cart is empty!</h3>
        </div>
        <div className={carts.length > 0 ? 'cart px-2 ' : 'd-none'}>
          <div className="cart__shopping my-2">
            <h1>Shopping Cart</h1>
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
              <tbody>{elementItem}</tbody>
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
        <PopularCart />
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
)(Cartcontainer);
