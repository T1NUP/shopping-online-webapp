import { http } from './http.service';
import { LOG_OUT, LOG_IN } from "../actions/actions";
import { CONFIG } from "../services/config.service";
import { store } from "../App";

export class Authentication {
  
  static isLoggin = () => {
    return localStorage.getItem('token') ? true : false;
  }

  static isTokenExpired = () => {
    if (localStorage.getItem('expire')) {
      console.log('current time:', new Date().getTime());
      console.log('expire time:', parseInt(localStorage.getItem('expire')));
      return new Date().getTime() > parseInt(localStorage.getItem('expire')) ? true : false;
    }
  }

  static loggin = () => {
    localStorage.setItem('token', 'ghjsnewwtaxajfsiuwrw9873ksdfs');
    localStorage.setItem('expire', new Date().getTime() + CONFIG.DurationOfToken*60*60*1000);
    store.dispatch({ type: LOG_IN });
  }

  static logout = () => {
    localStorage.clear();
    store.dispatch({ type: LOG_OUT });
  }

  static refreshToken = () => {
    return http.get('/token');
  }

  static saveTokenToLocal = (token) => {
    return new Promise((resolve, reject) => {
      localStorage.setItem('token', token);
      localStorage.setItem('expire', new Date().getTime() + CONFIG.DurationOfToken*60*60*1000);
      localStorage.getItem('token') && localStorage.getItem('expire') ? resolve(true) : reject(false);
    });
    
  }

}