import React, { Component } from 'react';
import { store } from "../../App";
import { DECREASE, INCREASE } from "../../actions/actions";
import './CounterComponent.scss';

export class CounterComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      });
    });
    
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  increase = () => {
    store.dispatch({
      type: INCREASE,
      payload: { step: 2 }
    });
  }

  decrease = () => {
    store.dispatch({
      type: DECREASE,
      payload: { step: 2 }
    });
  }

  render() {
    return (
      <div className="counter">
        <h4>This is Counter components</h4>
        <h3>{ this.state.counter }</h3>
        <div>
          <button onClick={ this.increase }>Increase</button>
          <button onClick={ this.decrease }>Decrease</button>
        </div>
      </div>
    )
  }
}
