import moment from 'moment'

// Get visible expenses
const getVisibleExpenses = (
  expenses,
  {
    text,
    sortBy,
    startDate,
    endDate
  }
) => {
  return expenses.filter(({ description, createdAt }) => {
    const createdAtMoment = moment(createdAt)

    const startDateMatch = startDate
      ? startDate.isSameOrBefore(createdAtMoment, 'day')
      : true

    const endDateMatch = endDate
      ? endDate.isSameOrAfter(createdAtMoment, 'day')
      : true

    const textMatch = description.toLowerCase()
      .includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'amount':
      return a.amount - b.amount
      case 'date':
      default:
        return a.createdAt - b.createdAt
    }
  })
}

export default getVisibleExpenses