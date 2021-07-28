import axios from 'axios';

const api = axios.create({
    baseURL: 'http://transportadora.etm.ltda',
    headers: {
      Authorization:
        'Basic ac0fb7c1dedf6eb4cb16e4dab5fac37a63bf447f74a8c47366f9e7f5d72d',
    },
  });
export default api;