import axios from 'axios';
export default function callAPI(endpoint, method = 'GET', data) {
  return axios({
    method: method,
    url: `http://localhost:9000/${endpoint}`,
    data: data
  }).catch(function(error) {
    console.log(error);
  });
}
