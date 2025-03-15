const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connection');
const transactionRoutes = require('./routes/transactions');
const userRoutes = require('./routes/users');

const app = express();

app.use(cors());

const port = 3000;
// const { insertTransaction, fetchTransactions } = require('./database/db_operations');

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
