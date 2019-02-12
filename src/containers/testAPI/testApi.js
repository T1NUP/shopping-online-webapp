import React, { Component } from 'react';
import { store } from "../../App";
import { GET_API, POST_API, DELETE_API } from "../../actions/actions";
import { http } from '../../services/http';
import './testAPI.scss';

export class TestAPI extends Component {

  constructor(props) {
    super(props);
    this.getAPI();
    this.state = {
      products: store.getState().productList
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        products: store.getState().productList
      });
      console.log(store.getState());
    });
    
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  getAPI = () => {
    http.get('products').then(data => {
      console.log(data);
      store.dispatch({
        type: GET_API,
        payload: {
          productList: data.data
        }
      });
    });
  }

  postAPI = () => {
    let id = 0;
    const products = this.state.products;
    products.forEach(el => {
      if (el.id > id) {
        id = el.id
      }
    });
    id++;
    const product = {
      id: id,
      name: "black jacket",
      category: "jacket",
      cost: "$50"
    };
    http.post('products', product).then(data => {
      console.log(data);
      store.dispatch({
        type: POST_API,
        payload: {
          product: product
        }
      });
    }, err => {
      console.log(err);
    });
  }
  
  deleteAPI = (id) => {
    http.delete('products/' + id).then(data => {
      console.log(data);
      store.dispatch({
        type: DELETE_API,
        payload: {
          id: id
        }
      });
    });
  }

  putAPI = () => {

  }

  render() {
    const products = this.state.products;
    return (
      <div className="product-list">
        <h4>This is Product List</h4>
        <button onClick={ this.getAPI }>Get Product</button>
        <button onClick={ this.postAPI }>Add New</button>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>Category</td>
              <td>Cost</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            { products.map(value => 
              <tr key={ value.id }>
                <td>{ value.id }</td>
                <td>{ value.name }</td>
                <td>{ value.category }</td>
                <td>{ value.cost }</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => this.deleteAPI(value.id)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
