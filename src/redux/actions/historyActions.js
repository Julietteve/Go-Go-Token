export const FETCH_HISTORY_START = 'FETCH_HISTORY_START';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';
export const FETCH_HISTORY_FAILURE = 'FETCH_HISTORY_FAILURE';

export const fetchHistoryStart = () =>(
    {
        type: FETCH_HISTORY_START,
    }
)

export const fetchHistorySuccess = (userHistory) => (
    {
        type: FETCH_HISTORY_SUCCESS,
        payload: {userHistory}
    }
)

export const fetchHistoryFailure = (error) =>(
    {
        type: FETCH_HISTORY_FAILURE,
        payload:error
    }
)