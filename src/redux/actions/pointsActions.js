
import {
    ADD_POINTS_START,
    ADD_POINTS_SUCCESS,
    ADD_POINTS_FAILURE,
    ADD_POINTS_RESTART_SUCCESS,
    ADD_POINTS_RESTART_FAILURE
} 
from './';

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