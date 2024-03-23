<template>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactionStore.getTransactions()" :key="transaction.id">
        <td>{{ new Date(transaction.transaction_date).toLocaleDateString() }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.transaction_type }}</td>
        <td>{{ transaction.category }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { useTransactionStore } from '@/stores/transactionStore.js'
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const transactionStore = useTransactionStore();
    return { transactionStore }
  }
}
</script>