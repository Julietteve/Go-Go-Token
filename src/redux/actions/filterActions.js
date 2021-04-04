import {APPLY_FILTER, RESET_FILTER, SET_CATEGORY} from '.'

export const applyFilter = (filter)=> ({
    type: APPLY_FILTER,
    payload: {filter}
})

export const setCategory = (category) =>({
    type: SET_CATEGORY,
    payload: {category}
})

export const resetFilter = () => ({
    type: RESET_FILTER,
})

