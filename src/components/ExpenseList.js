import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length}
  </div>
)

export default connect((state) => ({
  expenses: state.expenses
}))(ExpenseList)