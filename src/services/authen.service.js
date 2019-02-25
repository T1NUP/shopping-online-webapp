import { http } from './http.service';

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