import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../services/api';

function Users({ onEdit, onAdd }) {

    const [users, setusers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getUsers = async() => {
            try {
                const response = await fetchUsers();
                setusers(response.data);
            } catch {
                setError('Failed to fetch users');
            }
        };
        getUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await deleteUser(id);
                setusers(users.filter(user => user.id !== id));
            } catch {
                setError('Failed to delete user');
            }
        }
    };

  return (
    <div>
        <h2>Users</h2>
        <button onClick={onAdd}>Add User</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>
                        <td>
                            <button onClick={() => onEdit(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Users;