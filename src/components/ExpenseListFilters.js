import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { setStartDate, setEndDate } = this.props

    setStartDate(startDate)
    setEndDate(endDate)
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }

  onTextChange = (e) => {
    const { setTextFilter } = this.props

    setTextFilter(e.target.value)
  }

  onSortChange = (e) => {
    const value = e.target.value
    const { sortByDate, sortByAmount } = this.props

    if (value === 'amount') {
      sortByAmount()
    } else if (value === 'date') {
      sortByDate()
    }
  }

  render() {
    const { text, sortBy, startDate, endDate } = this.props.filters
    const { calendarFocused } = this.state

    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={this.onTextChange}
        />
        <select
          value={sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          startDateId='expense_list_filters_start_date'
          endDate={endDate}
          endDateId='expense_list_filters_end_date'
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters)