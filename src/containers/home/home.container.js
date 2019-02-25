import React, { Component } from 'react';
import { CounterComponent } from '../../components/counter/counter.component';
import { TestApiContainer } from '../testAPI/test-api.container';

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


