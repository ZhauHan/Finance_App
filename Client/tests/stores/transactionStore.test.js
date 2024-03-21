import { useTransactionStore } from '@/stores/transactionStore.js'
import { describe, beforeEach, it, expect} from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe('transactionStore', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useTransactionStore()
  })

  it('adds a transaction', () => {
    const transaction = { id: 1, amount: 100 }
    expect(store.transactions).toHaveLength(0);
    store.addTransaction(transaction)
    expect(store.transactions).toHaveLength(1);
    expect(store.transactions[0]).toEqual(transaction)
  })

  it('calculates the total', () => {
    const transactions = [
      { id: 1, amount: 100 },
      { id: 2, amount: 200 },
    ]
    transactions.forEach(transaction => store.addTransaction(transaction))
    expect(store.total).toBe(300)
  })
})