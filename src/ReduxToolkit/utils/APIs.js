import axios from 'axios';

const url = 'https://memories-saya.herokuapp.com';
const urlConfig = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = formData =>
  axios.post(`${url}/user/signin`, formData);
export const fetchUserDetail = token =>
  axios.get(`${url}/user`, urlConfig(token));
export const fetchTodo = token => axios.get(`${url}/todo`, urlConfig(token));
export const fetchPokemon = name => axios.get(`${url}/${name}`);
