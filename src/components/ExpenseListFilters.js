import React from 'react'
import { connect } from 'react-redux'
import {
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../actions/filters'

const ExpenseListFilters = ({
  filters,
  dispatch
}) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={(e) => {
        dispatch(setTextFilter(e.target.value))
      }}
    />
    <select
      value={filters.sortBy}
      onChange={(e) => {
        const value = e.target.value

        if (value === 'amount') {
          dispatch(sortByAmount())
        } else if (value === 'date') {
          dispatch(sortByDate())
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(
  mapStateToProps
)(ExpenseListFilters)