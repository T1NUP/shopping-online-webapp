import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { connect } from 'react-redux';
import { ProductItem } from '../product-item/product-item.container';
import { GET_TWO_ITEMS, GET_CART } from '../../actions/actions';

class TwoItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twoItems: []
    };
  }
  componentDidMount = () => {
    this.getTwoItems();
  };
  fillIndex = id => {
    var { twoItems } = this.props;
    var result = -1;
    twoItems.forEach((twoItem, index) => {
      if (twoItem.id === id) {
        result = index;
      }
    });
    return result;
  };
  addToCart = id => {
    var { twoItems } = this.props;
    var index = this.fillIndex(id);
    if (index !== -1) {
      twoItems[index].quantity = 1;
      http.post('carts', twoItems[index]).then(res => {});
      http.get('carts').then(res => {
        this.props.addToCart(res.data);
      });
    }
  };
  getTwoItems() {
    http.get('two-items').then(res => {
      this.props.getTwoItems(res.data);
    });
  }
  render() {
    return (
      <div className="col-md-6 two-items-bottom-items">
        <h2>Two items</h2>
        <div className="owl-carousel owl-carousel2">
          {this.props.twoItems.map((val, i) => (
            <ProductItem
              inforItem={val}
              key={i}
              styleWith={'50%'}
              addToCart={this.addToCart}
            />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    twoItems: state.twoItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTwoItems: response =>
      dispatch({ type: GET_TWO_ITEMS, payload: { twoItems: response } }),
    addToCart: response =>
      dispatch({ type: GET_CART, payload: { carts: response } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwoItems);
