import React, { Component } from "react";
import { http } from "../../services/http.service";
import { GET_NEW_ARRIVALS, GET_CART } from "../../actions/actions";
import { ProductItem } from "../product-item/product-item.container";
import { connect } from "react-redux";

class NewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArrivals: []
    };
  }

  componentDidMount = () => {
    this.getNewArrivals();
  };
  fillIndex = id => {
    let { newArrivals } = this.props;
    let result = -1;
    newArrivals.forEach((newArrival, index) => {
      if (newArrival.id === id) {
        result = index;
      }
    });
    return result;
  };
  addToCart = id => {
    console.log(id);
    let { newArrivals } = this.props;
    let index = this.fillIndex(id);
    if (index !== -1) {
      newArrivals[index].quantity = 1;
      http.post("carts", newArrivals[index]).then(res => {});
    }
    http.get("carts").then(res => {
      this.props.addToCart(res.data);
    });
  };
  getNewArrivals = () => {
    http.get("new-arrivals").then(res => {
      this.props.getNewArrivals(res.data);
    });
  };
  render() {
    return (
      <div className="row margin-bottom-40">
        <div className="col-md-12 sale-product">
          <h2>New Arrivals</h2>
          <div className="owl-carousel owl-carousel5">
            {this.props.newArrivals.map((val, i) => (
              <ProductItem
                inforItem={val}
                key={i}
                styleWith={"20%"}
                addToCart={this.addToCart}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newArrivals: state.newArrivals,
    carts: state.carts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewArrivals: response =>
      dispatch({ type: GET_NEW_ARRIVALS, payload: { newArrivals: response } }),
    addToCart: response =>
      dispatch({ type: GET_CART, payload: { carts: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArrivals);
