export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';

export const fetchProductsStart = () =>(
    {
        type: FETCH_PRODUCTS_START,
    }
)

export const fetchArticlesSuccess = (products) => (
    {
        type: FETCH_PRODUCTS_SUCCESS,
        payload : {products}
    }
)

export const fetchArticlesFailure = (error) =>(
    {
        type: FETCH_PRODUCTS_FAILURE,
        payload: {error}
    }
)

export const setCategory = (category) => (
    {
        type: SET_CATEGORY,
        payload: {category}
    }
)