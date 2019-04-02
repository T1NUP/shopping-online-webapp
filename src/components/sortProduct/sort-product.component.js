import React, { Component } from 'react';
import './sort-product.component.scss';
import { connect } from 'react-redux';
import * as action from './../../actions/actions';

class SortProductComponent extends Component {
  sort = e => {
    this.props.onSort({
      sort: e.target.value
    });
  };
  show = e => {
    this.props.onShow({
      show: parseInt(e.target.value)
    });
  };
  render() {
    return (
      <div className="sort">
        <span className="sort__by">SORT BY</span>{' '}
        <select defaultValue={this.props.display.sort} onChange={this.sort}>
          <option value="default">Default</option>
          <option value="price">Price ASC</option>
        </select>
        <span className="sort__show">SHOW</span>
        <select defaultValue={this.props.display.show} onChange={this.show}>
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    );
  }
}
const mapStatesToProps = state => {
  return {
    display: state.sort
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: response => {
      dispatch({ type: action.SORT, payload: { sort: response.sort } });
    },
    onShow: response => {
      dispatch({ type: action.SHOW, payload: { show: response.show } });
    }
  };
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(SortProductComponent);
