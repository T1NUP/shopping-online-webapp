import React, { Component } from "react";
import "./best-seller.component.scss";
import { http } from "../../services/http.service";
import { connect } from "react-redux";
import { GET_BEST_SELLER } from "../../actions/actions";
import { Link } from "react-router-dom";

export class BestSellerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestSellers: []
    };
  }
  componentDidMount = () => {
    this.getBestSellers();
  };

  getBestSellers() {
    http.get("best-sellers").then(res => {
      this.props.getBestSellers(res.data);
    });
  }
  render() {
    return (
      <div className="best-seller col-md-3 col-sm-4">
        <div className="component-title">Best Sellers</div>
        {this.props.products.slice(0, 3).map((val, i) => (
          <div className="row best-seller__item" key={i}>
            <div className="col-md-3 col-sm-4 pr-0">
              <Link
                to={{
                  pathname: `/product-detail/${val.id}`
                }}
              >
                <img
                  src={`/assets/pages/img/products/${val.nameImage}.jpg`}
                  className="best-seller__img"
                  alt={val.productName}
                />
              </Link>
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
    products: state.bestSellers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBestSellers: response =>
      dispatch({ type: GET_BEST_SELLER, payload: { bestSellers: response } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestSellerComponent);
