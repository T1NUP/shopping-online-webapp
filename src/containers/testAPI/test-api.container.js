import React, { Component } from 'react';
import { store } from "../../App";
import { GET_API, POST_API, DELETE_API, PUT_API } from "../../actions/actions";
import { http } from '../../services/http.service';
import './test-api.container.scss';

export class TestApiContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: store.getState().products
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        products: store.getState().products
      });
    });
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  componentDidMount = () => {
    this.getAPI();
  }

  getAPI = () => {
    http.get('products').then(data => {
      store.dispatch({
        type: GET_API,
        payload: {
          products: data.data
        }
      });
    });
  }

  postAPI = () => {
    const product = {
      name: "black jacket",
      category: "jacket",
      cost: "$50"
    };
    http.post('products', product).then(data => {
      store.dispatch({
        type: POST_API,
        payload: {
          products: data.data
        }
      });
    }, err => {
      console.log(err);
    });
  }
  
  deleteAPI = (id) => {
    http.delete('products/' + id).then(data => {
      store.dispatch({
        type: DELETE_API,
        payload: {
          id: id
        }
      });
    });
  }

  putAPI = () => {
    const product = {
      name: "black jacket",
      category: "jacket",
      cost: "$50"
    };
    http.put('products', product).then(data => {
      store.dispatch({
        type: PUT_API,
        payload: {
          products: data.data
        }
      });
    }, err => {
      console.log(err);
    });
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
