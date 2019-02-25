import React, { Component } from 'react';
import { CounterComponent } from '../../components/counter/CounterComponent';
import { TestApiContainer } from '../testAPI/TestApiContainer';

export class HomeContainer extends Component {

  render() {
    return(
      <>
        <CounterComponent />
        <TestApiContainer />
      </>
    );
  }

}


