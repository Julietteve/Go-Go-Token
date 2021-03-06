import { FETCH_PRODUCTS_START } from "./productsActions";

export const ADD_POINTS_START = 'FETCH_POINTS_START';
export const ADD_POINTS_SUCCESS = 'FETCH_POINTS_SUCCESS';
export const ADD_POINTS_FAILURE = 'FETCH_POINTS_FAILURE';
export const ADD_POINTS_RESTART_SUCCESS = 'FETCH_POINTS_RESTART_SUCCESS';
export const ADD_POINTS_RESTART_FAILURE = 'FETCH_POINTS_RESTART_FAILURE';

export const addPointsStart = () => (
    {
        type: ADD_POINTS_START,
    }
)

export const addPointsSuccess = () => (
    {
        type: ADD_POINTS_SUCCESS,
    }
)

export const addPointsFailure = (error) => (
    {
        type: ADD_POINTS_FAILURE,
        payload: {error}
    }
)

export const addPointsResetSuccess = () => (
    {
        type: ADD_POINTS_RESTART_SUCCESS,
    }
)

export const addPointsResetFailure = (error) => (
    {
        type : ADD_POINTS_RESTART_FAILURE,
        payload: {error}
    }
)