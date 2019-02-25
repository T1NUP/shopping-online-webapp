import { http } from './HttpService';

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