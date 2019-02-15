import React, { Component } from 'react';
import { store } from "../../App";

export class BestSeller extends Component {

  constructor(props) {
    super(props);
    this.state = {
      incDecValue: store.getState().incDecValue
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        incDecValue: store.getState().incDecValue
      });
    });
    
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="best-seller">
        <h4>This is Best Seller components</h4>
      </div>
    )
  }
}
