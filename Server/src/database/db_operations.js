const db = require('./connection');

function getAllTransactions() {
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

function addTransactions(amount, date, type, category) {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO transactions (amount, transaction_date, transaction_type, category) VALUES (?, ?, ?, ?)',
      [amount, date, type, category],
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

async function insertTransaction(transaction) {
  try {
    const result = await addTransactions(100, '2021-09-01', 'income', 'salary');
    console.log(result);
    console.log('Transaction added');
  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    db.end((err) => {
      if (err) {
        console.error('An error occurred while disconnecting:', err);
      } else {
        console.log('Disconnected from the database');
      }
    });
  }
}

module.exports = { fetchTransactions, insertTransaction };
