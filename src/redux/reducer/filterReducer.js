import {APPLY_FILTER,SET_CATEGORY,RESET_FILTER} from '../actions';

const initialState = {
    activeFilter : undefined,
    category: undefined,
}

export const filterReducer = (state=initialState, action) => {
        switch(action.type){
            case APPLY_FILTER: 
                return {
                    ...state,
                    activeFilter: action.payload.filter
                }
            case SET_CATEGORY:
                return {
                    ...state,
                    category : action.payload.category
                }
            case RESET_FILTER :
                return {
                    ...state,
                    category: undefined,
                    activeFilter:undefined,
                }
            default:
                return state;
        }
}