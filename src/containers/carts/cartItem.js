import React, { Component } from 'react';
import './cart.scss';
class CartItem extends Component {
    constructor(props) {
        super(props);
    }
    increase = () => {
        this.props.increase(this.props.cart.id);
    }
    decrease = () => {
        this.props.decrease(this.props.cart.id);
    }
    onDeleteCart = () => {
       if (window.confirm("Delete the item?")) {
        this.props.onDeleteCart(this.props.cart.id);
      }
    }
  render() {
      var {cart} = this.props;
      
    return (
      <tr key={cart.id}>
        <th><img src={`assets/pages/img/products/${cart.nameImage}.jpg`}/></th>
        <td>Otto</td>
        <td>{cart.name}</td>
        <td>
          <div className="quantityPro row">
            <div className="number">
              <span>{cart.quantity}</span>
            </div>
            <div className="control">
              <div onClick={this.increase}>
                <i className="fas fa-chevron-up" />
              </div>
              <div onClick={this.decrease}>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </div>
        </td>
        <td><span className="number-color">${cart.cost}</span></td>
        <td><span className="number-color">${cart.cost * cart.quantity}</span></td>
        <td>
          <div onClick={this.onDeleteCart}>
            <i className="fas fa-times-circle" />
          </div>
        </td>
      </tr>
    );
  }
}

export default CartItem;
