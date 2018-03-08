import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    devToolsEnhancer()
  )

  return store
}