import { http } from './http';

export class Authentication {
  
  isLoggin = () => {
	  return true;
  }

  refreshToken = () => {
    http.post();
  }

  getToken = () => {
    http.get();
  }

}