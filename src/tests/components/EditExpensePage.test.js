import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn()
  removeExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
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
  const id = expenses[0].id

  wrapper.find(ExpenseForm).prop('onSubmit')(updates)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(id, updates)
})

test('should handle removeExpense', () => {
  const id = expenses[0].id

  wrapper.find('button').at(0).simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id })
})