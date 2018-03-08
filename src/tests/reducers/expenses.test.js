import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Coffee',
    note: '',
    amount: 500,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: {
      note: 'A test note'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses.map((expense) => {
    return expense.id === action.id
      ? {...expense, ...action.updates}
      : expense
  }))
})

test('should not edit expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      note: 'Some notes'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})