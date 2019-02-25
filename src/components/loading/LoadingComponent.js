import React, { Component } from 'react';
import { store } from "../../App";
import './LoadingComponent.scss';

export class LoadingComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: store.getState().loading
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        loading: store.getState().loading
      });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  render() {
    const showLoading = this.state.loading;
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
