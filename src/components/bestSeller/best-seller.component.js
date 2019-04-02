import React, { Component } from 'react';
import './best-seller.component.scss';
import { http } from '../../services/http.service';
import { connect } from 'react-redux';
import { GET_THREE_ITEMS } from '../../actions/actions';

export class BestSellerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeItems: []
    };
  }
  componentDidMount = () => {
    this.getThreeItems();
  };

  getThreeItems() {
    http.get('three-items').then(res => {
      this.props.getThreeItems(res.data);
    });
  }
  render() {
    return (
      <div className="best-seller col-md-3 col-sm-4">
        <div className="component-title">Best Sellers</div>
        {this.props.products.map((val, i) => (
          <div className="row best-seller__item" key={i}>
            <div className="col-md-3 col-sm-4 pr-0">
              <img
                src={`/assets/pages/img/products/${val.nameImage}.jpg`}
                className="best-seller__img"
                alt={val.productName}
              />
            </div>
            <div className="col-md-9 col-sm-8">
              <div className="best-seller__name">
                <a href="/">{val.productName}</a>
              </div>
              <div className="best-seller__cost pi-price">${val.cost}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.threeItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getThreeItems: response =>
      dispatch({ type: GET_THREE_ITEMS, payload: { threeItems: response } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestSellerComponent);
