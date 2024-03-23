<template>
    <form @submit.prevent="handleSubmit">
      <label for="newTransaction">Date</label>
      <input 
        type="date"
        placeholder="Enter Date"
        v-model="newDate"
      >
      <label for="newTransaction">Transaction Amount</label>
      <input 
        type="number"
        placeholder="Enter Amount"
        v-model="newAmount"
      >
      <label for="newTransaction">Transaction Type</label>
      <select v-model="newType">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <label for="newTransaction">Category</label>
      <select v-model="newCategory">
        <option value="groceries">Groceries</option>
        <option value="rent">Rent</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>
      <button>Add</button>
    </form>
  </template>
  
  <script>
  import { useTransactionStore } from '@/stores/transactionStore.js'
  import { ref } from 'vue'
  
  export default {
    setup() {
      const transactionStore = useTransactionStore();
      const newAmount = ref(0);
      const newDate = ref('');
      const newType = ref('');
      const newCategory = ref('');
  
      const handleSubmit = () => {
        if (newAmount.value > 0) {
          transactionStore.addTransaction({
            id: Math.floor(Math.random() * 1000),
            date: newDate.value,
            amount: newAmount.value,
            type: newType.value,
            category: newCategory.value
          });
          // in a real app, we would use a database to generate the id or 
          // use a library like uuid to generate a unique id
          newAmount.value = 0
          newDate.value = ''
          newType.value = ''
          newCategory.value = ''
        } 
      };
      return { newDate, newAmount, newType, newCategory, handleSubmit }
    }
  };
  </script>