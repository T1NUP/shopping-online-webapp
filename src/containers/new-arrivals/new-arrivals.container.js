import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { GET_NEW_ARRIVALS } from "../../actions/actions";
import { ProductItem } from '../product-item/product-item.container';
import { connect } from 'react-redux';

class NewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArrivals: []
    };
    console.log(this.props.newArrivals)

  }

  componentDidMount = () => {
    this.getNewArrivals();
  }

  getNewArrivals = () => {
    http.get('new-arrivals').then(res => {
      this.props.getNewArrivals(res.data);
    });
  }
  render() {
    return (
      <div className="row margin-bottom-40">
        <div className="col-md-12 sale-product">
          <h2>New Arrivals</h2>
          <div className="owl-carousel owl-carousel5">
            {
              this.props.newArrivals.map((val, i) =>
                <ProductItem inforItem={val} key={i} styleWith={'228px'} >
                </ProductItem>
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newArrivals: state.newArrivals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewArrivals: (response) => dispatch({ type: GET_NEW_ARRIVALS, payload: { newArrivals: response } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals);

