import React, { Component } from 'react';
import './filter-product.component.scss';
import { connect } from 'react-redux';
import * as action from './../../actions/actions';
import { Slider } from 'antd';

export class FilterProductComponent extends Component {
  onClickNotAvailable = e => {
    this.props.onClickNotAvailable({
      not_available: e.target.checked
    });
  };
  onClickInStock = e => {
    this.props.onClickInStock({
      in_stock: e.target.checked
    });
  };

  onAfterChange = value => {
    this.props.onRange({
      price_from: value[0],
      price_to: value[1]
    });
  };

  render() {
    let price_from = this.props.filter.price_from;
    let price_to = this.props.filter.price_to;

    return (
      <div className="filter-product col-md-3 col-sm-4">
        <div className="component-title">filter</div>
        <div className="component-sub-title">availability</div>
        <label htmlFor="not_available" className="avai_checkbox">
          Not available ({this.props.avai})
          <input
            type="checkbox"
            id="not_available"
            onClick={this.onClickNotAvailable}
          />
          <span className="check-mark" />
        </label>
        <label htmlFor="in_stock" className="avai_checkbox">
          In stock ({this.props.stock})
          <input type="checkbox" id="in_stock" onClick={this.onClickInStock} />
          <span className="check-mark" />
        </label>
        <div className="component-sub-title">price</div>
        <p>
          Range ${price_from} - ${price_to}
        </p>
        <Slider
          max={300}
          range
          defaultValue={[price_from, price_to]}
          onAfterChange={this.onAfterChange}
        />
      </div>
    );
  }
}
const mapStatesToProps = state => {
  return {
    filter: state.filter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClickNotAvailable: response => {
      dispatch({
        type: action.GET_NOT_AVAILABLE,
        payload: { not_available: response.not_available }
      });
    },
    onClickInStock: response => {
      dispatch({
        type: action.GET_IN_STOCK,
        payload: { in_stock: response.in_stock }
      });
    },
    onRange: response => {
      dispatch({
        type: action.RANGE,
        payload: {
          price_from: response.price_from,
          price_to: response.price_to
        }
      });
    }
  };
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(FilterProductComponent);
