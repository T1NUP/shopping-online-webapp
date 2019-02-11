import React, { Component } from 'react';
import { Counter } from '../../components/counter/counter';
import { TestAPI } from '../testAPI/testApi';

export class HomeScreen extends Component {

  render() {
    return(
      <>
        <Counter />
        <TestAPI />
      </>
    );
  }

}


