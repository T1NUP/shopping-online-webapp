import React, { Component } from 'react';
import './pagination.component.scss';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import { PAGINATION } from '../../actions/actions';

export class PaginationComponent extends Component {
  onChange = current => {
    this.props.onChange({
      current
    });
  };
  render() {
    let products = this.props.productTotal;
    let total = products.length;
    let current = this.props.current;
    let pageSize = this.props.display.show;
    return (
      <div className="pagination">
        <div>
          Item {(current - 1) * pageSize + 1} to item{' '}
          {current * pageSize > total ? total : current * pageSize} of {total}{' '}
          total
        </div>
        <div>
          <Pagination
            defaultCurrent={1}
            current={current}
            total={total}
            pageSize={pageSize}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    display: state.sort,
    current: state.pagination
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange: response =>
      dispatch({ type: PAGINATION, payload: { current: response.current } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationComponent);
