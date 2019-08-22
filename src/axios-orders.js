import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-basics-857fc.firebaseio.com/'
});

export default instance;
