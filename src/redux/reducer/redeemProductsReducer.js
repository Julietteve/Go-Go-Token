import {
    REDEEM_PRODUCTS_START,
    REDEEM_PRODUCTS_SUCCESS,
    REDEEM_PRODUCTS_FAILURE,
    REDEEM_PRODUCTS_RESTART_SUCCESS

} from '../actions';

const initialState = {
    isLoading: false,
    hasError: false,
    success: false,
}

export const redeemProductsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case REDEEM_PRODUCTS_START:
            return{
                ...state,
                isLoading:true,
                hasError:false
            }
        case REDEEM_PRODUCTS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                success:true,
            }
        case REDEEM_PRODUCTS_FAILURE:
            return{
                ...state,
                isLoading:false,
                hasError: action.payload.error
            }
        case REDEEM_PRODUCTS_RESTART_SUCCESS:
            return{
                ...state,
                isLoading:false,
                hasError:false,
                success:false,
            }
        default:
            return state;
    }
}