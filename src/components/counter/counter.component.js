import React, { Component } from 'react';
import { connect } from "react-redux";
import { store } from "../../App";
import { DECREASE, INCREASE } from "../../actions/actions";
import './counter.component.scss';

class CounterComponent extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <h4>{ this.props.counter }</h4>
        <div>
          <button onClick={ this.props.increase }>Increase</button>
          <button onClick={ this.props.decrease }>Decrease</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { counter: state.counter }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: (data) => dispatch({ type: INCREASE, payload: { step: 2 } }),
    decrease: (data) => dispatch({ type: DECREASE, payload: { step: 2 } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);