const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    transaction_type: { type: String, enum: ['credit', 'debit'], required: true },
    category: { type: String, enum: ['income', 'expense', 'other'], required: true },
    description: { type: String },
    transaction_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);