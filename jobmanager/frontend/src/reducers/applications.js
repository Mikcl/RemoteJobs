import { ADD_APPLICATION, GET_APPLICATIONS } from '../actions/types.js';

const initialState = {
    applications: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_APPLICATIONS:
            return {
                ...state,
                applications: action.payload,
            }
        case ADD_APPLICATION:
            return {
                ...state,
                applications: [action.payload]
            }
        default:
            return state;
    }
}