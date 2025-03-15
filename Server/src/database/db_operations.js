const User = require('./models/User');
const Transaction = require('./models/Transaction');

// Utility function for error handling
function handleError(operation, err) {
    console.error(`Error during ${operation}:`, err.message);
    throw new Error(`An error occurred during ${operation}`);
}

// User Operations
async function createUser(user) {
    try {
        const { error } = User.validate(user);
        if (error) throw new Error(error.details[0].message);
        
        const newUser = new User(user);
        return await newUser.save();
    } catch (err) {
        handleError('user creation', err);
    }
}

async function fetchAllUsers() {
    try {
        return await User.find();
    } catch (err) {
        handleError('fetching all users', err);
    }
}

async function fetchUserById(userId) {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');
        return user;
    } catch (err) {
        handleError('fetching user by ID', err);
    }
}

async function deleteUser(userId) {
    try {
        const user = await User.findByIdAndRemove(userId);
        if (!user) throw new Error('User not found');
        return user;
    } catch (err) {
        handleError('deleting user', err);
    }
}

// Transaction Operations
async function createTransaction(transaction) {
    try {
        const { error } = Transaction.validate(transaction);
        if (error) throw new Error(error.details[0].message);
        
        const newTransaction = new Transaction(transaction);
        return await newTransaction.save();
    } catch (err) {
        handleError('transaction creation', err);
    }
}

async function updateTransaction(transactionId, transaction) {
    try {
        const { error } = Transaction.validate(transaction);
        if (error) throw new Error(error.details[0].message);
        
        const updatedTransaction = await Transaction.findByIdAndUpdate(transactionId, transaction, { new: true });
        if (!updatedTransaction) throw new Error('Transaction not found');
        
        return updatedTransaction;
    } catch (err) {
        handleError('updating transaction', err);
    }
}

async function deleteTransaction(transactionId) {
    try {
        const transaction = await Transaction.findByIdAndRemove(transactionId);
        if (!transaction) throw new Error('Transaction not found');
        return transaction;
    } catch (err) {
        handleError('deleting transaction', err);
    }
}

async function fetchAllTransactions() {
    try {
        return await Transaction.find();
    } catch (err) {
        handleError('fetching all transactions', err);
    }
}

async function fetchTransactionById(transactionId) {
    try {
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) throw new Error('Transaction not found');
        return transaction;
    } catch (err) {
        handleError('fetching transaction by ID', err);
    }
}

async function fetchUserTransactions(userId) {
    try {
        const transactions = await Transaction.find({ user_id: userId });
        if (!transactions.length) throw new Error('No transactions found for this user');
        return transactions;
    } catch (err) {
        handleError('fetching user transactions', err);
    }
}

module.exports = { 
    createUser, 
    fetchAllUsers,
    fetchUserById,
    deleteUser, 
    createTransaction, 
    updateTransaction, 
    deleteTransaction, 
    fetchAllTransactions, 
    fetchTransactionById, 
    fetchUserTransactions 
};
