import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { connect } from 'react-redux';
import { ProductItem } from '../product-item/product-item.container';
import { GET_THREE_ITEMS } from '../../actions/actions'

class ThreeItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threeItems: []
    };
  }
  componentDidMount = () => {
    this.getThreeItems();
  }

  getThreeItems() {
    http.get('three-items').then(res => {
      this.props.getThreeItems(res.data);
    });
  }
  render() {
    return (
      <div className="col-md-9 col-sm-8">
        <h2>Three items</h2>
        <div className="owl-carousel owl-carousel3">
          {
            this.props.threeItems.map((val, i) =>
              <ProductItem inforItem={val} key={i} styleWith={'281px'}>
              </ProductItem>
            )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    threeItems: state.threeItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getThreeItems: (response) => dispatch({ type: GET_THREE_ITEMS, payload: { threeItems: response } })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThreeItems);
