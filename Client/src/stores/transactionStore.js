import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
  }),
  getters: {
    total() {
      return this.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    

  },
  actions: {
    getTransactions () {
      return this.transactions;
    },

    addTransaction(transaction) {
      this.transactions.push(transaction);
    },

    async loadTransactions() {
      try {
        const response = await fetch('http://localhost:3000/api/transactions');
        const transactions = await response.json();
        this.transactions = transactions;
      } catch (err) {
        console.error('An error occurred:', err);
      }
    }
  },
});