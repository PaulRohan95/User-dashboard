import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(API_URL);
export const addUser = async (user) => {
    const response = await axios.post('http://localhost:5000/users', user);
    return response.data; 
};
export const editUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
