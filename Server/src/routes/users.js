const express = require('express');
const { createUser, fetchAllUsers, fetchUserById, deleteUser } = require('../database/db_operations');

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const user = req.body;
    try {
        const newUser = await createUser(user);
        res.status(201).json(newUser);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while creating the user');
    }
});

// Fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await fetchAllUsers();
        res.json(users);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while fetching users');
    }
});

// Fetch a user by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await fetchUserById(id);
        res.json(user);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while fetching the user');
    }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        res.status(204).send();
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while deleting the user');
    }
});

module.exports = router;