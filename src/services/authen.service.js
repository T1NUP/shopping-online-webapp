import { http } from './http.service';

export class Authentication {
  
  static isLoggin = () => {
    return localStorage.getItem('token') ? true : false;
  }

  refreshToken = () => {
    http.post();
  }

  getToken = () => {
    http.get();
  }

}