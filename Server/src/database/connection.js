require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');

  const createTable = `
  CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount DECIMAL(10, 2),
    transaction_date DATE,
    transaction_type ENUM('income', 'expense'),
    category VARCHAR(50)
  )
  `;
  db.query(createTable, (err, result) => {
    if (err) throw err;
    console.log('Table created');
  });
});

module.exports = db;