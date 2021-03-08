import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} 
from './';

export const fetchProductsStart = () =>(
    {
        type: FETCH_PRODUCTS_START,
    }
)

export const fetchProductsSuccess = (products) => (
    {
        type: FETCH_PRODUCTS_SUCCESS,
        payload : {products}
    }
)

export const fetchProductsFailure = (error) =>(
    {
        type: FETCH_PRODUCTS_FAILURE,
        payload: {error}
    }
)


