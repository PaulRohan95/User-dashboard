const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

//Getting users

app.get('/users', async(req, res) => {
    try {
        const response = await axios.get(BASE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});


//Adding a user

app.post('/users', async (req, res) => {
    try {
        const response = await axios.post(BASE_URL, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error adding user:', error.message);
        res.status(500).send('Error adding user');
    }
})


//Editing a user

app.put('/users/:id', async(req, res) => {
    try {
        const { id } =  req.params;
        const response = await axios.put(`${BASE_URL}/${id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error editing user');
    }
});


//Deleting a user

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await axios.delete(`${BASE_URL}/${id}`);
        res.send('User deleted');
    } catch (error) {
        res.status(500).send('Error deleting user');
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));