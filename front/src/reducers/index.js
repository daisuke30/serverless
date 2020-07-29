import { combineReducers } from 'redux'
import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_PRODUCT,
} from '../actions/index'

const initialState = {
  error: null,
  pending: false,
  products: [],
  selectedProducts: []
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      console.log(action)
      return {
        ...state,
        pending: false,
        products: [...state.products, action.products]
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case ADD_PRODUCT:
      console.log(action)
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.product]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  productReducer
})

export default rootReducer