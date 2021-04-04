import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS,
    RESET_FILTER,
} 
from '../actions';

const initialState = {
    hasError: false,
    isLoading: false,
    products: [],
}

export const productsReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_START:
            return{
                ...state,
                isLoading:true,
                hasError:false,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                hasError:false,
                products: action.payload.products,
            }
        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                hasError:action.payload.error,
                products: []
            }
        default:
            return state
    }
}
