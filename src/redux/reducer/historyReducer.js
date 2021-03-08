import {
    FETCH_HISTORY_START,
    FETCH_HISTORY_SUCCESS,
    FETCH_HISTORY_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    history: {},
    hasError: false
}

export const historyReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_HISTORY_START:
           return{
               ...state,
               isLoading: true,
           }
        case FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                isLoading:false,
                history: action.payload.userHistory,
            }
        case FETCH_HISTORY_FAILURE:
            return {
                ...state,
                isLoading:false,
                hasError: action.payload.error
            }
        default:
            return state;
    }
}