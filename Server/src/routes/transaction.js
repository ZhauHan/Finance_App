const express = require('express');
const { createTransaction, fetchUserTransactions, fetchTransactionById, updateTransaction, deleteTransaction } = require('../database/db_operations');

const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
    const { userId, amount, transactionType, category, description } = req.body;
    try {
        const transaction = await createTransaction({ user_id: userId, amount, transaction_type: transactionType, category, description });
        res.status(201).json(transaction);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while adding the transaction');
    }
});

// Fetch all transactions for a user
router.get('/', async (req, res) => {
    const { userId } = req.query;
    try {
        const transactions = await fetchUserTransactions(userId);
        res.json(transactions);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while fetching transactions');
    }
});

// Fetch a single transaction by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await fetchTransactionById(id);
        res.json(transaction);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while fetching the transaction');
    }
});

// Update a transaction by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedTransaction = await updateTransaction(id, updatedData);
        res.json(updatedTransaction);
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while updating the transaction');
    }
});

// Delete a transaction by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await deleteTransaction(id);
        res.status(204).send();
    } catch (err) {
        console.error('An error occurred:', err.message);
        res.status(500).send('An error occurred while deleting the transaction');
    }
});

module.exports = router;