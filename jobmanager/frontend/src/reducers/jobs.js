import { ADD_JOB, GET_JOBS, DELETE_JOB } from '../actions/types.js';

const initialState = {
    jobs: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_JOBS:
            return {
                ...state,
                jobs: action.payload,
            }
        case DELETE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter((job) => job.id !== action.payload),
                deleted: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        default:
            return state;
    }
}