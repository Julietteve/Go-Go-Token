export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUserStart = () =>(
    {
        type: GET_USER_START
    }
)

export const  getUserSuccess = (userData) => (
    {
        type: GET_USER_SUCCESS,
        payload: {userData}
    }
)

export const getUserFailure = (error) => (
    {
        type: GET_USER_FAILURE,
        payload: {error}
    }
)