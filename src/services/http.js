import axios from 'axios';
import { store } from '../App';
import { SHOW_LOADING, HIDE_LOADING } from '../actions/actions';

const HttpConfig = {
  port: 4000,
  baseURL: 'http://localhost:4000/'
};

const get = (url, headers = {}) => {
  store.dispatch({
    type: SHOW_LOADING,
    payload: {
      loading: true
    }
  });
  console.log(store.getState());
  return new Promise((resolve, reject) => {
    let header = Object.assign({}, { 'Content-Type': 'application/json' }, headers);
    return axios.get(HttpConfig.baseURL + url, {
      headers: header
    }).then(data => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: {
          loading: false
        }
      });
      console.log(store.getState());
      resolve(data);
    }, err => {
      reject(err);
    });
  })
}

const post = (url, params, headers) => {
  
}

export const http = {
  get: get,
  post: post
}


