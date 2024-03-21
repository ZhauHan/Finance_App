<template>
  <h1>Home</h1>
  <p>Welcome to Bee Finance! This is a simple app to track your income and expenses.</p>
  <NewTransaction></NewTransaction>
</template>
<script>
import NewTransaction from '@/components/NewTransaction.vue'
export default {
  components: {
    NewTransaction
  }
}

</script>