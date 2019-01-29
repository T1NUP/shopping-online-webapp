import React, { Component } from 'react';
import { store } from "../../App";
import { DECREASE, INCREASE } from "../../actions/actions";
import { http } from '../../services/http';
import'./counter.scss';

export class Counter extends Component {

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

  increase = () => {
    http.get('posts/1').then(data => {
      console.log(data);
      store.dispatch({
        type: INCREASE,
        payload: { step: 2 }
      });
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
        <h3>{ this.state.incDecValue }</h3>
        <div>
          <button onClick={ this.increase }>Increase</button>
          <button onClick={ this.decrease }>Decrease</button>
        </div>
      </div>
    )
  }
}
