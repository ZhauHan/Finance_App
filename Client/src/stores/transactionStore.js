import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transaction', {
  state: () => ({
    transactions: [],
  }),
  getters: {
    total() {
      return this.transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    },
    getTransactions () {
      return this.transactions;
    }

  },
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
  },
});