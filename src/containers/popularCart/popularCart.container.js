import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { GET_NEW_POPULAR, GET_CART } from '../../actions/actions';
import { connect } from 'react-redux';
import { ProductItem } from '../product-item/product-item.container';
class PopularCart extends Component {

  componentDidMount() {
    this.getNewPopular();
  }
  fillIndex = id => {
    let { newPopular } = this.props;
    let result = -1;
    newPopular.forEach((nPopular, index) => {
      if (nPopular.id === id) {
        result = index;
      }
    });
    return result;
  };
  addToCart = id => {
    let { newPopular } = this.props;
    let index = this.fillIndex(id);

    if (index !== -1) {
      newPopular[index].quantity = 1;
      http.post('carts', newPopular[index]).then(res => { });
      http.get('carts').then(res => {
        this.props.addToCart(res.data);
      });
    }
  };
  getNewPopular = () => {
    http.get('popular-products').then(res => {
      this.props.getNewPopular(res.data);
    });
  };
  render() {
    return (
      <div className="mt-5">
        <h5>MOST POPULAR PRODUCTS</h5>
        <div className="row margin-bottom-40">
          <div className="col-md-12 sale-product">
            <div className="owl-carousel owl-carousel5">
              {this.props.newPopular.map((val, i) => (
                <div className="col-md-3 col-sm-3 col-xs-3" key={i}>
                  <ProductItem
                    inforItem={val}
                    styleWith={'100%'}
                    addToCart={this.addToCart}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newPopular: state.newPopular
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewPopular: response =>
      dispatch({ type: GET_NEW_POPULAR, payload: { newPopular: response } }),
    addToCart: response =>
      dispatch({ type: GET_CART, payload: { carts: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularCart);
