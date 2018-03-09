import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (updates) => {
    const { history, editExpense } = this.props
    const { id } = this.props.expense

    editExpense(id, updates)
    history.push('/')
  }

  onRemove = () => {
    const { history, removeExpense } = this.props
    const { id } = this.props.expense

    removeExpense({ id })
    history.push('/')
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: ({ id }) => dispatch(removeExpense({ id }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage)