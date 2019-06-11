import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchPets = () =>
  axios.get('/pets').then(response => response.data);

export const fetchPetsWithId = id =>
  axios.get(`/pets/${id}`).then(response => response.data);
