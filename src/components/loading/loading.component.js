import React, { Component } from 'react';
import { connect } from "react-redux";
import './loading.component.scss';

class LoadingComponent extends Component {

  render() {
    const showLoading = this.props.loading;
    if (showLoading) {
      return (
        <div className="loading">
          <img src={ process.env.PUBLIC_URL + '/assets/pages/img/icons/loading.gif' } alt=""/>
        </div>
      )
    } else {
      return (
        <div className="loading hidden">
          <img src={ process.env.PUBLIC_URL + '/assets/pages/img/icons/loading.gif' } alt=""/>
        </div>
      )
    }
  }

}

const mapStatesToProps = state => {
  return {
    loading: state.loading
  };
};

export default connect(mapStatesToProps)(LoadingComponent);
