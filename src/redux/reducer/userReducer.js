import {
    GET_USER_FAILURE,
    GET_USER_START,
    GET_USER_SUCCESS,
} from '../actions/userActions';

const initialState = {
    isLoading: false,
    userData: {},
    hasError: false,
}

export const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_USER_START:
            return{
                ...state,
                isLoading:true
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                isLoading:false,
                userData: action.payload.userData
            }
        case GET_USER_FAILURE:
            return{
                ...state,
                isLoading:false,
                hasError: action.payload.error
            }
        default:
            return state;
    }
}