/*
 * action types
 */

import axios from 'axios'

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
export const ADD_PRODUCT = 'ADD_PRODUCT'
/*
 * action creators
 */

export function fetchProductsPending() {
  console.log('pending')
  return { type: FETCH_PRODUCTS_PENDING }
}

export function fetchProductsSuccess(products) {
  console.log('success')
  return { type: FETCH_PRODUCTS_SUCCESS, products: products }
}

export function fetchProductsError(error) {
  return { type: FETCH_PRODUCTS_ERROR, error: error }
}


export function addProduct(product) {
  console.log('addpro')
  return { type: ADD_PRODUCT, product }
}

export function fetchProducts() {
  console.log('fetchProducts')
  return (dispatch) => {
    console.log('dispatch')
    dispatch(fetchProductsSuccess())
  }
}
