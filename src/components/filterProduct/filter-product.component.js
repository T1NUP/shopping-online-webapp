import React, { Component } from 'react';
import { store } from "../../App";

export class FilterProductComponent extends Component {

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
      <div className="filter-product">
        <h4>This is Filter Product components</h4>
      </div>
    )
  }
}
