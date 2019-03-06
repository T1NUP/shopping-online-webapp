import React, { Component } from 'react';
import { store } from "../../App";
import { http } from '../../services/http.service';
import { GET_NEW_ARRIVALS } from "../../actions/actions";
import { ProductItem } from '../product-item/product-item.container';

export class NewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArrivals: store.getState().newArrivals
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        newArrivals: store.getState().newArrivals
      });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  componentDidMount = () => {
    this.getNewArrivals();
  }

  getNewArrivals = () => {
    http.get('new-arrivals').then(data => {
      console.log(data);
      store.dispatch({
        type: GET_NEW_ARRIVALS,
        payload: {
          newArrivals: data.data
        }
      });
    });
  }
  render() {
    const newArrivals = this.state.newArrivals;
    return (
      <div className="row margin-bottom-40">
        <div className="col-md-12 sale-product">
          <h2>New Arrivals</h2>
          <div className="owl-carousel owl-carousel5">
            {
              newArrivals.map(val =>
                <ProductItem inforItem={val} >
                </ProductItem>
              )}
          </div>
        </div>
      </div>
    );
  }
}
