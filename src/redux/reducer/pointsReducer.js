import {
    ADD_POINTS_FAILURE,
    ADD_POINTS_START,
    ADD_POINTS_SUCCESS,
    ADD_POINTS_RESTART_SUCCESS,
    ADD_POINTS_RESTART_FAILURE,
} from '../actions';

const inicialState = {
    isLoading: false,
    hasError: false,
    success: false
}

export const pointsReducer = (state=inicialState, action) =>{
    switch (action.type) {
        case ADD_POINTS_START:
            return{
            ...state,
            isLoading:true,
            hasError:false
        }
        case ADD_POINTS_SUCCESS:
            return{
            ...state,
            isLoading:false,
            success:true
        }
        case ADD_POINTS_FAILURE:
            return{
            ...state,
            isLoading:false,
            hasError:action.payload.error,
        }
        case ADD_POINTS_RESTART_SUCCESS:
            return{
            ...state,
            isLoading:false,
            success:true,
        }
        case ADD_POINTS_RESTART_FAILURE:
            return {
            ...state,
            isLoading:false,
            hasError:true
            }
        default:
            return state;  
    }
}