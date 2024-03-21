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
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.date }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.type }}</td>
        <td>{{ transaction.category }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { useTransactionStore } from '@/stores/transactionStore.js'
export default {
  setup() {
    const transactionStore = useTransactionStore();
    // return {
    //   transactions: transactionStore.transactions
    // }
  }
}
</script>