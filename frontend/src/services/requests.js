import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const createUser = async (user) => {
  const { data } = await api.post('/user', user);
  return data;
};

export const requestDataUsers = async () => {
  const { data } = await api.get('/user');
  return data;
};

export const updateUser = async (endpiont, body) => {
  const { data } = await api.put(endpiont, body);
  return data;
};

export const deleteUser = async (endpiont) => {
  await api.delete(endpiont);
};
