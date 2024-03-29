import axios from 'axios';
import { store } from '../App';
import { SHOW_LOADING, HIDE_LOADING } from '../actions/actions';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
}

const HttpConfig = {
  baseURL: 'http://localhost:9000/',
  headers: getHeaders()
};

// axios.interceptors.response.use(null, (err) => {
//   console.log(err);
// });

const apiGet = (url, headers = {}) => {
  store.dispatch({ type: SHOW_LOADING });
  return new Promise((resolve, reject) => {
    axios.get(url, Object.assign({}, HttpConfig, headers)).then(data => {
      store.dispatch({ type: HIDE_LOADING });
      resolve(data);
    }, err => {
      store.dispatch({ type: HIDE_LOADING });
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}

const apiPost = (url, params = {}, headers = {}) => {
  store.dispatch({ type: SHOW_LOADING });
  return new Promise((resolve, reject) => {
    axios.post(url, params, Object.assign({}, HttpConfig, headers)).then(data => {
      store.dispatch({ type: HIDE_LOADING });
      resolve(data);
    }, err => {
      store.dispatch({ type: HIDE_LOADING });
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}

const apiDelete = (url, headers = {}) => {
  store.dispatch({ type: SHOW_LOADING });
  return new Promise((resolve, reject) => {
    axios.delete(url, Object.assign({}, HttpConfig, headers)).then(data => {
      store.dispatch({ type: HIDE_LOADING });
      resolve(data);
    }, err => {
      store.dispatch({ type: HIDE_LOADING });
      alert('Request fail, please contact with your administration!');
      reject(err);
    });
  });
}


const apiPut = (url, params = {}, headers = {}) => {
  store.dispatch({ type: SHOW_LOADING });
  return new Promise((resolve, reject) => {
    axios.put(url, params, Object.assign({}, HttpConfig, headers)).then(data => {
      store.dispatch({ type: HIDE_LOADING });
      resolve(data);
    }, err => {
      store.dispatch({ type: HIDE_LOADING });
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