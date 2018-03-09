import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      canlendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value

    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value

    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ canlendarFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { description, amount, createdAt, note } = this.state

    if (!description || !amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))

      this.props.onSubmit({
        description,
        amount: parseFloat(amount),
        createdAt: createdAt.valueOf(),
        note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus={true}
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.canlendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm