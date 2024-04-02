const db = require('./connection');
const { transactionSchema } = require('./schema');

function db_getTransactions() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM transactions', (err, transactions) => {
      if (err) {
        console.error('An error occurred while getting all transactions', err);
        reject(err);
      } else {
        resolve(transactions);
      }
    });
  });
}

async function fetchTransactions() {
  try {
    const transactions = await getAllTransactions();
    console.log(transactions);
    return transactions;
  } catch (err) {
    console.error('An error occurred:', err);
    return [];
  }
}

function db_addTransactions(transaction) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO transactions (amount, transaction_date, transaction_type, category) VALUES (?, ?, ?, ?)',
      [transaction.amount, transaction.date, transaction.type, transaction.category],
      (err, result) => {
        if (err) {
          console.error('An error occurred while adding a transaction', err);
          reject(err);
        } else {
          console.log('Transaction added');
          resolve(result);
        }
      }
    );
  });
}

async function addTransactions(transaction) {
  const { error } = transactionSchema.validate(transaction);
  if (error) {
    console.error('Validation error:', error.details[0].message);
    return;
  }
  try {
    const result = await db_addTransactions(transaction);
    console.log(result);
    console.log('Transaction added');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

function db_deleteTransaction(transactionId) {
  return new Promise((resolve, reject) => {
    db.query(
      'DELETE FROM transactions WHERE transaction_id = ?',
      [transactionId],
      (err, result) => {
        if (err) {
          console.error('An error occurred while deleting a transaction', err);
          reject(err);
        } else {
          console.log('Transaction deleted');
          resolve(result);
        }
      }
    );
  });
}

async function deleteTransaction(transactionId) {
  try {
    const result = await db_deleteTransaction(transactionId);
    console.log(result);
    console.log('Transaction deleted');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

module.exports = { fetchTransactions, insertTransaction };
