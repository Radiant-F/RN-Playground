import axios from 'axios';
const url = 'https://somthgin.api.com';
const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchSignIn = formData => axios.post(url, formData);
// export const fetchSignIn = (formData,token) => axios.post(url, formData, {headers:{Authorization: `Bearer ${token}`}});
