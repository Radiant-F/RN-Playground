import axios from 'axios';

const url = 'https://pokeapi.co/api/v2';
const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchLogin = formData => axios.post(url, formData);
export const fetchPokemon = name => axios.get(`${url}/${name}`);
