import axios from 'axios';
import { store } from '../App';
import { SHOW_LOADING, HIDE_LOADING } from '../actions/actions';

const HttpConfig = {
  baseURL: 'http://localhost:4000/',
  headers: { 'Content-Type': 'application/json' }
};

const apiGet = (url, headers = {}) => {
  store.dispatch({
    type: SHOW_LOADING,
    payload: { loading: true }
  });
  return new Promise((resolve, reject) => {
    let customHeader = Object.assign({}, HttpConfig, headers);
    return axios.get(url, customHeader).then(data => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      resolve(data);
    }, err => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      console.log(err);
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}

const apiPost = (url, params = {}, headers) => {
  store.dispatch({
    type: SHOW_LOADING,
    payload: { loading: true }
  });
  return new Promise((resolve, reject) => {
    let customHeader = Object.assign({}, HttpConfig, headers);
    return axios.post(url, params, customHeader).then(data => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      resolve(data);
    }, err => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      console.log(err);
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}

const apiDelete = (url, headers) => {
  store.dispatch({
    type: SHOW_LOADING,
    payload: { loading: true }
  });
  return new Promise((resolve, reject) => {
    let customHeader = Object.assign({}, HttpConfig, headers);
    return axios.delete(url, customHeader).then(data => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      resolve(data);
    }, err => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      console.log(err);
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}


const apiPut = (url, params = {}, headers) => {
  store.dispatch({
    type: SHOW_LOADING,
    payload: { loading: true }
  });
  return new Promise((resolve, reject) => {
    let customHeader = Object.assign({}, HttpConfig, headers);
    return axios.put(url, params, customHeader).then(data => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      resolve(data);
    }, err => {
      store.dispatch({
        type: HIDE_LOADING,
        payload: { loading: false }
      });
      console.log(err);
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}


export const http = {
  get: apiGet,
  post: apiPost,
  delete: apiDelete,
  put: apiPut
}


