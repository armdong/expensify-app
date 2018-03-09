import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

const expense = expenses[2]

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expense}
    />
  )
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  const updates = {
    note: 'Some new notes',
    amount: 288.50
  }

  wrapper.find(ExpenseForm).prop('onSubmit')(updates)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, updates)
})

test('should handle removeExpense', () => {
  wrapper.find('button').at(0).simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id })
})