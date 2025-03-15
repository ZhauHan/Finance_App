const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');

const app = express();

app.use(cors());

const port = 3000;
// const { insertTransaction, fetchTransactions } = require('./database/db_operations');

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/transactions', (req, res) => {
    fetchTransactions()
    .then(transactions => {
      res.json(transactions);
    })
    .catch(err => {
      console.error('An error occurred:', err);
      res.status(500).send('An error occurred while fetching transactions');
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
