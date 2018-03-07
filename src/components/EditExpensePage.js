import React from 'react'

const EditExpensePage = ({
  history,
  location,
  match
}) => (
  <div>
    This is the expense with id of {match.params.id}.
  </div>
)

export default EditExpensePage