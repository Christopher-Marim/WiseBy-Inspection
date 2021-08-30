import axios from 'axios';
import { variable } from '../../commonsVariables';

const api = axios.create({
    baseURL: variable.api.url,
    headers: {
      Authorization:variable.api.authorization,
    },
  });
export default api;