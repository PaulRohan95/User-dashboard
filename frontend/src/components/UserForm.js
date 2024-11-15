import React, { useState } from 'react';
import { addUser, editUser } from '../services/api';

function UserForm({ user, onClose, onSubmit }) {

    const [formData, setFormData] = useState(user || {firstName: '', lastName: '', email: '', department: ''});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (user && user.id) {
                console.log("Editing user with ID:", user.id);
                await editUser(user.id, formData);
            } else {
                await addUser(formData);
            }
            onSubmit();
        } catch (error) {
            console.error('Failed to save user:', error);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input name='firstName' value = {formData.firstName} onChange={handleChange} required />
        <label>Last Name: </label>
        <input name='lastName' value = {formData.lastName} onChange={handleChange} required />
        <label>Email: </label>
        <input name='email' value = {formData.email} onChange={handleChange} required />
        <label>Department: </label>
        <input name='department' value = {formData.department} onChange={handleChange} required />
        <button type='submit'>Save</button>
        <button type='button' onClick={onClose}>Cancel</button>
    </form>
  )
}

export default UserForm;