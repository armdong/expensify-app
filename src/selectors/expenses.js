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
    const startDateMatch = typeof startDate !== 'number'
      || createdAt >= startDate

    const endDateMatch = typeof endDate !== 'number'
      || createdAt <= endDate

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