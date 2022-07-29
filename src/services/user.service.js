import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://3001-holyfs-proyectofinal-5zwcb1ywnhe.ws-eu54.gitpod.io/api';
class UserService {
  getPublicContent() {
    return axios.get(API_URL + '/user');
  }
  getUserBoard() {
    return axios.get(API_URL + '/private', { headers: authHeader() });
  }
}
export default new UserService();