-- CREATE TABLE IF NOT EXISTS users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100),
--   email VARCHAR(100) UNIQUE
--   -- add other columns as needed
-- );

CREATE TABLE transactions IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10, 2),
  transaction_date DATE,
  transaction_type ENUM('income', 'expense'),
  category VARCHAR(50),
);