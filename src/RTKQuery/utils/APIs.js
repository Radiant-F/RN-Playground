import axios from 'axios';

const host = 'https://memories-saya.herokuapp.com';
const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const signin = formData => axios.post(`${host}/user/signin`, formData);
export const userData = token => axios.get(`${host}/user`, config(token));
